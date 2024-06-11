import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState, useEffect } from "react";
import { ResponsiveDataTable } from "@/shared/data/tables/datatabledata";
import { format } from "date-fns";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import network from "@/config";
import Preloader from "@/shared/layout-components/preloader/preloader";

const ViewTasks = () => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [inProgressTasks, setInProgressTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gcBuisness, setGcBuisness] = useState([]);
  const [token, setToken] = useState(null);

  const handleDelete = (id) => {
    return () => {
      axios
        .delete(`${network.onlineUrl}api/task/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data.status === 204) {
            toast.success("Task deleted successfully");
            const newTasks = tasks.filter((task) => task.id !== id);
            setTasks(newTasks);
            localStorage.setItem("projectTasks", JSON.stringify(newTasks));
          }
        })
        .catch((error) => {
          toast.error("Error deleting task");
        });
    };
  };

  useEffect(() => {
    if (window !== undefined) {
      getProjectDataFromLocalStorage();
      getTaskDataFromLocalStorage();
      setToken(localStorage.getItem("token"));
      const tasksArray = JSON.parse(localStorage.getItem("projectTasks"));
      if (tasksArray) {
        const completed = tasksArray.filter(
          (task) => task.attributes.status === "Complete"
        );
        const inProgress = tasksArray.filter(
          (task) => task.attributes.status === "In progress"
        );
        const pending = tasksArray.filter(
          (task) => task.attributes.status === "Yet to Start"
        );
        setCompletedTasks(completed.length);
        setInProgressTasks(inProgress.length);
        setPendingTasks(pending.length);
      }
      setGcBuisness(JSON.parse(localStorage.getItem("gcBuisness")));
    }
  }, []);

  const setloader = () => {
    setLoading(true);
  };

  const COLUMNS = [
    {
      Header: "Action",
      accessor: "attributes.action_task_id",
      Cell: ({ row: { original } }) => (
        <div className="flex justify-center space-x-2">
          <Link
            href={`/components/project-management/edit-task/${original.id}`}
          >
            <i className="ri-pencil-fill"></i>
          </Link>
          <Link onClick={handleDelete(original.id)} href="javascript:void(0)">
            <i className="ri-delete-bin-6-fill"></i>
          </Link>
        </div>
      ),
    },
    {
      Header: "Task Code",
      accessor: "attributes.task_code_id",
    },
    {
      Header: "Task Name",
      accessor: "attributes.task_name",
      Cell: ({ row: { original } }) => (
        <Link
          href={`/components/project-management/task-details/${original.id}`}
        >
          {original.attributes.task_name}
        </Link>
      ),
    },
    {
      Header: "Description",
      accessor: "attributes.description",
    },

    {
      Header: "Start Date",
      accessor: (row) =>
        row.attributes.start_date
          ? format(new Date(row.attributes.start_date), "dd-MMM-yyyy")
          : null,
    },
    {
      Header: "End Date",
      accessor: (row) =>
        row.attributes.end_date
          ? format(new Date(row.attributes.end_date), "dd-MMM-yyyy")
          : null,
    },
    {
      Header: "Business",
      accessor: "attributes.business_id",
      Cell: ({ value }) => {
        return (
          gcBuisness?.find((business) => business.id === value)?.attributes
            .name || ""
        );
      },
    },
    {
      Header: "Status",
      accessor: "attributes.status",
    },
    {
      Header: "Notes",
      accessor: "attributes.notes",
    },
    {
      Header: "Estimated Budget",
      accessor: "attributes.budget_estimated",
    },
    {
      Header: "Actual Spent",
      accessor: "attributes.actual_spent",
    },
    {
      Header: "Percentage Complete",
      accessor: "attributes.percentage_complete",
    },
    {
      Header: "Files URLs",
      accessor: "attributes.files_urls",
    },
  ];

  const getProjectDataFromLocalStorage = () => {
    try {
      if (
        localStorage.getItem("selectedProject") !== null &&
        localStorage.getItem("selectedProject") !== "undefined"
      ) {
        const selectedProject = JSON.parse(
          localStorage.getItem("selectedProject")
        );
        setSelectedProject(selectedProject);
        getTaskDataFromLocalStorage();
      } else {
        setSelectedProject(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const getTaskDataFromLocalStorage = () => {
    if (
      localStorage.getItem("projectTasks") !== null &&
      localStorage.getItem("projectTasks") !== "undefined"
    ) {
      const tasks = JSON.parse(localStorage.getItem("projectTasks"));
      setTasks(tasks);
    }
  };

  return (
    <div>
      <Seo title={"Tasks"} />
      <Pageheader
        activepage={`${selectedProject?.attributes?.name || `Tasks`}`}
        mainpage="Tasks"
        mainpageurl="/components/project-management/tasks"
        loadProjectData={getProjectDataFromLocalStorage}
        loadingState={setloader}
      />
      <ToastContainer />
      {loading ? (
        <Preloader />
      ) : selectedProject ? (
        <>
          <div className="box">
            <div className="box-body">
              <div className="grid grid-cols-3">
                <div className="p-6 border-r dark:border-defaultborder/10 border-solid col-md-3">
                  <div className="svg-icon-background bg-success/10 !fill-success me-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="svg-success"
                    >
                      <path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h6 className="mb-1 text-[0.75rem]">Completed Tasks</h6>
                    <div>
                      <h4 className="text-[1.125rem] font-semibold mb-1">
                        <span className="count-up" data-count="319">
                          {completedTasks}
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-r dark:border-defaultborder/10 border-solid col-md-3">
                  <div className="svg-icon-background bg-warning/10 me-4 !fill-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      className="svg-warning"
                    >
                      <path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h6 className="mb-1 text-[0.75rem]">Pending Tasks</h6>
                    <div>
                      <h4 className="text-[1.125rem] font-semibold mb-1">
                        <span className="count-up" data-count="81">
                          {pendingTasks}
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="p-6 col-md-3">
                  <div className="svg-icon-background bg-secondary/10 text-secondary !fill-secondary me-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      className="svg-secondary"
                    >
                      <path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h6 className="mb-1 text-[0.75rem]">Inprogress Tasks</h6>
                    <div>
                      <h4 className="text-[1.125rem] font-semibold mb-1">
                        <span className="count-up" data-count="32">
                          {inProgressTasks}
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <div className="box">
                <div className="box-header">
                  <h5 className="box-title">Tasks Table</h5>
                  <div className="flex">
                    <button
                      type="button"
                      className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]"
                      data-hs-overlay="#create-Task"
                    >
                      <Link href="/components/project-management/create-task/">
                        <i className="ri-add-line font-semibold align-middle"></i>{" "}
                        Create Task
                      </Link>
                    </button>
                    <button
                      type="button"
                      className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !mx-1 !text-[0.75rem] "
                      data-hs-overlay="#compare-Task"
                    >
                      <Link href="/components/project-management/task-kanban/">
                        Kanban View
                      </Link>
                    </button>
                  </div>
                </div>

                <div className="box-body space-y-3">
                  <div className="overflow-hidden">
                    <div
                      id="reactivity-table"
                      className="ti-custom-table ti-striped-table ti-custom-table-hover"
                    >
                      <ResponsiveDataTable columns={COLUMNS} data={tasks} />
                    </div>
                  </div>
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
ViewTasks.layout = "Contentlayout";

export default ViewTasks;
