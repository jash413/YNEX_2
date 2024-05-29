import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { z } from "zod";
import Link from "next/link";
const today = new Date();
const isoDate = today.toISOString();
import { FilePond } from "react-filepond";
import network from "@/config";

const formDataSchema = z.object({
  task_amount_from_sub: z
    .string()
    .nonempty({ message: "Task Amount From Sub is required" }),
  task_status: z.string().nonempty({ message: "Task Status is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  task_details_from_sub: z
    .string()
    .nonempty({ message: "Task Details From Sub is required" }),
  task_outscope: z.string().nonempty({ message: "Task Outscope is required" }),
  task_inscope: z.string().nonempty({ message: "Task Inscope is required" }),
  subcontractor_id: z
    .string()
    .nonempty({ message: "Subcontractor ID is required" }),
  builder_notes: z.string().nonempty({ message: "Builder Notes is required" }),
  task_payment_terms: z
    .string()
    .nonempty({ message: "Task Payment Terms is required" }),
});

const CreateUpdateTask = (props) => {
  const formType = props.formType;
  const taskId = props.taskId;
  const [formData, setFormData] = useState({status: "", priority: ""});
  const [scopeData, setScopeData] = useState({
    task_inscope: [{ taskDetail: "" }],
    task_outscope: [{ taskDetail: "" }],
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTaskCostCodes, setSelectedTaskCostCodes] = useState([]);
  const [progress, setProgress] = useState(0);
  const handleProgressChange = (event) => {
    setProgress(event.target.value);
  };

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  const formDataSchema = z.object({
    status: z.string().nonempty({ message: "Status is required" }),
    priority: z.string().nonempty({ message: "Priority is required" }),
  });
  
  
    const handleInputChange = (event) => {
      setFormData({ ...formData, [event.target.id]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      try {
        formDataSchema.parse(formData);
  
        setFormData({
          status: "",
          priority: "",
        });
      } catch (error) {
        console.log(error);
      }
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


  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const [files, setFiles] = useState([]);

  return (
    <div>
      <Seo title={`${formType === "update" ? "Update Task" : "Create Task"}`} />
      <Pageheader
        activepage={`${formType === "update" ? "Update" : "Create"} Task`}
        mainpage="Tasks"
        mainpageurl="/components/project-management/tasks"
        loadProjectData={getDataFromLocalStorage}
      />
      <div className="flex justify-between">
        <div className="ml-auto"></div>
      </div>
      <div className="box custom-box">
        <div className="box-header">
          <div className="box-title">Select Your Task And Cost Code</div>
        </div>
        <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4 p-4">
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Select Task/Trade Name</label>
            <Select
              name="task"
              className="js-example-basic-single w-full"
              isDisabled={!selectedProject}
              isSearchable
              menuPlacement="auto"
              classNamePrefix="Select2"
              placeholder="Select Task"
              onChange={(e) => {
                const selectedTask = selectedProject.tasks.find(
                  (task) => task.task_id === e.value
                );
                setFormData((prevState) => ({
                  ...prevState,
                  selectedTask: selectedTask.task_name,
                  selectedCostCode: selectedTask.cost_code_id,
                }));
                setSelectedTaskCostCodes([selectedTask.cost_code_id]);
              }}
              onClick={getDataFromLocalStorage}
              options={
                selectedProject && selectedProject.tasks && selectedProject.tasks.length > 0
                  ? selectedProject.tasks.map((task) => ({
                      value: task.task_id,
                      label: task.task_name,
                    }))
                  : []
              }
            />
          </div>
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Cost Code</label>
            <Select
              name="cost_code"
              id="cost_code_id"
              isDisabled={selectedTaskCostCodes.length === 0}
              options={selectedTaskCostCodes.map((cost_code) => ({
                value: cost_code,
                label: cost_code,
              }))}
              className="js-example-basic-single w-full"
              isSearchable
              menuPlacement="auto"
              classNamePrefix="Select2"
              placeholder="Select Cost Code"
              onChange={(e) => {
                setFormData((prevState) => ({
                  ...prevState,
                  cost_code_id: e.value,
                }));
              }}
            />
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box-header justify-between">
          <div className="box-title">{`${
            formType === "update" ? "Update Task" : "Create A New Task"
          }`}</div>
        </div>
        <div className="box-body">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="taskName" className="form-label">
                  Task Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="taskName"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="taskId" className="form-label">
                  Task ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="taskId"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="form-label">
                  Task Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  cols="50"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bid_amount" className="form-label">
                  Upload Files
                </label>
                <FilePond
                  className="multiple-filepond"
                  accepted-file-types={[
                    "application/pdf",
                    "image/png",
                    "image/jpeg",
                    "image/gif",
                  ]}
                  server="/api"
                  allowReorder={true}
                  files={files}
                  onChange={handleFileChange}
                  allowMultiple={true}
                  allowImagePreview={true}
                  maxFiles={10}
                  name="filepond"
                  labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                />
              </div>
              <div className="mb-4">
                <label htmlFor="assignedTo" className="form-label">
                  Assigned To
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="assignedTo"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                {/* progress input int*/}
                <div className="mb-4">
                  <label htmlFor="progress" className="form-label">
                    Progress
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    max={100}
                    id="progress"
                    onChange={handleProgressChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="startDate" className="form-label">
                  Starting Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="assignedDate" className="form-label">
                  Assigned Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="assignedDate"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <div className="hs-dropdown ti-dropdown me-2 ml-2">
                  <button
                    className="ti-btn ti-btn-primary-full ti-dropdown-toggle !py-2"
                    type="button"
                    id="dropdownMenuButton1"
                    aria-expanded="false"
                  >
                    Status
                    <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                  </button>
                  <ul
                    className="hs-dropdown-menu ti-dropdown-menu hidden"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link
                        className="ti-dropdown-item"
                        href="#!"
                        onClick={() => handleInputChange("pending")}
                      >
                        Pending
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="ti-dropdown-item"
                        href="#!"
                        onClick={() => handleInputChange("inProgress")}
                      >
                        In Progress
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="ti-dropdown-item"
                        href="#!"
                        onClick={() => handleInputChange("completed")}
                      >
                        Completed
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="priority" className="form-label">
                  Priority
                </label>
                <div className="hs-dropdown ti-dropdown me-2 ml-2">
                  <button
                    className="ti-btn ti-btn-primary-full ti-dropdown-toggle !py-2"
                    type="button"
                    id="dropdownMenuButton2"
                    aria-expanded="false"
                  >
                    Priority
                    <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                  </button>
                  <ul
                    className="hs-dropdown-menu ti-dropdown-menu hidden"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <Link
                        className="ti-dropdown-item"
                        href="#!"
                        onClick={() => handleInputChange("low")}
                      >
                        Low
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="ti-dropdown-item"
                        href="#!"
                        onClick={() => handleInputChange("medium")}
                      >
                        Medium
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="ti-dropdown-item"
                        href="#!"
                        onClick={() => handleInputChange("high")}
                      >
                        High
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="budget" className="form-label">
                  Budget
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="budget"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="actual" className="form-label">
                  Actual
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="actual"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button className="ti-btn ti-btn-primary-full" type="submit">
              Create Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
CreateUpdateTask.layout = "Contentlayout";

export default CreateUpdateTask;
