import React, { Fragment, useState, useEffect, use } from "react";
import Select from "react-select";
import axios from "axios";
import network from "@/config";
import Link from "next/link";

const Pageheader = (props) => {
  const loadProjectData = props?.loadProjectData;
  const loadUserData = props?.loadUserData;
  const isDisabled = props?.isDisabled;
  const [projectData, setProjectData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [projectTasks, setProjectTasks] = useState([]);
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const handleUserSelect = (selectedOption) => {
    localStorage.removeItem("selectedProject");
    localStorage.removeItem("projectTasks");
    localStorage.removeItem("purchaseOrders");
    setSelectedProject(null);
    const selectedUser = selectedOption
      ? usersData.find((user) => user.id === selectedOption.value)
      : null;
    setSelectedUser(selectedUser);
    localStorage.setItem("selectedUser", JSON.stringify(selectedUser));
    console.log(selectedUser);
    if (selectedUser && selectedUser.relationships && selectedUser.relationships.home_owner_projects) {
      const selectedProjectIds = selectedUser.relationships.home_owner_projects.data.map(project => project.id);
    const selectedProjects = projectData.filter(project => selectedProjectIds.includes(project.id));
    setSelectedProjects(selectedProjects);
   } else {
      setSelectedProjects([]);
    }
    loadUserData();
  };
  useEffect(() => {
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
    if (
      localStorage.getItem("selectedUser") !== null &&
      localStorage.getItem("selectedUser") !== "undefined"
    ) {
      const selectedUser = JSON.parse(localStorage.getItem("selectedUser"));
      setSelectedUser(selectedUser);
    }
    axios;
    axios.get(`${network.onlineUrl}api/project`, {
      headers: {
        Authorization: `Bearer ${network.token}`
      }
    })
      .then((response) => {
        const data = response.data;
        setProjectData(data.body.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    axios
      .get(`${network.onlineUrl}api/user`, {
        headers: {
          Authorization: `Bearer ${network.token}`
        }
      
      })
      .then((response) => {
        const data = response.data;
        setUsersData(data.body.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    axios.get(`${network.onlineUrl}api/task`,{
      headers: {
        Authorization: `Bearer ${network.token}`
      }


    }).then((response) => {
      const data = response.data;
      setTasks(data.body.data);
    });    
  }, []);
  useEffect(() => {
    axios.get(`${network.onlineUrl}api/change_Order`, {
      headers: {
        Authorization: `Bearer ${network.token}`
      }



    }).then((response) => {
      const data = response.data;
      setPurchaseOrders(data.body.data);
    });
  }, []);

  const handlePurchaseOrders = () => {
    console.log(purchaseOrders);
    const projectPurchaseOrders = purchaseOrders.filter(
      (purchaseOrder) => purchaseOrder.attributes.project_id === JSON.parse(localStorage.getItem("selectedProject")).id
    );

    const formattedProjectPurchaseOrders = projectPurchaseOrders.map(purchaseOrder => ({
      id: purchaseOrder.id,
      ...purchaseOrder.attributes,
      updatedAt: new Date(purchaseOrder.attributes.updatedAt).toLocaleString(),
      createdAt: new Date(purchaseOrder.attributes.createdAt).toLocaleString()
    }));
    setPurchaseOrders(formattedProjectPurchaseOrders);
    localStorage.setItem("purchaseOrders", JSON.stringify(formattedProjectPurchaseOrders));
  };

  const handleTasks = () => {
    const projectTasks = tasks.filter(
      (task) => task.attributes.project_id === JSON.parse(localStorage.getItem("selectedProject")).id
    );
  
    const formattedProjectTasks = projectTasks.map(task => ({
      id: task.id,
      ...task.attributes,
      updated_at: new Date(task.attributes.updated_at).toLocaleString(),
      created_at: new Date(task.attributes.created_at).toLocaleString()
    }));
  
    setProjectTasks(formattedProjectTasks);
    localStorage.setItem("projectTasks", JSON.stringify(formattedProjectTasks));
  };

  const handleProjectSelect = (selectedOption) => {
    const selectedProject = selectedOption
      ? projectData.find((project) => project.id === selectedOption.value)
      : null;
    setSelectedProject(selectedProject);
    localStorage.setItem("selectedProject", JSON.stringify(selectedProject));
    handleTasks();
    handlePurchaseOrders();
    loadProjectData();
  };
  
  return (
    <Fragment>
      <div className="block justify-between page-header md:flex">
        <ol className="flex items-center whitespace-nowrap min-w-0">
          <li className="text-[1.1rem] ps-[0.5rem]">
            <Link
              className="flex items-center text-primary hover:text-primary dark:text-primary truncate"
              href={props.mainpageurl}
            >
              {props.mainpage}
              <i className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
            </Link>
          </li>
          <li
            className="text-[1.1rem] text-defaulttextcolor font-semibold dark:text-[#8c9097] dark:text-white/50 "
            aria-current="page"
          >
            {props.activepage}
          </li>
        </ol>
        {props?.createProject && (
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
            name="user"
            isDisabled={isDisabled}
            value={
              selectedUser
                ? {
                    value: selectedUser.id,
                    label: selectedUser.attributes.username,
                  }
                : null
            }
            options={[
              {
                value: null,
                label: "Select User",
              },props
            ].concat(
              usersData.map((user) => ({
                value: user.id,
                label: user.attributes.username,
              }))
            )}
            styles={{
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
                "&:hover": {
                  borderColor: "#e5e7eb",
                },
                "&:focus": {
                  borderColor: "#2563eb",
                },
              }),
              indicatorSeparator: (styles) => ({
                ...styles,
                display: "none",
              }),
              dropdownIndicator: (styles) => ({
                ...styles,
                color: "#fff",
              }),
              singleValue: (styles, { isDisabled }) => ({
                ...styles,
                color: isDisabled ? "#e2e8f0" : "#fff",
                fontWeight: "600",
              }),
              menu: (styles) => ({
                ...styles,
                backgroundColor: "#fff",
                color: "#000",
              }),
              option: (styles, { isFocused, isSelected }) => ({
                ...styles,
                backgroundColor: isSelected
                  ? "#8050df"
                  : isFocused
                  ? "#f3f4f6"
                  : "#fff",
                color: isSelected ? "#fff" : "#000",
                "&:hover": {
                  backgroundColor: "#f3f4f6",
                },
              }),
              placeholder: (styles, { isDisabled }) => ({
                ...styles,
                color: isDisabled ? "#e2e8f0" : "#fff",
                fontWeight: "600",
              }),
            }}
            className="js-example-basic-single w-full min-w-[210px]"
            isSearchable
            menuPlacement="auto"
            placeholder="Select User"
            onChange={handleUserSelect}
          />
        </ol>
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
              {
                value: null,
                label: "Select Project",
              },
            ].concat(
              selectedProjects.map((project) => ({
                value: project.id,
                label: project.attributes.name,
              }))
            )}
            styles={{
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
                "&:hover": {
                  borderColor: "#e5e7eb",
                },
                "&:focus": {
                  borderColor: "#2563eb",
                },
              }),
              indicatorSeparator: (styles) => ({
                ...styles,
                display: "none",
              }),
              dropdownIndicator: (styles) => ({
                ...styles,
                color: "#fff",
              }),
              singleValue: (styles, { isDisabled }) => ({
                ...styles,
                color: isDisabled ? "#e2e8f0" : "#fff",
                fontWeight: "600",
              }),
              menu: (styles) => ({
                ...styles,
                backgroundColor: "#fff",
                color: "#000",
              }),
              option: (styles, { isFocused, isSelected }) => ({
                ...styles,
                backgroundColor: isSelected
                  ? "#8050df"
                  : isFocused
                  ? "#f3f4f6"
                  : "#fff",
                color: isSelected ? "#fff" : "#000",
                "&:hover": {
                  backgroundColor: "#f3f4f6",
                },
              }),
              placeholder: (styles, { isDisabled }) => ({
                ...styles,
                color: isDisabled ? "#e2e8f0" : "#fff",
                fontWeight: "600",
              }),
            }}
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
