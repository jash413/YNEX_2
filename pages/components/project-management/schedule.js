import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { Gantt, ViewMode } from "gantt-task-react";
import React from "react";
import "gantt-task-react/dist/index.css";
import { useState, useEffect } from "react";
import styles from "../../../public/assets/css/schedule.module.css";
import Preloader from "@/shared/layout-components/preloader/preloader";

const Schedule = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadingState = () => {
    setLoading(true);
  };

  const getProjectDataFromLocalStorage = () => {
    try {if (
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
          styles: {
            progressColor: "#845adf",
            progressSelectedColor: "white",
            backgroundColor: "#f0ebff",
            backgroundSelectedColor: "#c8b3ff",
          },
        }));

      setTasks(formattedTasks);
    }}
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjectDataFromLocalStorage();
  }, []);

  // Custom components to hide task names in the table
  const CustomTaskListHeader = () => {
    return <div className={styles.taskListHeader}>Tasks</div>;
  };

  const CustomTaskListTable = (props) => {
    const { task, rowHeight, fontFamily, fontSize } = props;
    return (
      <div
        className={styles.taskListRow}
        style={{
          height: rowHeight,
          fontFamily: fontFamily,
          fontSize: fontSize,
        }}
      >
        {task.name}
      </div>
    );
  };

  return (
    <div>
      <Seo title={"Project Schedule"} />
      <Pageheader
        activepage={`${selectedProject?.attributes?.name || `Schedule`}`}
        mainpage="Schedule"
        mainpageurl="/components/project-management/schedule/"
        loadProjectData={getProjectDataFromLocalStorage}
        createProject={true}
        loadingState={loadingState}
      />
      {loading ? <Preloader/> : (selectedProject) ? (<div className="block">
        {tasks.length !== 0 ? (
          <div className={styles.ganttContainer}>
            <Gantt
              tasks={tasks}
              viewMode={ViewMode.Week}
              TaskListHeader={CustomTaskListHeader}
              TaskListTable={CustomTaskListTable}
              listCellWidth="" // This will hide the default "Name" column
              columnWidth={80}
              rowHeight={60}
              headerHeight={60}
              preStrokeColor="rgba(132, 90, 223, 0.3)"
              postStrokeColor="rgba(132, 90, 223, 0.3)"
              locale="en-US"
              barCornerRadius={4}
              barProgressColor="#845adf"
              barProgressSelectedColor="white"
              barBackgroundColor="#f0ebff"
              barBackgroundSelectedColor="#c8b3ff"
              projectProgressColor="#845adf"
              projectProgressSelectedColor="white"
              projectBackgroundColor="#f0ebff"
              projectBackgroundSelectedColor="#c8b3ff"
              arrowColor="rgba(132, 90, 223, 0.7)"
              fontFamily="Inter, sans-serif"
              fontSize="14px"
              lineHeight="20px"
            />
          </div>
        ) : (
          <div className={styles.noTasksContainer}>
            <p>No tasks with scheduled Start And End Dates for this project</p>
          </div>
        )}
      </div>) : (<div className="box">
          <div className="box-body">
            <div className="flex items-center justify-center">
            <h1 className="text-center">No project selected</h1>
            </div>
          </div>
        </div>)}
    </div>
  );
};

Schedule.layout = "Contentlayout";

export default Schedule;
