import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import network from "@/config";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilePond } from "react-filepond";
import { format } from "date-fns";

import { useEffect, useState } from "react";
import axios from "axios";
import Preloader from "@/shared/layout-components/preloader/preloader";

const ProgressionNotes = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [Users, setUsers] = useState(null);
  const [progressionNotes, setProgressionNotes] = useState(null);
  const [userid, setUserid] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ description: "", 
    notes_type: "",
    files: []
   });
  const [token, setToken] = useState(null);
  const [files, setFiles] = useState([]);

  const loadingState = () => {
    setLoading(true);
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFileChange = (response) => {
    axios.patch(`${network.onlineUrl}api/file/${response[0].id}`, {
      data:{
        type: "file",
      attributes: {
        project_id: selectedProject.id,
      }
    },
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

    setFormData({
      ...form,
      files: [...formDfiles, response[0].file_url],
    });
  };
  
  const getProgressionNotes = () => {
    if(
      localStorage.getItem("projectProgressionNotes") !== null &&
      localStorage.getItem("projectProgressionNotes") !== "undefined"
    )
    {
      setProgressionNotes(JSON.parse(localStorage.getItem("projectProgressionNotes")));
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.description) {
      axios
      .post(
        `${network.onlineUrl}api/progression_Notes`,
        {
          data: {
          type: "progression_Notes",
          attributes: {
            description: form.description,
            project_id: selectedProject.id,
            user_id: Number(userid),
            notes_type: form.notes_type,
            file_urls: form.files,
          },
        }
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.status === 201) {
          toast.success("Note added successfully");
          updateLocalStorage();
          setForm({ description: "", notes_type: ""});
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error adding note");
      });
    }
  };
  const updateLocalStorage = () => {
    axios
      .get(`${network.onlineUrl}api/progression_Notes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.status === 200) {
          localStorage.setItem(
            "projectProgressionNotes",
            JSON.stringify(response.data.body.data)
          );
          setProgressionNotes(response.data.body.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
      getProgressionNotes();
    } else {
      setSelectedProject(null);
    }
    if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("token") !== "undefined"
    ) {
      setToken(localStorage.getItem("token"));
    }}
    finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUsers(JSON.parse(localStorage.getItem("Users")));
      setProgressionNotes(
        JSON.parse(localStorage.getItem("projectProgressionNotes"))
      );
      setUserid(localStorage.getItem("userid"));
    }
    getProjectDataFromLocalStorage();
  }, []);

  return (
    <div>
      <Seo title={"Chat"} />
      <ToastContainer />
      <Pageheader
        activepage={`${
          selectedProject?.attributes?.name || `Progression Notes`
        }`}
        mainpage="Progression Notes"
        mainpageurl="/components/project-management/project-summary/"
        loadProjectData={getProjectDataFromLocalStorage}
        createProject={true}
        loadingState={loadingState}
      />
      {loading ? <Preloader/> : (selectedProject) ? (<><div className="main-chart-wrapper p-2 gap-2 lg:flex">
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
                      (Users && Users.length > 0
                        ? Users.filter((user) => user.id == userid)[0]
                        : {}
                      )?.attributes?.username
                    }
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
                {progressionNotes?.length ?
                  (progressionNotes.map((note, index) => (
                    <li className="chat-item-start" key={index}>
                      <div className="chat-list-inner">
                        <div className="chat-user-profile"></div>
                        <div className="ms-4">
                          <span className="chatting-user-info">
                            <span className="chatnameperson">
                              {
                                (Users && Users.length > 0
                                  ? Users.filter(
                                      (user) =>
                                        user.id == note.attributes.user_id
                                    )[0]
                                  : {}
                                )?.attributes?.username
                              }
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
                  ))) : (
                    <li className="chat-item-start">
                      <div className="chat-list-inner">
                        <div className="chat-user-profile"></div>
                        <div className="ms-4">
                          <span className="chatting-user-info">
                            <span className="chatnameperson">No notes yet</span>
                          </span>
                        </div>
                      </div>
                    </li>
                  )}
              </ul>
            </div>
          </PerfectScrollbar>
          <form onSubmit={handleSubmit}>
            <div className="chat-footer">
              <input
                className="form-control w-full !rounded-md"
                placeholder="Type your message here..."
                type="text"
                name="description"
                value={form.description}
                onChange={handleInputChange}
              />
              <Select
                className="w-1/3"
                options={[
                  { value: "issue", label: "Issue" },
                  { value: "update", label: "Update" },
                ]}
                onChange={(e) => setForm({ ...form, notes_type: e.value })}
                menuPlacement="auto"
              />
              {/* <FilePond
                        files={files}
                        onupdatefiles={setFiles}
                        allowMultiple={true}
                        maxFiles={3}
                        server={{
                          url: "https://backend-api-topaz.vercel.app/api/upload",
                          process: {
                            headers: {
                              Authorization: `Bearer ${token}`,
                            },
                          },
                          
                          
                        }}
                        onprocessfile={(error, file) => {
                          if (error) {
                            console.log("error", error);
                          } else {
                            handleFileChange(JSON.parse(file.serverId));
                          }
                        }}
                        name="files"
                        labelIdle="Drag & Drop your file here or click "
                      /> */}
              <button
                aria-label="anchor"
                className="ti-btn bg-primary text-white  ti-btn-icon ti-btn-send"
                type="submit"
              >
                <i className="ri-send-plane-2-line"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      </>)
      : (<div className="box">
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
ProgressionNotes.layout = "Contentlayout";

export default ProgressionNotes;
