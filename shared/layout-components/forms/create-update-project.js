import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { z } from "zod";
import { SingleButtons } from "@/shared/data/ui-elements/dropdownsdata";
import Link from "next/link";
import dynamic from "next/dynamic";
const MultiSelect = dynamic(() => import("react-multi-select-component"), {
  ssr: false,
});
const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });
const today = new Date();
const isoDate = today.toISOString();
import { FilePond } from "react-filepond";
import network from "@/config";

const formDataSchema = z.object({
  selectedProject: z.string(),
  client_name: z.string(),
  assigned_to: z.array(z.string()),
  description: z.string(),
  address1: z.string(),
  address2: z.string(),
  zipcode: z.number(),
  state: z.string(),
  budget: z.number(),
  start_date: z.date(),
  end_date: z.date(),
  customer_invite: z.string(),
  files: z.array(z.any()),
});

const CreateUpdateProject = (props) => {
  const formType = props.formType;
  const [formData, setFormData] = useState({
    selectedProject: "",
    client_name: "", // Client Name
    assigned_to: [], // Assigned To
    description: "",
    address1: "",
    address2: "",
    zipcode: "", // zipcode
    state: "", // State
    budget: "", // Price for customer/Budget
    start_date: "", // Start date
    end_date: "", // End date
    customer_invite: "", // Invite customer (including setting permissions - using phone number or email or user id)
    files: [], // Files drop area → Add the ability to upload multiple files like gmail allows user to upload multiple files with drop and drag functionality
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectTemplate, setSelectTemplate] = useState("");
  const [multiselectdata, setMultiselectdata] = useState([]);
  const Selectoption1 = [
    { value: "custom_template", label: "Custom Template" },
    { value: "remodel_template", label: "Remodel Template" },
  ];

  useEffect(() => {
    fetch("/api/users/")
      .then((response) => response.json())
      .then((data) => setMultiselectdata(data.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, files: Array.from(event.target.files) });
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

    try {
      // formDataSchema.parse(formData);
        axios
          .post(
            `${network.onlineUrl}api/project`,
            { data: {type:"string", attributes: {...formData, projectTemplate: selectTemplate, home_owner_id: 100007,
              gc_business_id: 101000 } }},
            {
              headers: {
                Authorization: `${network.token}`,
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
        name: "",
        client_name: "", // Client Name
        assigned_to: [], // Assigned To
        description: "",
        address1: "",
        address2: "",
        zipcode: "", // zipcode
        state: "", // State
        budget: "", // Price for customer/Budget
        start_date: "", // Start date
        end_date: "", // End date
        customer_invite: "", // Invite customer (including setting permissions - using phone number or email or user id)
        files: [], // Files drop area → Add the ability to upload multiple files like gmail allows user to upload multiple files with drop and drag functionality
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Seo
        title={`${formType === "update" ? "Update Project" : "Create Project"}`}
      />
      <Pageheader
        activepage={`${formType === "update" ? "Update" : "Create"} Project`}
        mainpage="Projects"
        mainpageurl="/components/project-management/project-summary/"
        loadProjectData={getDataFromLocalStorage}
        createProject={false}
        isDisabled={true}
      />

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
                        Select Template :
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
                    {/* input field for Client Name */}
                    <div className="xl:col-span-4 col-span-12">
                      <label htmlFor="client_name" className="form-label">
                        Client Name :
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="client_name"
                        placeholder="Enter Client Name"
                        value={formData.client_name}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* input field for Budget */}
                    <div className="xl:col-span-6 col-span-12">
                      <label htmlFor="budget" className="form-label">
                        Budget :
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="budget"
                        placeholder="Enter Budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* input field for Project Address */}
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
                        zipcode :
                      </label>
                      <input
                        required
                        type="text"
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
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="state"
                        placeholder="Enter State"
                        value={formData.state}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                      <label className="form-label">Assigned To</label>
                      <Select
                        required
                        isMulti
                        name="state"
                        options={multiselectdata.map((user) => ({
                          value: user.id,
                          label: user.attributes.username,
                        }))}
                        className="js-example-placeholder-multiple w-full js-states"
                        menuPlacement="auto"
                        classNamePrefix="Select2"
                        onChange={(selectedOptions) => {
                          setFormData({
                            ...formData,
                            assigned_to: selectedOptions.map(
                              (option) => option.value
                            ),
                          });
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
                    <div className="xl:col-span-12 col-span-12">
                      <label htmlFor="inviteCustomer" className="form-label">
                        Invite Customer :
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="customer_invite"
                        placeholder="Enter Phone Number, Email, or User ID"
                        value={formData.customer_invite}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Add other input fields here */}
                    <div className="xl:col-span-12 col-span-12">
                      <label htmlFor="text-area" className="form-label">
                        Attachments
                      </label>
                      <FilePond
                        files={formData.files}
                        onprocessfile={(error, file, response) => {
                          console.log("File upload complete", file, response);
                          if (error) {
                            console.log("Error during file processing:", error);
                            return;
                          }
                          // Set file_url to the server response
                          setFormData({
                            ...formData,
                            files: formData.files.map((fileItem) =>
                              fileItem.id === file.id
                                ? {
                                    ...fileItem,
                                    file_url: response.body[0].file_url,
                                  }
                                : fileItem
                            ),
                          });
                        }}
                        allowMultiple={true}
                        maxFiles={3}
                        server={{
                          url: "https://backend-api-topaz.vercel.app/api/upload",
                          process: {
                            headers: {
                              Authorization: `Bearer ${network.token}`,
                            },
                          },
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
    </div>
  );
};
CreateUpdateProject.layout = "Contentlayout";

export default CreateUpdateProject;
