import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import { Gantt } from "gantt-task-react";
import React from "react";
import "gantt-task-react/dist/index.css";
import { useState, useEffect } from "react";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const Schedule = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
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
    const tasksArray =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("projectTasks"))
      : null;

  if (tasksArray) {
    const formattedTasks = tasksArray
      .filter(
        (task) => task.attributes.start_date && task.attributes.end_date
      )
      .map((task) => ({
        start: new Date(task.attributes.start_date),
        end: new Date(task.attributes.end_date),
        name: task.attributes.task_name,
        id: task.id.toString(),
        type: "task",
        progress: parseInt(task.attributes.percentage_complete),
        styles: { progressColor: "#845adf", progressSelectedColor: "white" },
      }));

    setTasks(formattedTasks);
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
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
   getProjectDataFromLocalStorage();
  }, []);

  return (
    <div>
      <Seo title={"Project Schedule"} />
      <Pageheader
        activepage={`${selectedProject?.project_name || `Schedule`}`}
        mainpage="Schedule"
        mainpageurl="/components/project-management/schedule/"
        loadProjectData={getProjectDataFromLocalStorage}
        loadUserData={getUserDataFromLocalStorage}
        createProject={true}
      />
      <div className="block">
        <div className="gantt-container">
          {tasks.length !== 0 && <Gantt tasks={tasks} viewMode="Week" />}
        </div>
      </div>
    </div>
  );
};
Schedule.layout = "Contentlayout";

export default Schedule;
