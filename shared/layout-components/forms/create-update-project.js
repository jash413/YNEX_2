import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });
import { FilePond } from "react-filepond";
import network from "@/config";
import Preloader from "@/shared/layout-components/preloader/preloader";

const CreateUpdateProject = (props) => {
  const router = useRouter();
  const formType = props.formType;
  const [formData, setFormData] = useState({
    selectedProject: "",
    description: "",
    address1: "",
    address2: "",
    zipcode: "", // zipcode
    state: "", // State
    budget: "", // Price for customer/Budget
    start_date: "", // Start date
    end_date: "", // End date
    exception_notes: "",
    businessId: "",
    name: "",
    files: [],
    lot_size_in_acres: "",
    square_footage: "",
    number_of_beds: "",
    number_of_baths: "",
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectTemplate, setSelectTemplate] = useState("");
  const [multiselectdata, setMultiselectdata] = useState([]);
  const [gcBusiness, setGcBuisness] = useState([]);

  const [files, setFiles] = useState([]);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const states = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
  };

  const loadingState = () => {
    setLoading(true);
  };

  useEffect(() => {
    if (window !== undefined) {
      setGcBuisness(JSON.parse(localStorage.getItem("gcBuisness")));
    }
  }, []);

  const Selectoption1 = [
    { value: "custom_template", label: "Custom Template" },
    { value: "remodel_template", label: "Remodel Template" },
  ];

  const handleFileChange = (response) => {
    axios
      .patch(
        `${network.onlineUrl}api/file/${response[0].id}`,
        {
          data: {
            type: "file",
            attributes: {
              project_id: selectedProject.id,
            },
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setFormData({
      ...formData,
      files: [...formData.files, response[0].file_url],
    });
  };

  useEffect(() => {
    fetch("/api/users/")
      .then((response) => response.json())
      .then((data) => setMultiselectdata(data.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleFileRemove = (error, file) => {
    if (error) {
      console.log("Error removing file:", error);
      return;
    }

    // Remove the file from the state
    const updatedFiles = files.filter((f) => f.source !== file.source);
    setFiles(updatedFiles);

    // Remove the file URL from the formData
    const updatedDocumentUrls = formData.files.filter(
      (url) => url !== file.source
    );
    setFormData({ ...formData, files: updatedDocumentUrls });
  };

  useEffect(() => {
    getDataFromLocalStorage();
    if (window !== undefined) {
      setToken(localStorage.getItem("token"));
    }
    if (props.formType === "update" && token) {
      axios
        .get(`${network.onlineUrl}api/project/${props.projectId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const project = response.data.body.data;
          setFiles(
            response.data.body.data.attributes.document_urls.map((url) => {
              return { source: url };
            })
          );
          setFormData({
            selectedProject: project.id,
            description: project.attributes.description,
            address1: project.attributes.address1,
            address2: project.attributes.address2,
            zipcode: project.attributes.zipcode,
            state: project.attributes.state,
            budget: project.attributes.budget_estimated,
            start_date: project.attributes.start_date
              ? new Date(project.attributes.start_date)
              : "",
            end_date: project.attributes.end_date
              ? new Date(project.attributes.end_date)
              : "",
            exception_notes: project.attributes.exception_notes,
            selectTemplate: project.attributes.project_type,
            files: project.attributes.document_urls,
            name: project.attributes.name,
            businessId: project.attributes.gc_business_id,
            lot_size_in_acres: project.attributes.lot_size_in_acres,
            square_footage: project.attributes.square_footage,
            number_of_beds: project.attributes.number_of_beds,
            number_of_baths: project.attributes.number_of_baths,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (props.formType === "create") {
      setLoading(false);
    }
  }, [token]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const getDataFromLocalStorage = () => {
    if (
      localStorage.getItem("selectedProject") !== null &&
      localStorage.getItem("selectedProject") !== "undefined"
    ) {
      const selectedProject = JSON.parse(
        localStorage.getItem("selectedProject")
      );
      setSelectedProject(selectedProject);
    } else {
      setSelectedProject(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userid = localStorage.getItem("userid");
    toast.info("Please wait while we are processing your request", {
      toastId: "loading",
      autoClose: false,
    });

    if (props.formType === "update") {
      axios
        .patch(
          `${network.onlineUrl}api/project/${selectedProject.id}`,
          {
            data: {
              type: "project",
              attributes: {
                name: formData.name,
                description: formData.description,
                address1: formData.address1,
                address2: formData.address2,
                zipcode: formData.zipcode,
                state: formData.state,
                budget_estimated: Number(formData.budget),
                home_owner_id: Number(userid),
                gc_business_id: formData.businessId,
                project_type: selectTemplate,
                exception_notes: formData.exception_notes,
                start_date: formData.start_date,
                end_date: formData.end_date,
                document_urls: formData.files,
                lot_size_in_acres: Number(formData.lot_size_in_acres),
                square_footage: Number(formData.square_footage),
                number_of_beds: Number(formData.number_of_beds),
                number_of_baths: Number(formData.number_of_baths),
              },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(async (response) => {
          if (response.data.status == 200) {
            setFormData({
              name: "",
              description: "",
              address1: "",
              address2: "",
              zipcode: "", // zipcode
              state: "", // State
              budget: "", // Price for customer/Budget
              exception_notes: "",
              lot_size_in_acres: "",
              square_footage: "",
              number_of_beds: "",
              number_of_baths: "",
              start_date: "", // Start date
              end_date: "", // End date
              files: [], // Files drop area → Add the ability to upload multiple files like gmail allows user to upload multiple files with drop and drag functionality
            });
            toast.dismiss("loading");
            await axios
              .get(`${network.onlineUrl}api/project/${selectedProject.id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              .then((response) => {
                const project = response.data.body.data;
                localStorage.setItem(
                  "selectedProject",
                  JSON.stringify(project)
                );
              });
            toast.success("Project Updated Successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            setTimeout(() => {
              router.push("/components/project-management/project-summary/");
            }, 1000);
          }
        })
        .catch((error) => {
          toast.dismiss("loading");
          toast.error("Error in updating project", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }

    if (props.formType === "create") {
      axios
        .post(
          `${network.onlineUrl}api/project`,
          {
            data: {
              type: "project",
              attributes: {
                name: formData.name,
                description: formData.description,
                address1: formData.address1,
                address2: formData.address2,
                zipcode: formData.zipcode,
                state: formData.state,
                budget_estimated: Number(formData.budget),
                home_owner_id: Number(userid),
                gc_business_id: formData.businessId,
                project_type: selectTemplate,
                exception_notes: formData.exception_notes,
                start_date: formData.start_date,
                end_date: formData.end_date,
                document_urls: formData.files,
                lot_size_in_acres: Number(formData.lot_size_in_acres),
                square_footage: Number(formData.square_footage),
                number_of_beds: Number(formData.number_of_beds),
                number_of_baths: Number(formData.number_of_baths),
              },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          setFormData({
            name: "",
            description: "",
            address1: "",
            land_size_in_acres: "",
            square_footage: "",
            number_of_beds: "",
            number_of_baths: "",
            address2: "",
            zipcode: "", // zipcode
            state: "", // State
            budget: "", // Price for customer/Budget
            exception_notes: "",
            start_date: "", // Start date
            end_date: "", // End date
            files: [], // Files drop area → Add the ability to upload multiple files like gmail allows user to upload multiple files with drop and drag functionality
          });
          toast.dismiss("loading");
          toast.success("Project Created Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            router.push("/components/project-management/project-summary/");
          }, 1000);
        })
        .catch((error) => {
          toast.dismiss("loading");
          toast.error("Error in creating project", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };

  return (
    <div>
      <ToastContainer />
      <Seo
        title={`${formType === "update" ? "Update Project" : "Create Project"}`}
      />
      <Pageheader
        activepage={`${formType === "update" ? "Update" : "Create"} Project`}
        mainpage="Projects"
        mainpageurl="/components/project-management/project-summary/"
        loadProjectData={getDataFromLocalStorage}
        createProject={false}
        loadingState={loadingState}
        isDisabled={true}
      />
      {loading ? (
        <Preloader />
      ) : (
        <div className="box-body">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 gap-6">
              <div className="xl:col-span-12 col-span-12">
                <div className="box custom-box">
                  <div className="box-header">
                    <div className="box-title">
                      {formType === "update"
                        ? "Update Project"
                        : "Create Project"}
                    </div>
                  </div>
                  <div className="box-body">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="xl:col-span-4 col-span-12">
                        <label htmlFor="template" className="form-label">
                          Select Type :
                        </label>
                        <Select
                          required
                          name="template"
                          options={Selectoption1}
                          className="js-example-basic-single w-full"
                          isSearchable
                          menuPlacement="auto"
                          classNamePrefix="Select2"
                          defaultValue={[Selectoption1[0]]}
                          onChange={(option) => setSelectTemplate(option.value)}
                        />
                      </div>
                      <div className="xl:col-span-4 col-span-12">
                        <label htmlFor="selectedProject" className="form-label">
                          Project Name :
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter Project Name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="xl:col-span-4 col-span-12">
                        <label className="form-label">Exception Notes</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="exception_notes"
                          placeholder="Enter Exception Notes"
                          value={formData.exception_notes}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="businessId" className="form-label">
                          Business ID
                        </label>
                        <Select
                          id="businessId"
                          value={
                            gcBusiness?.find(
                              (business) => business.id === formData.businessId
                            )
                              ? {
                                  value: formData.businessId,
                                  label: gcBusiness.find(
                                    (business) =>
                                      business.id === formData.businessId
                                  ).attributes.name,
                                }
                              : null
                          }
                          onChange={(selectedOption) =>
                            handleInputChange({
                              target: {
                                id: "businessId",
                                value: selectedOption.value,
                              },
                            })
                          }
                          options={gcBusiness.map((business) => ({
                            value: business.id,
                            label: business.attributes.name,
                          }))}
                        />
                      </div>

                      {/* input field for Budget */}
                      <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="budget" className="form-label">
                          Budget :
                        </label>
                        <input
                          required
                          type="number"
                          className="form-control"
                          id="budget"
                          placeholder="Enter Budget"
                          value={formData.budget}
                          min={0}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* input field for Project address line one*/}
                      <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="project_address" className="form-label">
                          Project Address Line 1:
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="address1"
                          placeholder="Enter Project Address"
                          value={formData.address1}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="xl:col-span-6 col-span-12">
                        <label
                          htmlFor="lot_size_in_acres"
                          className="form-label"
                        >
                          Lot Size in Acres
                        </label>
                        <input
                          required
                          type="number"
                          min={0}
                          className="form-control"
                          id="lot_size_in_acres"
                          placeholder="Enter Lot Size in Acres"
                          value={formData.lot_size_in_acres}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="square_footage" className="form-label">
                          Square Footage
                        </label>
                        <input
                          required
                          type="number"
                          min={0}
                          className="form-control"
                          id="square_footage"
                          placeholder="Enter Square Footage"
                          value={formData.square_footage}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="number_of_beds" className="form-label">
                          Number of Beds
                        </label>
                        <input
                          required
                          type="number"
                          min={0}
                          className="form-control"
                          id="number_of_beds"
                          placeholder="Enter Number of Beds"
                          value={formData.number_of_beds}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="number_of_baths" className="form-label">
                          Number of Baths
                        </label>
                        <input
                          required
                          type="number"
                          min={0}
                          className="form-control"
                          id="number_of_baths"
                          placeholder="Enter Number of Baths"
                          value={formData.number_of_baths}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* input field for Project address line two*/}
                      <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="project_address" className="form-label">
                          Project Address Line 2 :
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="Enter Project Address"
                          value={formData.address2}
                          onChange={handleInputChange}
                        />
                      </div>
                      {/* input field for zipcode */}
                      <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="zipcode" className="form-label">
                          Zipcode :
                        </label>
                        <input
                          required
                          type="number"
                          min={0}
                          className="form-control"
                          id="zipcode"
                          placeholder="Enter zipcode"
                          value={formData.zipcode}
                          onChange={handleInputChange}
                        />
                      </div>
                      {/* input field for state */}
                      <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="state" className="form-label">
                          State :
                        </label>
                        <Select
                          required
                          name="state"
                          options={Object.entries(states).map(
                            ([key, value]) => ({
                              value: key,
                              label: value,
                            })
                          )}
                          className="js-example-basic-single w-full"
                          isSearchable
                          menuPlacement="auto"
                          classNamePrefix="Select2"
                          defaultValue={[
                            {
                              value: formData.state,
                              label: states[formData.state],
                            },
                          ]}
                          value={{
                            value: formData.state,
                            label: states[formData.state],
                          }}
                          onChange={(option) => {
                            setFormData({ ...formData, state: option.value });
                          }}
                        />
                      </div>

                      <div className="xl:col-span-12 col-span-12 mb-4">
                        <label htmlFor="description" className="form-label">
                          Project Description :
                        </label>
                        <textarea
                          required
                          className="form-control"
                          id="description"
                          rows="3"
                          cols="50"
                          value={formData.description}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="xl:col-span-6 col-span-12">
                        <label className="form-label">Start Date :</label>
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-text text-muted">
                              <i className="ri-calendar-line"></i>
                            </div>
                            <DatePicker
                              required
                              placeholder="Choose the date"
                              className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10"
                              selected={formData.start_date}
                              onChange={(date) =>
                                setFormData({ ...formData, start_date: date })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* input field for End date */}
                      <div className="xl:col-span-6 col-span-12">
                        <label className="form-label">End Date :</label>
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-text text-muted">
                              <i className="ri-calendar-line"></i>
                            </div>
                            <DatePicker
                              required
                              placeholder="Choose the date"
                              className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10"
                              selected={formData.end_date}
                              onChange={(date) =>
                                setFormData({ ...formData, end_date: date })
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Add other input fields here */}
                      <div className="xl:col-span-12 col-span-12">
                        <label htmlFor="text-area" className="form-label">
                          Attachments
                        </label>
                        <FilePond
                          files={files}
                          onupdatefiles={setFiles}
                          allowMultiple={true}
                          maxFiles={3}
                          onremovefile={handleFileRemove}
                          server={{
                            url: "https://backend-api-topaz.vercel.app/api/upload",
                            process: {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            },
                          }}
                          onprocessfile={(error, file) => {
                            if (error) {
                              console.log("error", error);
                            } else {
                              handleFileChange(JSON.parse(file.serverId));
                            }
                          }}
                          name="files"
                          labelIdle="Drag & Drop your file here or click "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="box-footer">
                    <button
                      type="submit"
                      className="ti-btn ti-btn-primary btn-wave ms-auto float-right"
                    >
                      {formType === "update"
                        ? "Update Project"
                        : "Create Project"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
CreateUpdateProject.layout = "Contentlayout";

export default CreateUpdateProject;
