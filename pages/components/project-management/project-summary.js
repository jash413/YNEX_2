import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import WorldMap from "react-svg-worldmap";
import network from "@/config";
import { use } from "echarts";

const ProjectSummary = () => {
  const [clientRender, setClientRender] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    setClientRender(true);
    getProjectDataFromLocalStorage();
    getUserDataFromLocalStorage();
  }, []);

  useEffect(() => {
    axios
      .get(`${network.serverUrl}api/project-data/`)
      .then((response) => {
        const data = response.data;
        setProjectData(data.data);

        projectData.map((project) => {
          project.attributes.created_at = new Date(
            project.attributes.created_at
          );
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectData.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const currentItems = projectData.slice(start, end);

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
      <Seo title={`${selectedProject?.project_name || `Project Summary`}`} />
      <Pageheader
        activepage={`${selectedProject?.project_name || `Project Summary`}`}
        mainpage="Project Summary"
        mainpageurl="/components/project-management/project-summary/"
        loadProjectData={getProjectDataFromLocalStorage}
        loadUserData={getUserDataFromLocalStorage}
        createProject={true}
      />
      {selectedProject && <div className="grid grid-cols-12 gap-x-6">
         <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
          <div className="box">
            <div className="box-body">
              <div className="grid grid-cols-12">
                <div className="col-span-6 pe-0">
                  <p className="mb-2">
                    <span className="text-[1rem]">Total Tasks</span>
                  </p>
                  <p className="mb-2 text-[0.75rem]">
                    <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">{`${selectedProject?.relationships.tasks.data.length}`}</span>
                  </p>
                </div>
                <div className="col-span-6">
                  <p className="main-card-icon mb-0">
                    <svg
                      className="svg-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path
                        d="M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"
                        opacity=".3"
                      />
                      <path d="M0,0h24v24H0V0z" fill="none" />
                      <g>
                        <path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" />
                        <rect height="2" width="6" x="9" y="7" />
                        <rect height="2" width="2" x="16" y="7" />
                        <rect height="2" width="6" x="9" y="10" />
                        <rect height="2" width="2" x="16" y="10" />
                      </g>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
          <div className="box">
            <div className="box-body">
              <div className="grid grid-cols-12">
                <div className="col-span-6 pe-0">
                  <p className="mb-2">
                    <span className="text-[1rem]">Budget</span>
                  </p>
                  <p className="mb-2 text-[0.75rem]">
                    <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
                    {`$${parseInt(selectedProject?.attributes.budget_estimated).toLocaleString()}`}                    </span>
                  </p>
                </div>
                <div className="col-span-6">
                  <p className="main-card-icon mb-0">
                    <svg
                      className="svg-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <g>
                        <rect fill="none" height="24" width="24" />
                      </g>
                      <g>
                        <g>
                          <path
                            d="M12,6c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7S15.87,6,12,6z M13,14h-2V8h2V14z"
                            opacity=".3"
                          />
                          <rect height="2" width="6" x="9" y="1" />
                          <path d="M19.03,7.39l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42C16.07,4.74,14.12,4,12,4c-4.97,0-9,4.03-9,9 c0,4.97,4.02,9,9,9s9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M12,20c-3.87,0-7-3.13-7-7s3.13-7,7-7s7,3.13,7,7S15.87,20,12,20z" />
                          <rect height="6" width="2" x="11" y="8" />
                        </g>
                      </g>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6  col-span-12">
          <div className="box">
            <div className="box-body">
              <div className="grid grid-cols-12">
                <div className="col-span-6 pe-0">
                  <p className="mb-2">
                    <span className="text-[1rem]">Actual Spent</span>
                  </p>
                  <p className="mb-2 text-[0.75rem]">
                    <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
                      {`$${parseInt(selectedProject?.attributes.actual_spent).toLocaleString()}`}
                    </span>
                  </p>
                </div>
                <div className="col-span-6">
                  <p className="main-card-icon mb-0">
                    <svg
                      className="svg-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path
                        d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
                        opacity=".3"
                      />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> }
      {selectedProject && (
        <div className="grid grid-cols-12 gap-6">
          <div className="xl:col-span-6 md:col-span-6  col-span-12">
            <div className="box custom-box">
              <div className="box-header justify-between">
                <div className="box-title">Upcoming Events</div>
                
              </div>
              <div className="box-body">
                <nav
                  className="flex flex-wrap xxxl:flex-nowrap justify-start sm:justify-between"
                  aria-label="Tabs"
                >
                  <button
                    type="button"
                    className="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white active"
                    id="mon"
                    data-hs-tab="#mon-1"
                    aria-controls="mon-1"
                  >
                    <span className="block mb-1">09</span>
                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">
                      Mon
                    </span>
                  </button>
                  <button
                    type="button"
                    className="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white"
                    id="tue"
                    data-hs-tab="#tue-1"
                    aria-controls="tue-1"
                  >
                    <span className="block mb-1">10</span>
                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">
                      Tue
                    </span>
                  </button>
                  <button
                    type="button"
                    className="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white"
                    id="wed"
                    data-hs-tab="#wed-1"
                    aria-controls="wed-1"
                  >
                    <span className="block mb-1">11</span>
                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">
                      Wed
                    </span>
                  </button>
                  <button
                    type="button"
                    className="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white"
                    id="thu"
                    data-hs-tab="#thu-1"
                    aria-controls="thu-1"
                  >
                    <span className="block mb-1">12</span>
                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">
                      Thu
                    </span>
                  </button>
                  <button
                    type="button"
                    className="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white"
                    id="fri"
                    data-hs-tab="#fri-1"
                    aria-controls="fri-1"
                  >
                    <span className="block mb-1">13</span>
                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">
                      Fri
                    </span>
                  </button>
                  <button
                    type="button"
                    className="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white"
                    id="sat"
                    data-hs-tab="#sat-1"
                    aria-controls="sat-1"
                  >
                    <span className="block mb-1">14</span>
                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">
                      Sat
                    </span>
                  </button>
                  <button
                    type="button"
                    className="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white"
                    id="sun"
                    data-hs-tab="#sun-1"
                    aria-controls="sun-1"
                  >
                    <span className="block mb-1">15</span>
                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">
                      Sun
                    </span>
                  </button>
                </nav>
                <div className="tab-content pt-4 my-4">
                  <div id="mon-1" role="tabpanel" aria-labelledby="mon-1">
                    <ul className="list-unstyled mb-0 upcoming-events-list">
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Meeting with client
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Video Conference
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block "></i>
                              9:00am - 10:00am
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Lunch with team members
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Dolores Ait Labore Sit
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              12:00pm - 12:45am
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              General board meeting
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Golden PArk
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              4:00pm - 5:30pm
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Create New Registration Page
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              2UA Project
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              5:00pm - 5:45pm
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="tue-1"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tue-1"
                  >
                    <ul className="list-unstyled mb-0 upcoming-events-list">
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Meeting with client
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Video Conference
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              9:00am - 10:00am
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Lunch with team members
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Dolores Ait Labore Sit
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              12:00pm - 12:45am
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              General board meeting
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Golden PArk
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              4:00pm - 5:30pm
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Create New Registration Page
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              2UA Project
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              5:00pm - 5:45pm
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="wed-1"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="wed-1"
                  >
                    <ul className="list-unstyled mb-0 upcoming-events-list">
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Meeting with client
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Video Conference
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              9:00am - 10:00am
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Lunch with team members
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Dolores Ait Labore Sit
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              12:00pm - 12:45am
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              General board meeting
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Golden PArk
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              4:00pm - 5:30pm
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Create New Registration Page
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              2UA Project
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              5:00pm - 5:45pm
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="thu-1"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="thu-1"
                  >
                    <ul className="list-unstyled mb-0 upcoming-events-list">
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Meeting with client
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Video Conference
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              9:00am - 10:00am
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="xl:col-span-4  md:col-span-6 col-span-12">
                          <div className="box custom-box">
                            <div className="box-header justify-between">
                              <div className="box-title">Timeline</div>
                              
                            </div>
                            <div className="box-body">
                              <ul className="list-unstyled timeline-widget mb-0 my-3">
                                <li className="timeline-widget-list">
                                  <div className="flex items-start">
                                    <div className="me-[3rem] text-center">
                                      <span className="block text-[1.25rem] font-semibold">
                                        02
                                      </span>
                                      <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                        Mon
                                      </span>
                                    </div>
                                    <div className="flex flex-wrap flex-grow items-center justify-between">
                                      <div>
                                        <p className="mb-1  timeline-widget-content text-wrap">
                                          You have an announcement - Ipsum Est
                                          Diam Eirmod
                                        </p>
                                        <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">
                                          10:00AM
                                          <span className="badge bg-primary/10 text-primary ms-2">
                                            Announcement
                                          </span>
                                        </p>
                                      </div>
                                      <div className="hs-dropdown ti-dropdown">
                                        <Link
                                          aria-label="anchor"
                                          href="#!"
                                          className="p-2 text-[1rem] text-[#8c9097] dark:text-white/50"
                                        >
                                          <i className="fe fe-more-vertical"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                          <li>
                                            <Link
                                              className="ti-dropdown-item"
                                              href="#!"
                                            >
                                              Action
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              className="ti-dropdown-item"
                                              href="#!"
                                            >
                                              Another action
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              className="ti-dropdown-item"
                                              href="#!"
                                            >
                                              Something else here
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="timeline-widget-list">
                                  <div className="flex items-start">
                                    <div className="me-[3rem] text-center">
                                      <span className="block text-[1.25rem] font-semibold">
                                        15
                                      </span>
                                      <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                        Sun
                                      </span>
                                    </div>
                                    <div className="flex flex-wrap flex-grow items-center justify-between">
                                      <div>
                                        <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">
                                          National holiday - Vero Jayanti
                                        </p>
                                        <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">
                                          <span className="badge bg-warning/10 text-warning">
                                            Holiday
                                          </span>
                                        </p>
                                      </div>
                                      <div className="hs-dropdown ti-dropdown">
                                        <Link
                                          aria-label="anchor"
                                          href="#!"
                                          className="p-2 text-[1rem] text-[#8c9097] dark:text-white/50"
                                        >
                                          <i className="fe fe-more-vertical"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                          <li>
                                            <Link
                                              className="ti-dropdown-item"
                                              href="#!"
                                            >
                                              Action
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              className="ti-dropdown-item"
                                              href="#!"
                                            >
                                              Another action
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              className="ti-dropdown-item"
                                              href="#!"
                                            >
                                              Something else here
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="timeline-widget-list">
                                  <div className="flex items-start">
                                    <div className="me-[3rem] text-center">
                                      <span className="block text-[1.25rem] font-semibold">
                                        23
                                      </span>
                                      <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                        Mon
                                      </span>
                                    </div>
                                    <div className="flex flex-wrap flex-grow items-center justify-between">
                                      <div>
                                        <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">
                                          John pup birthday - Team Member
                                        </p>
                                        <p className="mb-4 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">
                                          09:00AM
                                          <span className="badge bg-success/10 text-success ms-2">
                                            Birthday
                                          </span>
                                        </p>
                                        <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">
                                          Amet sed no dolor kasd - Et Dolores
                                          Tempor Erat
                                        </p>
                                        <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">
                                          04:00PM
                                          <span className="badge bg-primary/10 text-primary ms-2">
                                            Announcement
                                          </span>
                                        </p>
                                      </div>
                                      <div className="hs-dropdown ti-dropdown">
                                        <Link
                                          aria-label="anchor"
                                          href="#!"
                                          className="p-2 text-[1rem] text-[#8c9097] dark:text-white/50"
                                        >
                                          <i className="fe fe-more-vertical"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                          <li>
                                            <Link
                                              className="ti-dropdown-item"
                                              href="#!"
                                            >
                                              Action
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              className="ti-dropdown-item"
                                              href="#!"
                                            >
                                              Another action
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              className="ti-dropdown-item"
                                              href="#!"
                                            >
                                              Something else here
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="timeline-widget-list">
                                  <div className="flex items-start">
                                    <div className="me-[3rem] text-center">
                                      <span className="block text-[1.25rem] font-semibold">
                                        31
                                      </span>
                                      <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                        Tue
                                      </span>
                                    </div>
                                    <div className="flex flex-wrap flex-grow items-center justify-between">
                                      <div>
                                        <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">
                                          National Holiday - Dolore Ipsum
                                        </p>
                                        <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">
                                          <span className="badge bg-warning/10 text-warning">
                                            Holiday
                                          </span>
                                        </p>
                                      </div>
                                      <div className="hs-dropdown ti-dropdown">
                                        <Link
                                          aria-label="anchor"
                                          href="#!"
                                          className="p-2 text-[1rem] text-[#8c9097] dark:text-white/50"
                                        >
                                          <i className="fe fe-more-vertical"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                          <li>
                                            <Link
                                              className="ti-dropdown-item"
                                              href="#!"
                                            >
                                              Action
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              className="ti-dropdown-item"
                                              href="#!"
                                            >
                                              Another action
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              className="ti-dropdown-item"
                                              href="#!"
                                            >
                                              Something else here
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Lunch with team members
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Dolores Ait Labore Sit
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              12:00pm - 12:45am
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              General board meeting
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Golden PArk
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              4:00pm - 5:30pm
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Create New Registration Page
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              2UA Project
                            </p>
                            <div className="xl:col-span-4  md:col-span-6 col-span-12">
                              <div className="box custom-box">
                                <div className="box-header justify-between">
                                  <div className="box-title">Timeline</div>
                                  
                                </div>
                                <div className="box-body">
                                  <ul className="list-unstyled timeline-widget mb-0 my-3">
                                    <li className="timeline-widget-list">
                                      <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                          <span className="block text-[1.25rem] font-semibold">
                                            02
                                          </span>
                                          <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                            Mon
                                          </span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-center justify-between">
                                          <div>
                                            <p className="mb-1  timeline-widget-content text-wrap">
                                              You have an announcement - Ipsum
                                              Est Diam Eirmod
                                            </p>
                                            <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">
                                              10:00AM
                                              <span className="badge bg-primary/10 text-primary ms-2">
                                                Announcement
                                              </span>
                                            </p>
                                          </div>
                                          <div className="hs-dropdown ti-dropdown">
                                            <Link
                                              aria-label="anchor"
                                              href="#!"
                                              className="p-2 text-[1rem] text-[#8c9097] dark:text-white/50"
                                            >
                                              <i className="fe fe-more-vertical"></i>
                                            </Link>
                                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                              <li>
                                                <Link
                                                  className="ti-dropdown-item"
                                                  href="#!"
                                                >
                                                  Action
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  className="ti-dropdown-item"
                                                  href="#!"
                                                >
                                                  Another action
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  className="ti-dropdown-item"
                                                  href="#!"
                                                >
                                                  Something else here
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="timeline-widget-list">
                                      <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                          <span className="block text-[1.25rem] font-semibold">
                                            15
                                          </span>
                                          <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                            Sun
                                          </span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-center justify-between">
                                          <div>
                                            <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">
                                              National holiday - Vero Jayanti
                                            </p>
                                            <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">
                                              <span className="badge bg-warning/10 text-warning">
                                                Holiday
                                              </span>
                                            </p>
                                          </div>
                                          <div className="hs-dropdown ti-dropdown">
                                            <Link
                                              aria-label="anchor"
                                              href="#!"
                                              className="p-2 text-[1rem] text-[#8c9097] dark:text-white/50"
                                            >
                                              <i className="fe fe-more-vertical"></i>
                                            </Link>
                                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                              <li>
                                                <Link
                                                  className="ti-dropdown-item"
                                                  href="#!"
                                                >
                                                  Action
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  className="ti-dropdown-item"
                                                  href="#!"
                                                >
                                                  Another action
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  className="ti-dropdown-item"
                                                  href="#!"
                                                >
                                                  Something else here
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="timeline-widget-list">
                                      <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                          <span className="block text-[1.25rem] font-semibold">
                                            23
                                          </span>
                                          <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                            Mon
                                          </span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-center justify-between">
                                          <div>
                                            <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">
                                              John pup birthday - Team Member
                                            </p>
                                            <p className="mb-4 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">
                                              09:00AM
                                              <span className="badge bg-success/10 text-success ms-2">
                                                Birthday
                                              </span>
                                            </p>
                                            <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">
                                              Amet sed no dolor kasd - Et
                                              Dolores Tempor Erat
                                            </p>
                                            <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">
                                              04:00PM
                                              <span className="badge bg-primary/10 text-primary ms-2">
                                                Announcement
                                              </span>
                                            </p>
                                          </div>
                                          <div className="hs-dropdown ti-dropdown">
                                            <Link
                                              aria-label="anchor"
                                              href="#!"
                                              className="p-2 text-[1rem] text-[#8c9097] dark:text-white/50"
                                            >
                                              <i className="fe fe-more-vertical"></i>
                                            </Link>
                                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                              <li>
                                                <Link
                                                  className="ti-dropdown-item"
                                                  href="#!"
                                                >
                                                  Action
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  className="ti-dropdown-item"
                                                  href="#!"
                                                >
                                                  Another action
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  className="ti-dropdown-item"
                                                  href="#!"
                                                >
                                                  Something else here
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="timeline-widget-list">
                                      <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                          <span className="block text-[1.25rem] font-semibold">
                                            31
                                          </span>
                                          <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                            Tue
                                          </span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-center justify-between">
                                          <div>
                                            <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">
                                              National Holiday - Dolore Ipsum
                                            </p>
                                            <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">
                                              <span className="badge bg-warning/10 text-warning">
                                                Holiday
                                              </span>
                                            </p>
                                          </div>
                                          <div className="hs-dropdown ti-dropdown">
                                            <Link
                                              aria-label="anchor"
                                              href="#!"
                                              className="p-2 text-[1rem] text-[#8c9097] dark:text-white/50"
                                            >
                                              <i className="fe fe-more-vertical"></i>
                                            </Link>
                                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                              <li>
                                                <Link
                                                  className="ti-dropdown-item"
                                                  href="#!"
                                                >
                                                  Action
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  className="ti-dropdown-item"
                                                  href="#!"
                                                >
                                                  Another action
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  className="ti-dropdown-item"
                                                  href="#!"
                                                >
                                                  Something else here
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              5:00pm - 5:45pm
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="fri-1"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="fri-1"
                  >
                    <ul className="list-unstyled mb-0 upcoming-events-list">
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Meeting with client
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Video Conference
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              9:00am - 10:00am
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Lunch with team members
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Dolores Ait Labore Sit
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              12:00pm - 12:45am
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              General board meeting
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Golden PArk
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              4:00pm - 5:30pm
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Create New Registration Page
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              2UA Project
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              5:00pm - 5:45pm
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="sat-1"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="sat-1"
                  >
                    <ul className="list-unstyled mb-0 upcoming-events-list">
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Meeting with client
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Video Conference
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              9:00am - 10:00am
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Lunch with team members
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Dolores Ait Labore Sit
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              12:00pm - 12:45am
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              General board meeting
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Golden PArk
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              4:00pm - 5:30pm
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Create New Registration Page
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              2UA Project
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              5:00pm - 5:45pm
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="sun-1"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="sun-1"
                  >
                    <ul className="list-unstyled mb-0 upcoming-events-list">
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Meeting with client
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Video Conference
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              9:00am - 10:00am
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Lunch with team members
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Dolores Ait Labore Sit
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              12:00pm - 12:45am
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              General board meeting
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              Golden PArk
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              4:00pm - 5:30pm
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-conent-between">
                          <div className="flex-grow">
                            <p className="mb-0 text-[.875rem]">
                              Create New Registration Page
                            </p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                              2UA Project
                            </p>
                          </div>
                          <div>
                            <span className="text-[#8c9097] dark:text-white/50">
                              <i className="ri-time-line align-middle me-1 inline-block"></i>
                              5:00pm - 5:45pm
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-6 col-span-12">
            <div className="box custom-box">
              <div className="box-header justify-between">
                <div className="box-title">Recent Tasks</div>
               
              </div>
              <div className="box-body">
                <div className="table-responsive">
                  <table className="table whitespace-nowrap table-bordered min-w-full">
                    <thead>
                      <tr>
                        <th scope="col" className="text-start">
                          S.No
                        </th>
                        <th scope="col" className="text-start">
                          Title
                        </th>
                        <th scope="col" className="text-start">
                          Assigned To
                        </th>
                        <th scope="col" className="text-start">
                          Progress
                        </th>
                        <th scope="col" className="text-start">
                          Status
                        </th>
                        <th scope="col" className="text-start">
                          Due Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border border-defaultborder">
                        <td>01</td>
                        <td>Server Side Validation</td>
                        <td>
                          <div className="avatar-list-stacked">
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/2.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/8.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/2.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/10.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar avatar-xs bg-primary !rounded-full text-white"
                              href="#!"
                            >
                              +2
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated w-3/5"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-primary/10 text-primary">
                            In Progress
                          </span>
                        </td>
                        <td>17-04-2023</td>
                      </tr>
                      <tr className="border border-defaultborder">
                        <td>02</td>
                        <td>Multipurpose Dashboard Template</td>
                        <td>
                          <div className="avatar-list-stacked">
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/6.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/8.jpg"
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated w-0"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-warning/10 text-warning">
                            Pending
                          </span>
                        </td>
                        <td>14-05-2023</td>
                      </tr>
                      <tr className="border border-defaultborder">
                        <td>03</td>
                        <td>Documentation Project</td>
                        <td>
                          <div className="avatar-list-stacked">
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/4.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/15.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/11.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar avatar-xs bg-primary !rounded-full text-white"
                              href="#!"
                            >
                              +1
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated w-full"
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success/10 text-success">
                            Completed
                          </span>
                        </td>
                        <td>20-04-2023</td>
                      </tr>
                      <tr className="border border-defaultborder">
                        <td>04</td>
                        <td>HR Management Template Design</td>
                        <td>
                          <div className="avatar-list-stacked">
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/5.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/12.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/13.jpg"
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated w-1/2"
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-primary/10 text-primary">
                            In Progress
                          </span>
                        </td>
                        <td>29-05-2023</td>
                      </tr>
                      <tr className="border border-defaultborder">
                        <td>05</td>
                        <td>Developing Backend</td>
                        <td>
                          <div className="avatar-list-stacked">
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/1.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/8.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/9.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar avatar-xs bg-primary !rounded-full text-white"
                              href="#!"
                            >
                              +3
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated w-1/2"
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-primary/10 text-primary">
                            In Progress
                          </span>
                        </td>
                        <td>25-05-2023</td>
                      </tr>
                      <tr className="border border-defaultborder">
                        <td>06</td>
                        <td> Design New Dashboard Template</td>
                        <td>
                          <div className="avatar-list-stacked">
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/4.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/12.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-xs !rounded-full">
                              <img
                                src="../../../assets/images/faces/16.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar avatar-xs bg-primary !rounded-full text-white"
                              href="#!"
                            >
                              +3
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated w-full"
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success/10 text-success">
                            Completed
                          </span>
                        </td>
                        <td>04-05-2023</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-12 gap-x-6">
       
        {selectedProject && (
          <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
            <div className="box">
              <div className="box-header justify-between">
                <div className="box-title">Recent Activity</div>
                
              </div>
              <div className="box-body">
                <div>
                  <ul className="list-none mb-0 crm-recent-activity">
                    <li className="crm-recent-activity-content">
                      <div className="flex items-start">
                        <div className="me-4">
                          <span className="w-[1.25rem] h-[1.25rem] inline-flex items-center justify-center font-medium leading-[1.25rem] text-[0.65rem] text-primary bg-primary/10 rounded-full">
                            <i className="bi bi-circle-fill text-[0.5rem]"></i>
                          </span>
                        </div>
                        <div className="crm-timeline-content text-defaultsize">
                          <span className="font-semibold rtl:ms-1">
                            Update of calendar events &amp;
                          </span>
                          <span>
                            <Link
                              href="#!"
                              className="text-primary font-semibold ms-1"
                            >
                              Added new events in next week.
                            </Link>
                          </span>
                        </div>
                        <div className="flex-grow text-end">
                          <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                            4:45PM
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="crm-recent-activity-content">
                      <div className="flex items-start  text-defaultsize">
                        <div className="me-4">
                          <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-secondary bg-secondary/10 rounded-full">
                            <i className="bi bi-circle-fill text-[0.5rem]"></i>
                          </span>
                        </div>
                        <div className="crm-timeline-content">
                          <span>
                            New theme for{" "}
                            <span className="font-semibold">
                              Spruko Website
                            </span>{" "}
                            completed
                          </span>
                          <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">
                            Lorem ipsum, dolor sit amet.
                          </span>
                        </div>
                        <div className="flex-grow text-end">
                          <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                            3 hrs
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="crm-recent-activity-content  text-defaultsize">
                      <div className="flex items-start">
                        <div className="me-4">
                          <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-success bg-success/10 rounded-full">
                            <i className="bi bi-circle-fill  text-[0.5rem]"></i>
                          </span>
                        </div>
                        <div className="crm-timeline-content">
                          <span>
                            Created a{" "}
                            <span className="text-success font-semibold">
                              New Task
                            </span>{" "}
                            today{" "}
                            <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] text-[0.65rem] inline-flex items-center justify-center font-medium bg-purple/10 rounded-full ms-1">
                              <i className="ri-add-fill text-purple text-[0.75rem]"></i>
                            </span>
                          </span>
                        </div>
                        <div className="flex-grow text-end">
                          <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                            22 hrs
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="crm-recent-activity-content  text-defaultsize">
                      <div className="flex items-start">
                        <div className="me-4">
                          <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-pink bg-pink/10 rounded-full">
                            <i className="bi bi-circle-fill text-[0.5rem]"></i>
                          </span>
                        </div>
                        <div className="crm-timeline-content">
                          <span>
                            New member{" "}
                            <span className="py-[0.2rem] px-[0.45rem] font-semibold rounded-sm text-pink text-[0.75em] bg-pink/10">
                              @andreas gurrero
                            </span>{" "}
                            added today to AI Summit.
                          </span>
                        </div>
                        <div className="flex-grow text-end">
                          <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                            Today
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="crm-recent-activity-content  text-defaultsize">
                      <div className="flex items-start">
                        <div className="me-4">
                          <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-warning bg-warning/10 rounded-full">
                            <i className="bi bi-circle-fill text-[0.5rem]"></i>
                          </span>
                        </div>
                        <div className="crm-timeline-content">
                          <span>32 New people joined summit.</span>
                        </div>
                        <div className="flex-grow text-end">
                          <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                            22 hrs
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="crm-recent-activity-content  text-defaultsize">
                      <div className="flex items-start">
                        <div className="me-4">
                          <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-info bg-info/10 rounded-full">
                            <i className="bi bi-circle-fill text-[0.5rem]"></i>
                          </span>
                        </div>
                        <div className="crm-timeline-content">
                          <span>
                            Neon Tarly added{" "}
                            <span className="text-info font-semibold">
                              Robert Bright
                            </span>{" "}
                            to AI summit project.
                          </span>
                        </div>
                        <div className="flex-grow text-end">
                          <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                            12 hrs
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="crm-recent-activity-content  text-defaultsize">
                      <div className="flex items-start">
                        <div className="me-4">
                          <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-[#232323] dark:text-white bg-[#232323]/10 dark:bg-white/20 rounded-full">
                            <i className="bi bi-circle-fill text-[0.5rem]"></i>
                          </span>
                        </div>
                        <div className="crm-timeline-content">
                          <span>
                            Replied to new support request{" "}
                            <i className="ri-checkbox-circle-line text-success text-[1rem] align-middle"></i>
                          </span>
                        </div>
                        <div className="flex-grow text-end">
                          <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                            4 hrs
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="crm-recent-activity-content  text-defaultsize">
                      <div className="flex items-start">
                        <div className="me-4">
                          <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-purple bg-purple/10 rounded-full">
                            <i className="bi bi-circle-fill text-[0.5rem]"></i>
                          </span>
                        </div>
                        <div className="crm-timeline-content">
                          <span>
                            Completed documentation of{" "}
                            <Link
                              href="#!"
                              className="text-purple underline font-semibold"
                            >
                              AI Summit.
                            </Link>
                          </span>
                        </div>
                        <div className="flex-grow text-end">
                          <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                            4 hrs
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedProject && (
          <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
            <div className="box custom-box">
              <div className="box-header">
                <div className="box-title">Swiper with Pagination</div>
              </div>
              <div className="box-body">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src="../../../assets/images/media/media-32.jpg"
                      className="!rounded-md"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="../../../assets/images/media/media-31.jpg"
                      className="!rounded-md"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="../../../assets/images/media/media-33.jpg"
                      className="!rounded-md"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};
ProjectSummary.layout = "Contentlayout";

export default ProjectSummary;
