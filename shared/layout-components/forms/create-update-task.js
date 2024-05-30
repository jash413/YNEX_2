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
  const [formData, setFormData] = useState({
    taskCode: null,
    taskName: null,
    description: null,
    startDate: null,
    endDate: null,
    taskOwnerId: null,
    businessId: null,
    status: null,
    notes: null,
    estimatedBudget: null,
    actualSpent: null,
    percentageComplete: null,
    files_urls: [],
  });
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
  const handleFileUpload = (response) => {
    setFormData(prevState => ({
      ...prevState,
      files_urls: [...formData.files_urls , response[0].file_url] // assuming the server response has a file_url property
    }));
  };
  useEffect(() => {
    if (formType === "update") {
      axios
        .get(`${network.onlineUrl}api/task/${taskId}`, {
          headers: {
            Authorization: `Bearer ${network.token}`,
          },
        })
        .then((response) => {
          const task = response.body.data;
          {task && setFormData({
            taskCode: task.task_code_id,
            taskName: task.task_name,
            description: task.description,
            startDate: task.start_date,
            endDate: task.end_date,
            taskOwnerId: task.task_owner_id,
            businessId: task.business_id,
            status: task.status,
            notes: task.notes,
            estimatedBudget: task.budget_estimated,
            actualSpent: task.actual_spent,
            percentageComplete: task.percentage_complete,
            filesUrls: task.files_urls,
          });}
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

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
      // formDataSchema.parse(formData);
      if (formType === "update") {
        axios
          .put(`${network.onlineUrl}api/task/${taskId}`, formData, {
            headers: {
              "Authorization": `Bearer ${network.token}`,
            },
          })
          .then((response) => {
            if (response.status === 200) {
              console.log("Task updated successfully");
              setFormData({
              });
            }
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .post(`${network.onlineUrl}api/task`, formData, {
            headers: {
              "Authorization": `Bearer ${network.token}`,
            },
          })
          .then((response) => {
            if (response.status === 200) {
              console.log("Task created successfully");
              setFormData({
              });
            }
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }

     
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
                <label htmlFor="taskCode" className="form-label">
                  Task Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="taskCode"
                  onChange={handleInputChange}
                />
              </div>
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
                <label htmlFor="startDate" className="form-label">
                  Start Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="endDate" className="form-label">
                  End Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="endDate"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="taskOwnerId" className="form-label">
                  Task Owner ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="taskOwnerId"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="businessId" className="form-label">
                  Business ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="businessId"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="percentageComplete" className="form-label">
                  Percentage Complete
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="percentageComplete"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="form-label">
                  Description
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
                <label htmlFor="notes" className="form-label">
                  Notes
                </label>
                <textarea
                  className="form-control"
                  id="notes"
                  rows="3"
                  cols="50"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="estimatedBudget" className="form-label">
                  Estimated Budget
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="estimatedBudget"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="actualSpent" className="form-label">
                  Actual Spent
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="actualSpent"
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="mb-4">
  <label htmlFor="filesUrls" className="form-label">
    Files URLs
  </label>
  <FilePond
    className="multiple-filepond"
    acceptedFileTypes={[
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/gif",
    ]}
    server={{
      url: `${network.onlineUrl}api/upload`,
      process: {
        headers: {
          Authorization: `Bearer ${network.token}`,
        },
        onload: (response) => handleFileUpload(JSON.parse(response)),
      },
    }}
    allowReorder={true}
    files={files}
    onupdatefiles={setFiles}
    allowMultiple={true}
    allowImagePreview={true}
    maxFiles={10}
    name="files"
    labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
  />
</div>
            </div>
            <button className="ti-btn ti-btn-primary-full" type="submit">
              {formType === "update" ? "Update Task" : "Create Task"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
CreateUpdateTask.layout = "Contentlayout";

export default CreateUpdateTask;
