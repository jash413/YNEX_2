import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState, useEffect } from "react";
import { ResponsiveDataTable } from "@/shared/data/tables/datatabledata";
import { ReactTabulator } from "react-tabulator";
import Link from "next/link";
import axios from "axios";
import network from "@/config";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import take from "reducers/take";

const ViewTasks = () => {
  const [addToCompareTask, setAddToCompareTask] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [inProgressTasks, setInProgressTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [displayToast, setDisplayToast] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tasks, setTasks] = useState([]);

  const COLUMNS = [
    {
      Header: "Active",
      accessor: "active",
    },
    {
      Header: "Project ID",
      accessor: "project_id",
    },
    {
      Header: "Task Code",
      accessor: "task_code_id",
    },
    {
      Header: "Task Name",
      accessor: "task_name",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Start Date",
      accessor: "start_date",
    },
    {
      Header: "End Date",
      accessor: "end_date",
    },
    {
      Header: "Task Owner ID",
      accessor: "task_owner_id",
    },
    {
      Header: "Business ID",
      accessor: "business_id",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Notes",
      accessor: "notes",
    },
    {
      Header: "Estimated Budget",
      accessor: "budget_estimated",
    },
    {
      Header: "Actual Spent",
      accessor: "actual_spent",
    },
    {
      Header: "Percentage Complete",
      accessor: "percentage_complete",
    },
    {
      Header: "Files URLs",
      accessor: "files_urls",
    },
  ];




  const getProjectDataFromLocalStorage = () => {
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
  const getUserDataFromLocalStorage = () => {
    if (
      localStorage.getItem("selectedUser") !== null &&
      localStorage.getItem("selectedUser") !== "undefined"
    ) {
      const selectedUser = JSON.parse(localStorage.getItem("selectedUser"));
      setSelectedUser(selectedUser);
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
useEffect(() => {
  getUserDataFromLocalStorage();
  getProjectDataFromLocalStorage();
  getTaskDataFromLocalStorage();

}, []);



  return (
    <div>
      <div
        className={`ti-toast bg-danger text-sm text-white fixed top-4 right-4 z-50`}
        role="alert"
        style={{ display: displayToast ? "block" : "none" }}
      >
        <div className="flex p-4">
          Cannot compare different tasks
          <div className="ms-auto">
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-white/[.5]  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white/10 focus:ring-gray-600 transition-all text-sm dark:focus:ring-offset-white/10 dark:focus:ring-white/10"
              onClick={() => setDisplayToast(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3.5 h-3.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Seo title={"Tasks"} />
      <Pageheader
        activepage="View Tasks"
        mainpage="Tasks"
        mainpageurl="/components/project-management/tasks"
        loadProjectData={getProjectDataFromLocalStorage}
        loadUserData={getUserDataFromLocalStorage}
      />
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
                <h6 className="mb-1 text-[0.75rem]">
                  Completed Tasks
                </h6>
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
                <h6 className="mb-1 text-[0.75rem]">
                  Pending Tasks
                 
                </h6>
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
                <h6 className="mb-1 text-[0.75rem]">
                  Inprogress Tasks
                 
                </h6>
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
                <div id="reactivity-table" className="ti-custom-table ti-striped-table ti-custom-table-hover">
                  <ResponsiveDataTable columns={COLUMNS} data={tasks}  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ViewTasks.layout = "Contentlayout";

export default ViewTasks;
