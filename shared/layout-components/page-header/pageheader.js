import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Select from "react-select";
import Link from "next/link";
import network from "../../../config";

const Pageheader = ({
  loadProjectData,
  loadUserData,
  isDisabled,
  mainpageurl,
  mainpage,
  activepage,
  createProject,
}) => {
  const [projectData, setProjectData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [changeOrders, setChangeOrders] = useState([]);
  const userId = localStorage.getItem("userid");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedProject = localStorage.getItem("selectedProject");
        if (savedProject) setSelectedProject(JSON.parse(savedProject));

        const response = await axios.get(`${network.onlineUrl}api/project?filter[home_owner]=${userId}`, {
          headers: { Authorization: `Bearer ${network.token}` },
        });

        setProjectData(response.data.body.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, [userId]);

  const handleProjectSelect = async (selectedOption) => {
    const selectedProject = selectedOption
      ? projectData.find((project) => project.id === selectedOption.value)
      : null;
    setSelectedProject(selectedProject);
    localStorage.setItem("selectedProject", JSON.stringify(selectedProject));

    try {
      const tasksResponse = await axios.get(`${network.onlineUrl}api/task?filter[project]=${selectedProject.id}`, {
        headers: { Authorization: `Bearer ${network.token}` },
      });
      setTasks(tasksResponse.data.body.data);
      localStorage.setItem("projectTasks", JSON.stringify(tasksResponse.data.body.data));

      const changeOrdersResponse = await axios.get(`${network.onlineUrl}api/change_Order?filter[project]=${selectedProject.id}`, {
        headers: { Authorization: `Bearer ${network.token}` },
      });
      setChangeOrders(changeOrdersResponse.data.body.data);
      localStorage.setItem("projectChangeOrders", JSON.stringify(changeOrdersResponse.data.body.data));
    } catch (error) {
      console.error("Error fetching tasks or change orders:", error);
    }

    loadProjectData();
  };

  const selectStyles = {
    control: (styles, { isDisabled }) => ({
      ...styles,
      backgroundColor: isDisabled ? "#e2e8f0" : "rgb(132 90 223)",
      border: "1px solid #e5e7eb",
      borderRadius: "0.375rem",
      height: "2.5rem",
      padding: "0 0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      fontWeight: "400",
      boxShadow: "none",
      maxWidth: "17rem",
      minWidth: "17rem",
      maxHeight: "2.5rem",
      "&:hover": { borderColor: "#e5e7eb" },
      "&:focus": { borderColor: "#2563eb" },
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    dropdownIndicator: (styles) => ({ ...styles, color: "#fff" }),
    singleValue: (styles, { isDisabled }) => ({
      ...styles,
      color: isDisabled ? "#e2e8f0" : "#fff",
      fontWeight: "600",
    }),
    menu: (styles) => ({ ...styles, backgroundColor: "#fff", color: "#000" }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected ? "#8050df" : isFocused ? "#f3f4f6" : "#fff",
      color: isSelected ? "#fff" : "#000",
      "&:hover": { backgroundColor: "#f3f4f6" },
    }),
    placeholder: (styles, { isDisabled }) => ({
      ...styles,
      color: isDisabled ? "#e2e8f0" : "#fff",
      fontWeight: "600",
    }),
  };

  return (
    <Fragment>
      <div className="block justify-between page-header md:flex">
        <ol className="flex items-center whitespace-nowrap min-w-0">
          <li className="text-[1.1rem] ps-[0.5rem]">
            <Link
              className="flex items-center text-primary hover:text-primary dark:text-primary truncate"
              href={mainpageurl}
            >
              {mainpage}
              <i className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
            </Link>
          </li>
          <li
            className="text-[1.1rem] text-defaulttextcolor font-semibold dark:text-[#8c9097] dark:text-white/50"
            aria-current="page"
          >
            {activepage}
          </li>
        </ol>
        {createProject && (
          <ol className="flex items-center whitespace-nowrap min-w-0">
            <button type="button" className="ti-btn ti-btn-primary ti-btn-wave">
              <Link href="/components/project-management/create-project/">
                Create Project
              </Link>
            </button>
          </ol>
        )}
        <ol className="flex items-center whitespace-nowrap min-w-0">
          <Select
            name="project"
            isDisabled={isDisabled}
            value={
              selectedProject
                ? {
                    value: selectedProject.id,
                    label: selectedProject.attributes.name,
                  }
                : null
            }
            options={[
              { value: null, label: "Select Project" },
              ...projectData.map((project) => ({
                value: project.id,
                label: project.attributes.name,
              })),
            ]}
            styles={selectStyles}
            className="js-example-basic-single w-full min-w-[210px]"
            isSearchable
            menuPlacement="auto"
            placeholder="Select Project"
            onChange={handleProjectSelect}
          />
        </ol>
      </div>
    </Fragment>
  );
};

export default Pageheader;