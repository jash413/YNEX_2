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
import Preloader from "@/shared/layout-components/preloader/preloader";
import { useRouter } from "next/router";

const TaskDetails = () => {
  const router = useRouter();
  const taskId = router.query.taskId;
  const [taskData, setTaskData] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadingState = () => {
    setLoading(true);
  };

  const getProjectDataFromLocalStorage = () => {
    try {
      const storedProject = localStorage.getItem("selectedProject");
      if (storedProject && storedProject !== "undefined") {
        setSelectedProject(JSON.parse(storedProject));
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

  useEffect(() => {
    getProjectDataFromLocalStorage();
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token && taskId) {
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
        mainpageurl="/project-management"
        mainpage="Project Management"
        activepage="Task Details"
        loadingState={loadingState}
        getProjectDataFromLocalStorage={getProjectDataFromLocalStorage}
      />
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
        <div className="box">
          <div className="box-header justify-between">
            <div className="box-title">Task Details</div>
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
{`$${parseInt(taskData.attributes?.budget_estimated || "0").toLocaleString()}`}        
</p>
        </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Actual Spent
                  </p>
                  <p className="font-medium">
{`$${parseInt(taskData.attributes?.actual_spent || "0").toLocaleString()}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

TaskDetails.layout = "Contentlayout";
export default TaskDetails;
