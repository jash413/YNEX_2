import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import { format } from "date-fns";

import { useEffect, useState } from "react";

const ProgressionNotes = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const Users =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("Users"))
      : null;
  const progressionNotes =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("projectProgressionNotes"))
      : null;
  const userid =
    typeof window !== "undefined" ? localStorage.getItem("userid") : null;

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

  return (
    <div>
      <Seo title={"Chat"} />
      <Pageheader
        activepage={`Progression Notes`}
        mainpage="Progression Notes"
        mainpageurl="/components/project-management/project-summary/"
        loadProjectData={getProjectDataFromLocalStorage}
        createProject={true}
      />
      <div className="main-chart-wrapper p-2 gap-2 lg:flex">
        <div className="main-chat-area border dark:border-defaultborder/10">
          <div className="sm:flex items-center p-2 border-b dark:border-defaultborder/10">
            <div className="flex items-center leading-none">
              <span className="avatar avatar-lg  me-4 avatar-rounded chatstatusperson">
                <img
                  className="chatimageperson"
                  src="../../../assets/images/faces/2.jpg"
                  alt="img"
                />
              </span>
              <div className="flex-grow">
                <p className="mb-1 font-semibold text-[.875rem]">
                  <Link
                    href="#!"
                    className="chatnameperson responsive-userinfo-open !text-defaulttextcolor dark:text-defaulttextcolor/70"
                  >
                     {
(Users && Users.length > 0 ? Users.filter(user => user.id == userid)[0] : {})?.attributes?.username  }
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <PerfectScrollbar style={{ height: "750px" }}>
            <div className="chat-content" id="main-chat-content">
              <ul className="list-none">
                <li className="chat-day-label">
                  <span>Today</span>
                </li>
                {progressionNotes && progressionNotes.map((note, index) => (
                  <li className="chat-item-start" key={index}>
                    <div className="chat-list-inner">
                      <div className="chat-user-profile"></div>
                      <div className="ms-4">
                        <span className="chatting-user-info">
                        <span className="chatnameperson">
  {
(Users && Users.length > 0 ? Users.filter(user => user.id == userid)[0] : {})?.attributes?.username  }
</span>
                          <span className="msg-sent-time">
                            {" "}
                            {format(
                              new Date(note.attributes.created_at),
                              "dd MMM yyyy HH:mm"
                            )}
                          </span>
                        </span>
                        <div className="main-chat-msg">
                          <div>
                            <p className="mb-0">
                              {note.attributes.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </PerfectScrollbar>
          <div className="chat-footer">
            <input
              className="form-control w-full !rounded-md"
              placeholder="Type your message here..."
              type="text"
            />
            <Link
              aria-label="anchor"
              className="ti-btn ti-btn-icon !mx-2 ti-btn-success"
              href="#!"
            >
              <i className="ri-emotion-line"></i>
            </Link>
            <Link
              aria-label="anchor"
              className="ti-btn bg-primary text-white  ti-btn-icon ti-btn-send"
              href="#!"
            >
              <i className="ri-send-plane-2-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
ProgressionNotes.layout = "Contentlayout";

export default ProgressionNotes;
