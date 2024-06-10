import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import axios from "axios";
const Select = dynamic(() => import("react-select"), { ssr: false });
import DatePicker from "react-datepicker";
import { format, differenceInDays } from "date-fns";
import Preloader from "@/shared/layout-components/preloader/preloader";
import { ToastContainer, toast } from "react-toastify";


import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import network from "@/config";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const Kanbanboard = () => {
  const statusToClassName = {
    yettostart: "new",
    inprogress: "inprogress",
    delayed: "todo",
    complete: "completed",
  };
  const classNameToStatus = {
    new: "yettostart",
    inprogress: "inprogress",
    todo: "delayed",
    completed: "complete",
  };
  const statusToPayload = {
    yettostart: "Yet to Start",
    inprogress: "In Progress",
    delayed: "Delayed",
    complete: "Complete",
  };

  const [tasks, setTasks] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const newTasksRef = useRef(null);
  const inProgressTasksRef = useRef(null);
  const delayedTasksRef = useRef(null);
  const completedTasksRef = useRef(null);
  const setloader = () => {
    setLoading(true);
  }

  const updateTasksLocal = () => {
    if (selectedProject) {
      axios
        .get(
          `${network.onlineUrl}api/task?filter[project]=${selectedProject.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          localStorage.setItem(
            "projectTasks",
            JSON.stringify(response.data.body.data)
          );
        })
        .catch((error) => {
          console.error("Error fetching tasks:", error);
        });
    }
  };

  useEffect(() => {
    getDataFromLocalStorage();
    setTasks(JSON.parse(localStorage.getItem("projectTasks")) || []);

    if (window !== undefined) {
      const dragula = require("dragula");

      const containers = [
        newTasksRef.current,
        inProgressTasksRef.current,
        delayedTasksRef.current,
        completedTasksRef.current,
      ].filter(Boolean);

      if (containers.length > 0) {
        const drake = dragula(containers);

        drake.on("drop", (el, target, source) => {
          const taskId = el.getAttribute("data-task-id");

          const newStatus =
            classNameToStatus[
              target.getAttribute("data-view-btn").split("-")[0]
            ];
          const oldStatus =
            classNameToStatus[
              source.getAttribute("data-view-btn").split("-")[0]
            ];

          if (newStatus !== oldStatus) {
            const task = tasks.find((task) => task.id == taskId);
            if(task){
              const { status, ...rest } = task.attributes;
            axios
              .patch(
                `${network.onlineUrl}api/task/${taskId}`,
                {
                  data: {
                    id: taskId,
                    type: "task",
                    attributes: {
                      ...rest,
                      status: statusToPayload[newStatus],
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
                if (response.data.status === 200) {
                  updateTasksLocal();
                  toast.success("Task status updated successfully");
                }
              })
              .catch((error) => {
                console.error("Error updating task status:", error);
                drake.cancel(true);
              });
          }}
        });
      }

      OnDivChange();
    }
  }, [token]);

  const getDataFromLocalStorage = () => {
    try{
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
    } }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (window !== undefined) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const groupedTasks = tasks?.reduce((acc, task) => {
    const { status } = task.attributes;
    if (status) {
      const lowercaseStatus = status.toLowerCase().replace(/\s/g, "");
      if (!acc[lowercaseStatus]) {
        acc[lowercaseStatus] = [];
      }
      acc[lowercaseStatus].push(task);
    }
    return acc;
  }, {});

  const elementsToModify = [
    newTasksRef,
    inProgressTasksRef,
    delayedTasksRef,
    completedTasksRef,
  ];
  const allStatuses = ["yettostart", "inprogress", "delayed", "complete"];

  const statusDisplayNames = {
    yettostart: "Yet to Start",
    inprogress: "In Progress",
    delayed: "Delayed",
    complete: "Complete",
  };

  const OnDivChange = () => {
    elementsToModify.forEach((elementRef) => {
      const element = elementRef.current;
      if (element?.children.length <= 0) {
        element?.classList.add("task-Null");
        element?.parentNode.parentElement.parentElement
          .querySelector(".view-more-button")
          ?.classList.add("d-none");
      } else {
        element?.classList.remove("task-Null");
        element?.parentNode.parentElement.parentElement
          .querySelector(".view-more-button")
          ?.classList.remove("d-none");
      }
    });
  };

  return (
    <div>
      <Seo title={"Kanban Board"} />
      <Pageheader
        activepage={`${selectedProject?.project_name || `Tasks`}`}
        mainpage="Tasks"
        mainpageurl="/components/project-management/tasks/"
        loadProjectData={getDataFromLocalStorage}
        createProject={false}
        loadingState={setloader}
      />
      {loading ? <Preloader /> : (selectedProject) ? (
      <div className="ynex-kanban-board text-defaulttextcolor dark:text-defaulttextcolor/70 text-defaultsize">
          <div className="kanban-view flex">
          {allStatuses.map((status) => (
            <div
              className={`kanban-column kanban-tasks-type ${statusToClassName[status]}`}
              key={status}
              data-status={status}
            >
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <span className="block font-semibold text-[.9375rem]">
                    {statusDisplayNames[status].toUpperCase()}
                  </span>
                </div>
              </div>
              <div
                className="kanban-tasks"
                id={`${statusToClassName[status].toLowerCase()}-tasks`}
              >
                <PerfectScrollbar style={{ height: "560px" }}>
                  <div
                    ref={
                      statusToClassName[status] === "new"
                        ? newTasksRef
                        : statusToClassName[status] === "inprogress"
                        ? inProgressTasksRef
                        : statusToClassName[status] === "todo"
                        ? delayedTasksRef
                        : statusToClassName[status] === "completed"
                        ? completedTasksRef
                        : null
                    }
                    onMouseEnter={OnDivChange}
                    className="firstdrag"
                    data-view-btn={`${statusToClassName[status]}-tasks`}
                  >
                    {(groupedTasks[status] || []).map((task) => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </div>
                </PerfectScrollbar>
              </div>
            </div>
          ))}
        </div>
      </div>) : (
        <div className="box">
          <div className="box-body">
            <div className="flex items-center justify-center">
            <h1 className="text-center">No project selected</h1>
            </div>
          </div>
        </div>)
}
    </div>
  );
};

const TaskCard = ({ task }) => {
  const {
    id,
    attributes: {
      task_name,
      description,
      start_date,
      end_date,
      budget_estimated,
      actual_spent,
    },
  } = task;

  return (
    <div className="box kanban-tasks" data-task-id={id}>
      <div className="box-body !p-0">
        <div className="p-4 kanban-board-head">
          <div className="flex text-[#8c9097] dark:text-white/50 justify-between mb-1 text-[.75rem] font-semibold">
            <div className="inline-flex">
              <i className="ri-time-line me-1 align-middle"></i>
              {`Created on ${format(new Date(start_date), "dd MMM yyyy")}`}{" "}
            </div>
            <div>{`${differenceInDays(
              new Date(end_date),
              new Date(start_date)
            )} Day(s) Left`}</div>{" "}
          </div>
          <div className="flex items-center justify-between">
            <div className="task-badges text-lg">
              <span className="badge bg-light">{`Estimated - $${(
                parseInt(budget_estimated) || 0
              ).toLocaleString()}`}</span>
              <br />
              <span className="badge bg-success/10 text-success">
                {`Spent - $${(parseInt(actual_spent) || 0).toLocaleString()}`}
              </span>
            </div>
            <div className="hs-dropdown ti-dropdown ltr:[--placement:bottom-right] rtl:[--placement:bottom-left]">
              <Link
                aria-label="anchor"
                href="#!"
                className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light"
                aria-expanded="false"
              >
                <i className="fe fe-more-vertical"></i>
              </Link>
              <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                
                <li>
                  <Link
                    className="ti-dropdown-item !py-2 !text-[0.8125rem] !font-medium !inline-flex"
                    href={`/components/project-management/edit-task/${id}`}
                  >
                    <i className="ri-edit-line me-1 align-middle"></i>Edit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="kanban-content !mt-1">
            <h6 className="font-semibold mb-1 text-[.9375rem]">{task_name}</h6>
            <div className="kanban-task-description">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Kanbanboard.layout = "Contentlayout";

export default Kanbanboard;
