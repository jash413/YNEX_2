import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { useEffect, useState, useCallback } from "react";
import { jsPDF } from "jspdf";

const Specifications = () => {
  const [selectedSpecification, setSelectedSpecification] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentForm, setCurrentForm] = useState(null);
  const [formData, setFormData] = useState({});
  const [formStatus, setFormStatus] = useState({});
  const [tempFormData, setTempFormData] = useState({});

  const getProjectDataFromLocalStorage = useCallback(() => {
    const selectedProject = localStorage.getItem("selectedProject");
    if (selectedProject && selectedProject !== "undefined") {
      setSelectedProject(JSON.parse(selectedProject));
      const selectedSpecifications = JSON.parse(
        localStorage.getItem("projectSpecifications")
      );
      setSelectedSpecification(selectedSpecifications);
      return selectedSpecifications;
    } else {
      setSelectedSpecification(null);
      return null;
    }
  }, []);

  const isFieldComplete = useCallback((field, data) => {
    const fieldData = data[field.attributeName];
    if (field.inputType === "checkbox") {
      return Object.values(fieldData || {}).some(Boolean);
    } else if (field.inputType === "radio") {
      return !!fieldData;
    } else {
      return !!fieldData && fieldData.trim() !== "";
    }
  }, []);

  const isFormComplete = useCallback(
    (form, data) => {
      const formFields = form.sections.flatMap((section) => section.fields);
      return formFields.every((field) =>
        isFieldComplete(field, data[form.title] || {})
      );
    },
    [isFieldComplete]
  );

  const updateAllFormsStatus = useCallback(
    (data, specifications) => {
      const newStatus = {};
      specifications?.forEach((form) => {
        const formData = data[form.title] || {};
        const isComplete = isFormComplete(form, data);
        const isPartiallyComplete = form.sections.some((section) =>
          section.fields.some((field) => isFieldComplete(field, formData))
        );

        newStatus[form.title] = isComplete
          ? "complete"
          : isPartiallyComplete
          ? "partial"
          : "not-started";
      });
      setFormStatus(newStatus);
    },
    [isFormComplete, isFieldComplete]
  );

  useEffect(() => {
    const specifications = getProjectDataFromLocalStorage();
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      const parsedFormData = JSON.parse(savedFormData);
      setFormData(parsedFormData);
      updateAllFormsStatus(parsedFormData, specifications);
    } else {
      updateAllFormsStatus({}, specifications);
    }
  }, [getProjectDataFromLocalStorage, updateAllFormsStatus]);

  const handleSpecificationClick = (specification) => {
    setCurrentForm(specification);
    setTempFormData((prev) => ({
      ...prev,
      [specification.title]: formData[specification.title] || {},
    }));
  };

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
    const updatedFormData = { ...formData, ...tempFormData };
    setFormData(updatedFormData);
    updateAllFormsStatus(updatedFormData, selectedSpecification);
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
      const allFormsFilled = selectedSpecification.every((form) =>
        isFormComplete(form, formData)
      );

      if (!allFormsFilled) {
        alert(
          "Please fill in all required fields in all forms before generating the PDF."
        );
        return;
      }

      const doc = new jsPDF();
      let yPos = 20;
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 10;
      const cellPadding = 2;
      const lineHeight = 7;

      selectedSpecification.forEach((form, formIndex) => {
        if (formIndex > 0) {
          doc.addPage();
          yPos = 20;
        }

        doc
          .setFontSize(18)
          .setFont(undefined, "bold")
          .text(form.title, margin, yPos);
        yPos += 15;

        form.sections.forEach((section) => {
          doc
            .setFontSize(14)
            .setFont(undefined, "bold")
            .text(section.sectionName, margin, yPos);
          yPos += 10;

          doc
            .setFontSize(12)
            .setFont(undefined, "normal")
            .setDrawColor(0)
            .setFillColor(220, 220, 220)
            .rect(margin, yPos, pageWidth - 2 * margin, lineHeight, "F")
            .text(
              "Field",
              margin + cellPadding,
              yPos + lineHeight - cellPadding
            )
            .text("Value", pageWidth / 2, yPos + lineHeight - cellPadding);
          yPos += lineHeight;

          section.fields.forEach((field) => {
            const value = formData[form.title]?.[field.attributeName];
            let displayValue = "Not provided";

            if (field.inputType === "checkbox") {
              const checkedValues = Object.entries(value || {})
                .filter(([_, isChecked]) => isChecked)
                .map(([option, _]) => {
                  const optionValue = option.split("-").pop();
                  const foundOption = field.options.find(
                    (opt) => opt.value === optionValue
                  );
                  return foundOption ? foundOption.label : optionValue;
                });
              displayValue =
                checkedValues.length > 0
                  ? checkedValues.join(", ")
                  : "None selected";
            } else if (field.inputType === "radio") {
              const optionValue = value?.split("-").pop();
              const foundOption = field.options.find(
                (opt) => opt.value === optionValue
              );
              displayValue = foundOption
                ? foundOption.label
                : value || "Not selected";
            } else if (value) {
              displayValue = value;
            }

            doc
              .rect(margin, yPos, pageWidth - 2 * margin, lineHeight)
              .text(
                field.label,
                margin + cellPadding,
                yPos + lineHeight - cellPadding
              )
              .text(
                displayValue,
                pageWidth / 2,
                yPos + lineHeight - cellPadding,
                { maxWidth: pageWidth / 2 - margin - cellPadding }
              );
            yPos += lineHeight;

            // Handle text wrapping for long values
            const maxWidth = pageWidth / 2 - margin - cellPadding;
            const textLines = doc.splitTextToSize(displayValue, maxWidth);
            if (textLines.length > 1) {
              textLines.slice(1).forEach((line) => {
                yPos += lineHeight;
                if (yPos > 280) {
                  doc.addPage();
                  yPos = 20;
                }
                doc.text(line, pageWidth / 2, yPos + lineHeight - cellPadding);
              });
            }
          });

          yPos += 10;
          if (yPos > 280 && formIndex < selectedSpecification.length - 1) {
            doc.addPage();
            yPos = 20;
          }
        });
      });

      doc.save(`specifications-${selectedProject?.attributes?.name}.pdf`);
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

  return (
    <div>
      <Seo title={"Specifications"} />
      <Pageheader
        activepage={`${selectedProject?.attributes?.name || `Specifications`}`}
        mainpage="Specifications"
        loadProjectData={getProjectDataFromLocalStorage}
        mainpageurl="/components/project-management/project-summary/"
      />
      <div className="mt-4">
        <button
          type="button"
          className="ti-btn bg-primary text-white !font-medium"
          onClick={generatePDF}
        >
          Print All Forms as PDF
        </button>
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {selectedSpecification?.map((specification, index) => (
          <button
            key={index}
            onClick={() => handleSpecificationClick(specification)}
            data-hs-overlay="#add-task"
          >
            <div
              className={`mb-4 box border-2 ${
                formStatus[specification.title] === "complete"
                  ? "border-green"
                  : formStatus[specification.title] === "partial"
                  ? "border-yellow"
                  : "border-gray"
              }`}
            >
              <div className="box-body">
                <div className="card-text">
                  <h4 className="text-lg font-semibold mb-2">
                    {specification.title}
                  </h4>
                  <p className="text-sm">
                    Status:{" "}
                    {formStatus[specification.title] === "complete"
                      ? "✅ Complete"
                      : formStatus[specification.title] === "partial"
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
                Specification Details
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
    </div>
  );
};

Specifications.layout = "Contentlayout";

export default Specifications;
