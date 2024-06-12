import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import network from "@/config";
import React, { use } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilePond } from "react-filepond";
import { format, isValid } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import Preloader from "@/shared/layout-components/preloader/preloader";
import { useRouter } from "next/router";
import { to } from "react-spring";

const TaskDetails = () => {
  const router = useRouter();
  const taskId = router.query.taskId;
  const [taskData, setTaskData] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [PunchList, setPunchList] = useState([]);
  const [formData, setFormData] = useState({
    punch_item_type: "",
    description: "",
    user_id: null,
    status: "",
    document_urls: [],
    active: true,
  });
  const [files, setFiles] = useState(null);
  const [Users, setUsers] = useState(null);
  
  function getBadgeColor(status) {
    switch (status) {
      case 'Pending':
        return 'bg-warning';
      case 'Approved':
        return 'bg-success';
      case 'Shipped':
        return 'bg-info';
      case 'Delivered':
        return 'bg-primary';
      default:
        return 'bg-secondary';
    }
  }
  const handleInputChange = (event) => {
    const { id, value, checked } = event.target;
    let finalValue;
    if (id === "active") {
      finalValue = checked;
    } else if (id === "notes") {
      finalValue = value.split("\n");
    } else {
      finalValue = value;
    }
    setFormData({ ...formData, [id]: finalValue });
  };

  const loadingState = () => {
    setLoading(true);
  };

  const getProjectDataFromLocalStorage = () => {
    try {
      const storedProject = localStorage.getItem("selectedProject");
      if (storedProject && storedProject !== "undefined") {
        setSelectedProject(JSON.parse(storedProject));
        setUsers(JSON.parse(localStorage.getItem("Users")));
      } else {
        setSelectedProject(null);
      }
    } catch (error) {
      console.error("Error parsing selected project:", error);
      setSelectedProject(null);
    } finally {
      setLoading(false);
    }
  };

  const getPunchList = () => {
    axios
      .get(`${network.onlineUrl}api/punch_List?filter[task]=${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.status === 200) {
          setPunchList(response.data.body.data);
        } else {
          console.error("Failed to fetch Punch List:", response.data);
          toast.error("Failed to fetch Punch List");
        }
      })
      .catch((error) => {
        console.error("Error fetching Punch List:", error);
        toast.error("An error occurred while fetching Punch List");
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${network.onlineUrl}api/punch_List/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.status === 204) {
          toast.success("Punch List deleted successfully");
          getPunchList();
        } else {
          console.error("Failed to delete Punch List:", response.data);
          toast.error("Failed to delete Punch List");
        }
      })
      .catch((error) => {
        console.error("Error deleting Punch List:", error);
        toast.error("An error occurred while deleting Punch List");
      });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    toast.info("Please wait while we process your request. ", {
      autoClose: false,
      toastId: "Loading",
    });
    axios
      .post(
        `${network.onlineUrl}api/punch_List`,
        {
          data: {
            type: "punch_List",
            attributes: {
              task_id: Number(taskId),
              punch_item_type: formData.punch_item_type,
              description: formData.description,
              assignee_to_id: formData.user_id,
              status: formData.status,
              document_urls: formData.document_urls,
              active: formData.active,
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
        if (response.data.status === 201) {
          toast.dismiss("Loading");
          toast.success("Punch List created successfully");
          getPunchList();
          setFormData({
            punch_item_type: "",
            description: "",
            user_id: null,
            status: "",
            document_urls: [],
            active: true,
          });

          setFiles(null);
        } else {
          console.error("Failed to create Punch List:", response.data);
          toast.dismiss("Loading");
          toast.error("Failed to create Punch List");
        }
      })
      .catch((error) => {
        console.error("Error creating Punch List:", error);
        toast.dismiss("Loading");
        toast.error("An error occurred while creating Punch List");
      });
  };

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
      document_urls: [...formData.document_urls, response[0].file_url],
    });
  };

  useEffect(() => {
    getProjectDataFromLocalStorage();
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token && taskId) {
      getPunchList();
      setLoading(true);
      axios
        .get(`${network.onlineUrl}api/task/${taskId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          if (response.data.status === 200) {
            setTaskData(response.data.body.data);
            setError(null);
          } else {
            setError(`Unexpected response status: ${response.data.status}`);
          }
        })
        .catch((error) => {
          console.error("Error fetching task data:", error);
          setError(
            error.message || "An error occurred while fetching task data."
          );
        })
        .finally(() => setLoading(false));
    }
  }, [token, taskId]);

  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    return isValid(date) ? format(date, "dd-MMM-yyyy") : "Invalid date";
  };

  return (
    <div>
      <Seo title={"Task Details"} />
      <Pageheader
        mainpageurl="/components/project-management/tasks/"
        mainpage="Tasks"
        activepage={`${taskData?.attributes?.task_name || "Task Details"}`}
        isDisabled={true}
        loadingState={loadingState}
        getProjectDataFromLocalStorage={getProjectDataFromLocalStorage}
        
      />
      <ToastContainer />
      {loading ? (
        <Preloader />
      ) : error ? (
        <div className="box">
          <div className="box-body">
            <div className="flex items-center justify-center">
              <h1 className="text-center text-red-500">{error}</h1>
            </div>
          </div>
        </div>
      ) : !selectedProject ? (
        <div className="box">
          <div className="box-body">
            <div className="flex items-center justify-center">
              <h1 className="text-center">No project selected</h1>
            </div>
          </div>
        </div>
      ) : !taskData ? (
        <div className="box">
          <div className="box-body">
            <div className="flex items-center justify-center">
              <h1 className="text-center">Task not found</h1>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="box">
            <div className="box-header justify-between">
              <div className="box-title">Task Details</div>
              <div className="justify-end">
                <Link
                  href="#!"
                  className="hs-dropdown-toggle  ti-btn !py-1 !px-2 !font-medium !text-[0.75rem] text-white bg-primary dark:bg-bodybg text-default border-0"
                  data-hs-overlay="#add-task"
                >
                  <i className="ri-add-line"></i>Add Punch List
                </Link>
              </div>
              <button
                type="button"
                className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !mx-1 !text-[0.75rem] "
                data-hs-overlay="#compare-Task"
              >
                <Link href="!#">Invite Bids</Link>
              </button>
            </div>
            <div className="box-body">
              <div className="bg-white dark:bg-bodybg p-4 rounded-lg shadow-sm mb-4">
                <h2 className="text-xl font-semibold mb-2">
                  {taskData.attributes?.task_name || "Unnamed Task"}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Task Code:
                    </p>
                    <p className="font-medium">
                      {taskData.attributes?.task_code || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Status:
                    </p>
                    <p className="font-medium">
                      {taskData.attributes?.status || "Unknown"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Start Date:
                    </p>
                    <p className="font-medium">
                      {formatDate(taskData.attributes?.start_date)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      End Date:
                    </p>
                    <p className="font-medium">
                      {formatDate(taskData.attributes?.end_date)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Estimated Days:
                    </p>
                    <p className="font-medium">
                      {taskData.attributes?.days_estimated ?? "Not estimated"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Actual Days:
                    </p>
                    <p className="font-medium">
                      {taskData.attributes?.actual_days ?? "Not available"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Description:
                    </p>
                    <p className="font-medium">
                      {taskData.attributes?.description ||
                        "No description provided"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Progress
                    </p>
                    <p className="font-medium">
                      {taskData.attributes?.percentage_complete
                        ? `${taskData.attributes.percentage_complete}%`
                        : "0%"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Budget Estimated
                    </p>
                    <p className="font-medium">
                      {`$${parseInt(
                        taskData.attributes?.budget_estimated || "0"
                      ).toLocaleString()}`}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Actual Spent
                    </p>
                    <p className="font-medium">
                      {`$${parseInt(
                        taskData.attributes?.actual_spent || "0"
                      ).toLocaleString()}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-header justify-between">
              <div className="box-title">Punch List</div>
            </div>
            <div className="container">
              <ul className="timeline list-none text-[0.813rem] text-defaulttextcolor">
                {PunchList.map((item, index) => (
                  <li key={index}>
                    <div className="timeline-time text-end">
                      <span className="date">
                        {new Date(
                          item.attributes.created_at
                        ).toLocaleDateString("en-US", { weekday: "long" })}
                      </span>
                      <span className="time inline-block">
                        {new Date(
                          item.attributes.created_at
                        ).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="timeline-icon">
                      <Link aria-label="anchor" href="#!"></Link>
                    </div>
                    <div className="timeline-body">
                      <div className="flex items-start timeline-main-content flex-wrap mt-0">
                        <div className="flex-grow">
                          <div className="flex items-center">
                            <div className="sm:mt-0 mt-2">
                              <p className="mb-0 text-[.875rem] font-semibold">
                                {Users.find(
                                  (user) =>
                                    user.id === item.attributes.assignee_to_id
                                )?.attributes.username || ""}{" "}
                              </p>
                              <p className="mb-0 text-[#8c9097] dark:text-white/50">
                                {item.attributes.description}
                                <button
                                  onClick={() => handleDelete(item.id)}
                                  className="ml-2 btn btn-danger"
                                >
            <i className="ri-delete-bin-6-fill text-red text-lg"></i>
                                </button>
                              </p>
                            </div>
                            <div className="ms-auto">
  <span className={`ltr:float-right rtl:float-left badge text-white ${getBadgeColor(item.attributes.status)} dark:text-white/50 timeline-badge whitespace-nowrap`}>
    {item.attributes.status}
  </span>
  <br />

                              <span className="ltr:float-right rtl:float-left badge !bg-light text-[#8c9097] dark:text-white/50 timeline-badge whitespace-nowrap">
                                {new Date(
                                  item.attributes.updated_at
                                ).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="timeline-loadmore-container text-center">
                <span className="bg-info text-white border rounded-sm p-1">
                  End of Timeline
                </span>
              </div>
            </div>
          </div>

          <div id="add-task" className="hs-overlay hidden ti-modal">
            <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
              <form onSubmit={handleSubmit}>
                <div className="ti-modal-content">
                  <div className="ti-modal-header">
                    <h6
                      className="modal-title text-[1rem] font-semibold text-default dark:text-defaulttextcolor/70"
                      id="mail-ComposeLabel"
                    >
                      Add Punch Item
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
                  <div className="ti-modal-body px-4 !overflow-visible">
                    <div className="grid grid-cols-12 gap-6">
                      <div className="xl:col-span-12 col-span-12">
                        <label htmlFor="punch_item_type" className="form-label">
                          Punch Item Type
                        </label>
                        <input
                          type="text"
                          className="form-control w-full !rounded-md"
                          id="punch_item_type"
                          placeholder="Write Punch Item Type"
                          onChange={handleInputChange}
                          value={formData.punch_item_type}
                        />
                      </div>
                      <div className="xl:col-span-12 col-span-12">
                        <label htmlFor="text-area" className="form-label">
                          Punch Item Description
                        </label>
                        <textarea
                          className="form-control w-full !rounded-md"
                          id="description"
                          rows="2"
                          placeholder="Write Description"
                          onChange={handleInputChange}
                          value={formData.description}
                        ></textarea>
                      </div>
                      <div className="xl:col-span-12 col-span-12">
                        <label htmlFor="user_id" className="form-label">
                          User:
                        </label>
                        <Select
                          id="user_id"
                          value={
                            Users?.find((user) => user.id === formData.user_id)
                              ? {
                                  value: formData.user_id,
                                  label: Users.find(
                                    (user) => user.id === formData.user_id
                                  ).attributes.username,
                                }
                              : null
                          }
                          onChange={(selectedOption) =>
                            setFormData({
                              ...formData,
                              user_id: selectedOption.value,
                            })
                          }
                          options={Users?.map((user) => ({
                            value: user.id,
                            label: user.attributes.username,
                          }))}
                          menuPlacement="auto"
                        />
                      </div>

                      <div className="xl:col-span-12 col-span-12">
                        <label htmlFor="status" className="form-label">
                          Status
                        </label>
                        <Select
                          id="status"
                          value={{
                            value: formData.status,
                            label: formData.status,
                          }}
                          onChange={(selectedOption) =>
                            handleInputChange({
                              target: {
                                id: "status",
                                value: selectedOption.value,
                              },
                            })
                          }
                          options={[
                            { value: "Pending", label: "Pending" },
                            { value: "Approved", label: "Approved" },
                            { value: "Shipped", label: "Shipped" },
                            { value: "Delivered", label: "Delivered" },
                          ]}
                        />
                      </div>

                      <div className="xl:col-span-12 col-span-12">
                        <label htmlFor="document_urls" className="form-label">
                          Document URLs:
                        </label>
                        <FilePond
                          files={files}
                          onupdatefiles={setFiles}
                          allowMultiple={true}
                          maxFiles={3}
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
                          labelIdle="Drag & Drop your files here or click"
                        />
                      </div>

                      <div className="xl:col-span-2 col-span-12">
                        <label htmlFor="active" className="form-label">
                          Active :
                        </label>
                        <br />
                        <input
                          type="checkbox"
                          className="ti-switch mb-4"
                          id="active"
                          checked={formData.active}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ti-modal-footer">
                    <button
                      type="button"
                      className="hs-dropdown-toggle ti-btn  ti-btn-light align-middle"
                      data-hs-overlay="#add-task"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      onSubmit={handleSubmit}
                      className="ti-btn bg-primary text-white !font-medium"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

TaskDetails.layout = "Contentlayout";
export default TaskDetails;
