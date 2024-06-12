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
import { data } from "@/shared/data/tables/datatabledata";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import format from "date-fns/format";
import { useRouter } from "next/router";
import Preloader from "../preloader/preloader";
import { to } from "react-spring";

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
  const router = useRouter();
  const formType = props.formType;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

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
    notes: [],
    estimatedBudget: null,
    actualSpent: null,
    percentageComplete: null,
    files_urls: [],
    task_original_id: null,
  });
  const [scopeData, setScopeData] = useState({
    task_inscope: [{ taskDetail: "" }],
    task_outscope: [{ taskDetail: "" }],
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTaskCostCodes, setSelectedTaskCostCodes] = useState([]);
  const [progress, setProgress] = useState(0);
  const [gcBusiness, setGcBuisness] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateLocalStorage = async () => {
    try {
      const response = await axios.get(
        `${network.onlineUrl}api/task?filter[project]=${selectedProject.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.setItem(
        "projectTasks",
        JSON.stringify(response.data.body.data)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const loadingState = () => {
    setLoading(true);
  };
  const handleProgressChange = (event) => {
    setProgress(event.target.value);
  };
  const handleFileUpload = (response) => {
    setFormData((prevState) => ({
      ...prevState,
      files_urls: formData.files_urls
        ? [...formData.files_urls, response[0].file_url]
        : [response[0].file_url],
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
          const task = response.data.body.data.attributes;

          setFiles(task.files_urls.map((file_url) => ({ source: file_url })));
          setFormData({
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
            task_original_id: response.data.body.data.id,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  useEffect(() => {
    if (window !== undefined) {
      setGcBuisness(JSON.parse(localStorage.getItem("gcBuisness")));
    }
  }, []);

  const formDataSchema = z.object({
    status: z.string().nonempty({ message: "Status is required" }),
    priority: z.string().nonempty({ message: "Priority is required" }),
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const updatedValue = id === "notes" ? value.split("\n") : value;
    setFormData({ ...formData, [id]: updatedValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.info("Please wait while we are processing your request", {
      toastId: "loading",
      autoClose: false,
    });

    try {
      // formDataSchema.parse(formData);
      if (formType === "update") {
        axios
          .put(
            `${network.onlineUrl}api/task/${taskId}`,
            {
              data: {
                type: "string",
                id: formData.task_original_id,
                attributes: {
                  task_code_id: formData.taskCode,
                  task_name: formData.taskName,
                  description: formData.description,
                  start_date: formData.startDate
                    ? new Date(formData.startDate)
                    : null,
                  end_date: formData.endDate
                    ? new Date(formData.endDate)
                    : null,
                  task_owner_id: formData.taskOwnerId,
                  business_id: formData.businessId,
                  status: formData.status,
                  notes: formData.notes,
                  budget_estimated: formData.estimatedBudget,
                  actual_spent: formData.actualSpent,
                  percentage_complete: formData.percentageComplete,
                  files_urls: formData.files_urls,
                },
              },
            },
            {
              headers: {
                Authorization: `Bearer ${network.token}`,
              },
            }
          )
          .then((response) => {
            if (response.status === 200) {
              updateLocalStorage().then(() => {
                toast.dismiss("loading");
                setFormData({});
                toast.success("Task updated successfully");
                setTimeout(() => {
                  router.push("/components/project-management/tasks");
                }, 1000);
              });
            }
            console.log(response);
          })
          .catch((error) => {
            toast.dismiss("loading");
            toast.error("Error updating task");
          });
      } else {
        axios
          .post(
            `${network.onlineUrl}api/task`,
            {
              data: {
                type: "task",

                attributes: {
                  project_id: selectedProject.id,
                  task_code_id: Number(formData.taskCode),
                  task_name: formData.taskName,
                  description: formData.description,
                  start_date: formData.startDate
                    ? new Date(formData.startDate)
                    : null,
                  end_date: formData.endDate
                    ? new Date(formData.endDate)
                    : null,
                  task_owner_id: formData.taskOwnerId,
                  business_id: formData.businessId,
                  status: formData.status,
                  notes: formData.notes,
                  budget_estimated: formData.estimatedBudget,
                  actual_spent: formData.actualSpent,
                  percentage_complete: formData.percentageComplete,
                  files_urls: formData.files_urls,
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
            if (response.data.status === 201) {
              updateLocalStorage().then(() => {
                toast.dismiss("loading");
                setFormData({});
                toast.success("Task created successfully");
                setTimeout(() => {
                  router.push("/components/project-management/tasks");
                }, 1000);
              });
            }
            console.log(response);
          })
          .catch((error) => {
            toast.dismiss("loading");
            toast.error("Error creating task");
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
      <ToastContainer />
      <Pageheader
        mainpage={`${formType === "update" ? "Update" : "Create"} Task`}
        activepage={`${selectedProject?.attributes?.name || `Project Summary`}`}
        mainpageurl="/components/project-management/tasks"
        loadProjectData={getDataFromLocalStorage}
        loadingState={loadingState}
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
                  value={formData.taskCode}
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
                  value={formData.taskName}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="startDate" className="form-label">
                  Start Date
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="startDate"
                  onChange={handleInputChange}
                  value={
                    formData.startDate
                      ? format(
                          new Date(formData.startDate),
                          "yyyy-MM-dd'T'HH:mm"
                        )
                      : null
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="endDate" className="form-label">
                  End Date
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="endDate"
                  onChange={handleInputChange}
                  value={
                    formData.endDate
                      ? format(new Date(formData.endDate), "yyyy-MM-dd'T'HH:mm")
                      : null
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="taskOwnerId" className="form-label">
                  Task Owner ID
                </label>
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  id="taskOwnerId"
                  onChange={handleInputChange}
                  value={formData.taskOwnerId}
                />
              </div>
              <div className="mb-4">
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
                            (business) => business.id === formData.businessId
                          ).attributes.name,
                        }
                      : null
                  }
                  onChange={(selectedOption) =>
                    handleInputChange({
                      target: { id: "businessId", value: selectedOption.value },
                    })
                  }
                  options={gcBusiness.map((business) => ({
                    value: business.id,
                    label: business.attributes.name,
                  }))}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <Select
                  id="status"
                  value={{ value: formData.status, label: formData.status }}
                  onChange={(selectedOption) =>
                    handleInputChange({
                      target: { id: "status", value: selectedOption.value },
                    })
                  }
                  options={[
                    { value: "Yet to Start", label: "Yet to Start" },
                    { value: "In progress", label: "In progress" },
                    { value: "Complete", label: "Complete" },
                    { value: "Delayed", label: "Delayed" },
                  ]}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="percentageComplete" className="form-label">
                  Percentage Complete
                </label>
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  id="percentageComplete"
                  onChange={handleInputChange}
                  value={formData.percentageComplete}
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
                  value={formData.description}
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
                  value={formData.notes?.join("\n")}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="estimatedBudget" className="form-label">
                  Estimated Budget
                </label>
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  id="estimatedBudget"
                  onChange={handleInputChange}
                  value={formData.estimatedBudget}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="actualSpent" className="form-label">
                  Actual Spent
                </label>
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  id="actualSpent"
                  onChange={handleInputChange}
                  value={formData.actualSpent}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
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
                      onload: (response) =>
                        handleFileUpload(JSON.parse(response)),
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
            <div className="box-footer">
              <button
                type="submit"
                className="ti-btn ti-btn-primary btn-wave ms-auto float-right"
              >
                {formType === "update" ? "Update Task" : "Create Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
CreateUpdateTask.layout = "Contentlayout";

export default CreateUpdateTask;
