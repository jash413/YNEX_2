import {
  Gantt,
  Task,
  EventOption,
  StylingOption,
  ViewMode,
  DisplayOption,
} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import { Fragment, useEffect, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const GanttChart = () => {
    const tasks = [
        {
          start: new Date(2020, 1, 1),
          end: new Date(2020, 1, 12),
          name: "Idea",
          id: "Task 0",
          type: "task",
          progress: 45,
          isDisabled: true,
          styles: { progressColor: "#845adf", progressSelectedColor: "white" },
        },
        {
          start: new Date(2020, 1, 2),
          end: new Date(2020, 1, 27),
          name: "Development",
          id: "Task 1",
          type: "task",
          progress: 75,
          styles: { progressColor: "#845adf", progressSelectedColor: "white" },
        },
        {
          start: new Date(2020, 1, 3),
          end: new Date(2020, 2, 4),
          name: "Testing",
          id: "Task 2",
          type: "task",
          progress: 35,
          styles: { progressColor: "#845adf", progressSelectedColor: "white" },
        },
        {
          start: new Date(2020, 1, 4),
          end: new Date(2020, 4, 6),
          name: "Deployment",
          id: "Task 3",
          type: "task",
          progress: 50,
          styles: { progressColor: "#845adf", progressSelectedColor: "white" },
        },
      ];
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

  return (
    <Fragment>
      <Seo title={`${selectedProject?.project_name || `Schedule`}`} />
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
          <Gantt tasks={tasks} viewMode="Week"
           />
        </div>
      </div>
    </Fragment>
  );
};
GanttChart.layout = "Contentlayout";

export default GanttChart;
