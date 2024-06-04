import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { use, useEffect, useState } from "react";

const Specifications = () => {
  const [selectedSpecification, setSelectedSpecification] = useState(null);
  const [currentForm, setCurrentForm] = useState(null);

  useEffect(() => {
    getProjectDataFromLocalStorage();
  }, []);

  const getProjectDataFromLocalStorage = () => {
    if (
      localStorage.getItem("selectedProject") !== null &&
      localStorage.getItem("selectedProject") !== "undefined"
    ) {
      const selectedSpecifications = JSON.parse(
        localStorage.getItem("projectSpecifications")
      );
      setSelectedSpecification(selectedSpecifications);
    } else {
      setSelectedSpecification(null);
    }
  };

  const handleSpecificationClick = (specification) => {
    setCurrentForm(specification);
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
                  {field.inputType === "text" && (
                    <input
                      type="text"
                      className="form-control w-full !rounded-md"
                      id={field.attributeName}
                      placeholder={field.placeholder || field.label}
                      disabled={field.disabled}
                    />
                  )}
                  {field.inputType === "number" && (
                    <input
                      type="number"
                      className="form-control w-full !rounded-md"
                      id={field.attributeName}
                      placeholder={field.placeholder || field.label}
                      disabled={field.disabled}
                    />
                  )}
                  {field.inputType === "radio" && (
                    <div>
                      {field.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className="flex items-center mb-2"
                        >
                          <input
                            type="radio"
                            id={`${field.attributeName}-${option.value}`}
                            name={field.attributeName}
                            value={option.value}
                            className="form-radio text-primary"
                          />
                          <label
                            htmlFor={`${field.attributeName}-${option.value}`}
                            className="ml-2"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                  {field.inputType === "checkbox" && (
                    <div>
                      {field.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className="flex items-center mb-2"
                        >
                          <input
                            type="checkbox"
                            id={`${field.attributeName}-${option.value}`}
                            name={field.attributeName}
                            value={option.value}
                            className="form-checkbox text-primary"
                          />
                          <label
                            htmlFor={`${field.attributeName}-${option.value}`}
                            className="ml-2"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                  {field.inputType === "textarea" && (
                    <textarea
                      className="form-control w-full !rounded-md"
                      id={field.attributeName}
                      rows="3"
                      placeholder={field.placeholder || "Enter text..."}
                      disabled={field.disabled}
                    ></textarea>
                  )}
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
        activepage={`Specifications`}
        mainpage="Specifications"
        loadProjectData={getProjectDataFromLocalStorage}
        mainpageurl="/components/project-management/project-summary/"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {selectedSpecification?.map((specification, index) => (
          <button
            key={index}
            onClick={() => handleSpecificationClick(specification)}
            data-hs-overlay="#add-task"
          >
            <div className="mb-4 box">
              <div className="box-body">
                <div className="card-text">
                  <h4 className="text-lg font-semibold mb-2">
                    {specification.title}
                  </h4>
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
              <h6
                className="modal-title text-[1rem] font-semibold text-default dark:text-defaulttextcolor/70"
                id="mail-ComposeLabel"
              >
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
                data-hs-overlay="#add-task"
              >
                Cancel
              </button>
              <button
                type="button"
                className="ti-btn bg-primary text-white !font-medium"
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
