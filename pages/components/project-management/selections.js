import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Preloader from "@/shared/layout-components/preloader/preloader";
import { useEffect, useState, useCallback } from "react";
import { jsPDF } from "jspdf";

const Selections = () => {
  const [selectedSelection, setSelectedSelection] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentForm, setCurrentForm] = useState(null);
  const [formData, setFormData] = useState({});
  const [formStatus, setFormStatus] = useState({});
  const [tempFormData, setTempFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const isFieldComplete = useCallback((field, data) => {
    const fieldData = data[field.attributeName];
    if (field.inputType === "checkbox") {
      return Object.values(fieldData || {}).some(Boolean);
    } else if (field.inputType === "radio") {
      return !!fieldData;
    } else if (field.disabled === true) {
      return true;
    } else {
      return !!fieldData && fieldData.trim() !== "";
    }
  }, []);

  const isFormComplete = useCallback(
    (form, data) => {
      const formFields = form.attributes.spec_configurations.sections.flatMap(
        (section) => section.fields
      );
      return formFields.every((field) =>
        isFieldComplete(
          field,
          data[form.attributes.spec_configurations.title] || {}
        )
      );
    },
    [isFieldComplete]
  );

  const updateAllFormsStatus = useCallback(
    (data, Selections) => {
      const newStatus = {};
      Selections?.forEach((form) => {
        const formData = data[form.attributes.spec_configurations.title] || {};
        const isComplete = isFormComplete(form, data);
        const isPartiallyComplete =
          form.attributes.spec_configurations.sections.some((section) =>
            section.fields.some((field) => isFieldComplete(field, formData))
          );

        newStatus[form.attributes.code] = isComplete
          ? "complete"
          : isPartiallyComplete
          ? "partial"
          : "not-started";
      });
      setFormStatus(newStatus);
    },
    [isFormComplete, isFieldComplete]
  );

  const getProjectDataFromLocalStorage = useCallback(async () => {
    try {
      const selectedProject = localStorage.getItem("selectedProject");
      if (selectedProject && selectedProject !== "undefined") {
        const parsedProject = JSON.parse(selectedProject);
        const selectedSelections = JSON.parse(
          localStorage.getItem("projectSelections")
        );

        const savedFormData = localStorage.getItem("formData");
        const parsedFormData = savedFormData ? JSON.parse(savedFormData) : {};

        return { parsedProject, selectedSelections, parsedFormData };
      } else {
        return {
          parsedProject: null,
          selectedSelections: null,
          parsedFormData: {},
        };
      }
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return {
        parsedProject: null,
        selectedSelections: null,
        parsedFormData: {},
      };
    }
  }, []);

  const updateStates = useCallback(
    (data) => {
      const { parsedProject, selectedSelections, parsedFormData } = data;
      setSelectedProject(parsedProject);
      setSelectedSelection(selectedSelections);
      setFormData(parsedFormData);
      updateAllFormsStatus(parsedFormData, selectedSelections);
    },
    [updateAllFormsStatus]
  );

  const loadProjectData = useCallback(async () => {
    try {
      const data = await getProjectDataFromLocalStorage();
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      updateStates(data);
    } catch (error) {
      console.error("Error loading project data:", error);
    } finally {
      setLoading(false);
    }
  }, [getProjectDataFromLocalStorage, updateStates]);

  useEffect(() => {
    loadProjectData();
  }, [loadProjectData]);

  useEffect(() => {
    if (selectedSelection && formData) {
      updateAllFormsStatus(formData, selectedSelection);
    }
  }, [selectedSelection, formData, updateAllFormsStatus]);

  const handleSelectionClick = (Selection) => {
    setCurrentForm(Selection?.attributes?.spec_configurations); // Update the current form being edited
    setTempFormData((prev) => ({
      ...prev,
      [Selection.attributes.code]:
        formData[Selection.attributes.spec_configurations.title] || {},
    }));
  };

  useEffect(() => {
    if (currentForm && formData[currentForm.title]) {
      setTempFormData((prev) => ({
        ...prev,
        [currentForm.title]: formData[currentForm.title],
      }));
    }
  }, [currentForm, formData]);

  const handleInputChange = (e, field) => {
    const { value, type, checked, id } = e.target;
    const fieldValue = type === "checkbox" || type === "radio" ? id : value;

    setTempFormData((prevData) => ({
      ...prevData,
      [currentForm.title]: {
        ...(prevData[currentForm.title] || {}),
        [field.attributeName]:
          type === "checkbox"
            ? {
                ...(prevData[currentForm.title]?.[field.attributeName] || {}),
                [fieldValue]: checked,
              }
            : fieldValue,
      },
    }));
  };

  const handleSave = () => {
    const updatedFormData = {
      ...formData,
      [currentForm.title]: tempFormData[currentForm.title], // Update the current form's data
    };
    setFormData(updatedFormData);
    updateAllFormsStatus(updatedFormData, selectedSelection);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    document.querySelector('[data-hs-overlay="#add-task"]').click();
  };

  const handleCancel = () => {
    setTempFormData((prev) => ({
      ...prev,
      [currentForm.title]: formData[currentForm.title] || {},
    }));
    document.querySelector('[data-hs-overlay="#add-task"]').click();
  };

  const generatePDF = () => {
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 15;
      const lineHeight = 7;
      let yPos = 15;

      const getFieldValue = (form, field) => {
        try {
          return formData[form.attributes.spec_configurations.title]?.[
            field.attributeName
          ];
        } catch {
          return field.inputType === "checkbox" ? {} : "";
        }
      };

      const drawText = (text, x, y, options = {}) => {
        try {
          doc.text(text, x, y, options);
        } catch (e) {
          console.error(`Error drawing text: ${text}`, e);
        }
      };

      const handleOptionField = (field, value, xPos, yPos) => {
        const boxSize = 4;
        const boxMargin = 1;

        field.options.forEach((option) => {
          const optionValue = option.value.toString();
          const isChecked =
            field.inputType === "checkbox"
              ? value?.[`${field.attributeName}-${optionValue}`] || false
              : value?.split("-").pop() === optionValue;

          // Draw the box
          doc.setDrawColor(0).rect(xPos, yPos - boxSize + 1, boxSize, boxSize);

          // Draw tick (✓) inside the box if selected
          if (isChecked) {
            doc
              .setDrawColor(0)
              .setFillColor(0)
              .rect(xPos, yPos - boxSize + 1, boxSize, boxSize, "F");
          }

          // Draw the label
          drawText(option.label, xPos + boxSize + boxMargin + 1, yPos);

          xPos += doc.getTextWidth(option.label) + boxSize + boxMargin + 15;
          if (xPos > pageWidth - margin - 50) {
            xPos = margin;
            yPos += lineHeight + 3;
          }
        });
        return yPos;
      };

      selectedSelection.forEach((form, formIndex) => {
        if (formIndex > 0) {
          doc.addPage();
          yPos = 15;
        }

        try {
          doc
            .setDrawColor(0)
            .setFillColor(255, 250, 205)
            .rect(margin, yPos, pageWidth - 2 * margin, 15, "F")
            .setFontSize(14)
            .setFont(undefined, "bold")
            .setTextColor(0)
            .text(
              form.attributes.spec_configurations.title,
              margin + 5,
              yPos + 10
            );
          yPos += 25;
        } catch (e) {
          console.error(
            `Error adding form header: ${form.attributes.spec_configurations.title}`,
            e
          );
        }

        form.attributes.spec_configurations.sections.forEach((section) => {
          try {
            doc
              .setFontSize(12)
              .setFont(undefined, "bold")
              .text(section.sectionName.toUpperCase() + ":", margin, yPos)
              .setFont(undefined, "normal");
            yPos += lineHeight * 1.5;
          } catch (e) {
            console.error(`Error adding section: ${section.sectionName}`, e);
          }

          section.fields.forEach((field) => {
            try {
              const value = getFieldValue(form, field);
              const label = field.label ? `${field.label}:` : "";
              const attributeName = field.attributeName
                ? `${field.attributeName}:`
                : "";
              const labelText = label || attributeName || "";
              const labelWidth = doc.getTextWidth(labelText);

              if (
                field.inputType === "checkbox" ||
                field.inputType === "radio"
              ) {
                drawText(labelText, margin, yPos + 3);
                let xPos = margin + labelWidth + 10;
                yPos = handleOptionField(field, value, xPos, yPos);
                yPos += lineHeight + 5;
              } else {
                if (field.disabled) {
                  drawText(labelText, margin, yPos + lineHeight - 2);
                  yPos += lineHeight + 5;
                } else {
                  drawText(labelText, margin, yPos + lineHeight - 2);
                  const maxLineWidth = pageWidth - margin - labelWidth - 30;

                  doc
                    .setDrawColor(0)
                    .line(
                      margin + labelWidth + 5,
                      yPos + lineHeight,
                      pageWidth - margin - 10,
                      yPos + lineHeight
                    );

                  const displayValue = value?.toString() || "";
                  drawText(
                    displayValue,
                    margin + labelWidth + 10,
                    yPos + lineHeight - 2,
                    {
                      maxWidth: maxLineWidth,
                    }
                  );
                  yPos += lineHeight + 5;

                  const textLines = doc.splitTextToSize(
                    displayValue,
                    maxLineWidth
                  );
                  if (textLines.length > 1) {
                    textLines.slice(1).forEach((line) => {
                      yPos += lineHeight;
                      drawText(
                        line,
                        margin + labelWidth + 10,
                        yPos + lineHeight - 2
                      );
                    });
                    yPos += lineHeight;
                  }
                }
              }

              if (yPos > pageHeight - 30) {
                doc.addPage();
                yPos = 15;
              }
            } catch (e) {
              console.error(
                `Error adding field: ${field.label || field.attributeName}`,
                e
              );
            }
          });

          yPos += lineHeight;
        });
      });

      doc.save(
        `Selections-${selectedProject?.attributes?.name || "project"}.pdf`
      );
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("An error occurred while generating the PDF. Please try again.");
    }
  };

  const renderInputField = (field) => {
    const value = tempFormData[currentForm.title]?.[field.attributeName] || "";
    switch (field.inputType) {
      case "text":
      case "number":
        return (
          <input
            type={field.inputType}
            className="form-control w-full !rounded-md"
            id={field.attributeName}
            placeholder={field.placeholder || field.label}
            disabled={field.disabled}
            value={value}
            onChange={(e) => handleInputChange(e, field)}
          />
        );
      case "radio":
        return field.options.map((option, optionIndex) => (
          <div key={optionIndex} className="flex items-center mb-2">
            <input
              type="radio"
              id={`${field.attributeName}-${option.value}`}
              name={field.attributeName}
              value={option.value}
              className="form-radio text-primary"
              checked={value === `${field.attributeName}-${option.value}`}
              onChange={(e) => handleInputChange(e, field)}
            />
            <label
              htmlFor={`${field.attributeName}-${option.value}`}
              className="ml-2"
            >
              {option.label}
            </label>
          </div>
        ));
      case "checkbox":
        return field.options.map((option, optionIndex) => (
          <div key={optionIndex} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`${field.attributeName}-${option.value}`}
              name={field.attributeName}
              value={option.value}
              className="form-checkbox text-primary"
              checked={
                value?.[`${field.attributeName}-${option.value}`] || false
              }
              onChange={(e) => handleInputChange(e, field)}
            />
            <label
              htmlFor={`${field.attributeName}-${option.value}`}
              className="ml-2"
            >
              {option.label}
            </label>
          </div>
        ));
      case "textarea":
        return (
          <textarea
            className="form-control w-full !rounded-md"
            id={field.attributeName}
            rows="3"
            placeholder={field.placeholder || "Enter text..."}
            disabled={field.disabled}
            value={value}
            onChange={(e) => handleInputChange(e, field)}
          ></textarea>
        );
      default:
        return null;
    }
  };

  const renderDynamicForm = () => {
    if (!currentForm) return null;

    return (
      <div className="ti-modal-body px-4 !overflow-visible">
        <h6 className="text-lg font-semibold mb-4">{currentForm.title}</h6>
        {currentForm.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h6 className="text-base font-semibold mb-3">
              {section.sectionName}
            </h6>
            <div className="grid grid-cols-12 gap-6">
              {section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="xl:col-span-6 col-span-12">
                  <label htmlFor={field.attributeName} className="form-label">
                    {field.label}
                  </label>
                  {renderInputField(field)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const startLoading = () => {
    setLoading(true);
  };

  return (
    <div>
      <Seo title={"Selections"} />
      <Pageheader
        activepage={`${selectedProject?.attributes?.name || `Selections`}`}
        mainpage="Selections"
        loadProjectData={loadProjectData}
        mainpageurl="/components/project-management/project-summary/"
        loadingState={startLoading}
      />
      {loading ? (
        <Preloader />
      ) : selectedProject ? (
        <>
          {selectedSelection && selectedSelection.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="mb-4">
                <button
                  type="button"
                  className="ti-btn bg-primary text-white !font-medium"
                  onClick={generatePDF}
                >
                  Download All Forms as PDF
                </button>
              </div>
              <div className="mb-4">
                <button
                  type="button"
                  className="ti-btn bg-primary text-white !font-medium"
                  onClick={() => {
                    console.log(formData);
                  }}
                >
                  Upload Selections
                </button>
              </div>
            </div>
          )}
          <br />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {selectedSelection?.map((Selection, index) => (
              <button
                key={index}
                onClick={() => handleSelectionClick(Selection)}
                data-hs-overlay="#add-task"
              >
                <div
                  className={`mb-4 box border-2 ${
                    formStatus[Selection.attributes.code] === "complete"
                      ? "border-green"
                      : formStatus[Selection.attributes.code] === "partial"
                      ? "border-yellow"
                      : "border-gray"
                  }`}
                >
                  <div className="box-body">
                    <div className="card-text">
                      <h4 className="text-lg font-semibold mb-2">
                        {Selection.attributes.code}
                      </h4>
                      <p className="text-sm">
                        Status:{" "}
                        {formStatus[Selection.attributes.code] === "complete"
                          ? "✅ Complete"
                          : formStatus[Selection.attributes.code] === "partial"
                          ? "🔶 In Progress"
                          : "🔲 Not Started"}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div id="add-task" className="hs-overlay hidden ti-modal">
            <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out lg:!max-w-4xl lg:w-full m-3 lg:!mx-auto">
              <div className="ti-modal-content">
                <div className="ti-modal-header">
                  <h6 className="modal-title text-[1rem] font-semibold text-default dark:text-defaulttextcolor/70">
                    Selection Details
                  </h6>
                  <button
                    type="button"
                    className="hs-dropdown-toggle !text-[1rem] !font-semibold"
                    data-hs-overlay="#add-task"
                  >
                    <span className="sr-only">Close</span>
                    <i className="ri-close-line"></i>
                  </button>
                </div>
                {renderDynamicForm()}
                <div className="ti-modal-footer">
                  <button
                    type="button"
                    className="hs-dropdown-toggle ti-btn ti-btn-light align-middle"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="ti-btn bg-primary text-white !font-medium"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="box">
          <div className="box-body">
            <div className="flex items-center justify-center">
              <h1 className="text-center">No project selected</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Selections.layout = "Contentlayout";

export default Selections;
