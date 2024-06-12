import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { z } from "zod";
import { SingleButtons } from "@/shared/data/ui-elements/dropdownsdata";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
const MultiSelect = dynamic(() => import("react-multi-select-component"), {
  ssr: false,
});
const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });
const today = new Date();
const isoDate = today.toISOString();
import { FilePond } from "react-filepond";
import { ToastContainer, toast } from "react-toastify";
import Preloader from "../preloader/preloader";
import "react-toastify/dist/ReactToastify.css";
import network from "@/config";
import { set } from "date-fns";
import { to } from "react-spring";

const CreateUpdateChangeOrder = (props) => {
  const router = useRouter();

  const formType = props.formType;
  const [formData, setFormData] = useState({
    notes: [],
    document_urls: [],
    active: false,
    description: "",
    amount: "",
    status: "",
    increase_budget: false,
    payment_terms: "",
    reviewed_by: "",
    approved_by: "",
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectTemplate, setSelectTemplate] = useState("");
  const [Users, setUsers] = useState(null);
  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  
  const loadingState = () => {
    setLoading(true);
  };

  const updateLocalStorage = () => {
    axios
      .get(`${network.onlineUrl}api/change_Order?filter[project]=${selectedProject.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        localStorage.setItem(
          "projectChangeOrders",
          JSON.stringify(response.data.body.data)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleFileChange = (response) => {
    axios
      .patch(
        `${network.onlineUrl}api/file/${response[0].id}`,
        {
          data: {
            type: "file",
            attributes: {
              project_id: selectedProject.id,
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
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setFormData({
      ...formData,
      document_urls: [...formData.document_urls, response[0].file_url],
    });
  };
  const handleFileRemove = (error, file) => {
    if (error) {
      console.log("Error removing file:", error);
      return;
    }
  
    // Remove the file from the state
    const updatedFiles = files.filter((f) => f.source !== file.source);
    setFiles(updatedFiles);
  
    // Remove the file URL from the formData
    const updatedDocumentUrls = formData.document_urls.filter(
      (url) => url !== file.source
    );
    setFormData({ ...formData, document_urls: updatedDocumentUrls });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.info("Please wait while we are processing your request", {
      toastId: "loading",
      autoClose: false,
    });
    if (formType === "update") {
      axios
        .patch(
          `${network.onlineUrl}api/change_Order/${props.changeOrderId}`,
          {
            data: {
              type: "change_order",
              attributes: {
                project_id: selectedProject.id,
                creator_id: user,
                notes: formData.notes,
                document_urls: formData.document_urls,
                active: formData.active,
                description: formData.description,
                amount: Number(formData.amount),
                status: formData.status,
                increaase_budget: formData.increase_budget,
                payment_terms: formData.payment_terms,
                reviewed_by: formData.reviewed_by,
                approved_by: formData.approved_by,
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
          console.log(response);
          if (response.data.status === 200) {
            updateLocalStorage();
            toast.dismiss("loading");
            toast.success("Change Order Updated Successfully");
            setTimeout(() => {
              router.push("/components/project-management/change-orders/");
            }, 1000);

          }
        })
        .catch((error) => {
          toast.dismiss("loading");
          toast.error("Error Updating Change Order");
        });
    } else {
      axios
        .post(
          `${network.onlineUrl}api/change_Order`,
          {
            data: {
              type: "change_order",
              attributes: {
                project_id: selectedProject.id,
                creator_id: user,
                notes: formData.notes,
                document_urls: formData.document_urls,
                active: formData.active,
                description: formData.description,
                amount: Number(formData.amount),
                status: formData.status,
                increaase_budget: formData.increase_budget,
                payment_terms: formData.payment_terms,
                reviewed_by: formData.reviewed_by,
                approved_by: formData.approved_by,
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
          console.log(response);
          if (response.data.status === 201) {
            updateLocalStorage();
            toast.dismiss("loading");
            toast.success("Change Order Created Successfully");
            setTimeout(() => {
              router.push("/components/project-management/change-orders/");
            }, 1000);
          }
        })
        .catch((error) => {
          toast.dismiss("loading");
          toast.error("Error Creating Change Order");
        });
    }
  };
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    fetch("/api/users/")
      .then((response) => response.json())
      .then((data) => setMultiselectdata(data.data))
      .catch((error) => console.error("Error:", error));
    if (window !== undefined) {
      setUsers(JSON.parse(localStorage.getItem("Users")));
      setToken(localStorage.getItem("token"));
      setUser(JSON.parse(localStorage.getItem("userid")));
    }
    if (formType === "update" && token !== "") {
      axios
        .get(`${network.onlineUrl}api/change_Order/${props.changeOrderId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setFormData(response.data.body.data.attributes);
          setFiles(
            response.data.body.data.attributes.document_urls.map((url) => {
              return { source: url };
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  const handleInputChange = (event) => {
    const { id, value, checked } = event.target;
    let finalValue;
    if (id === "active" || id === "increase_budget") {
      finalValue = checked;
    } else if (id === "notes") {
      finalValue = value.split("\n");
    } else {
      finalValue = value;
    }
    setFormData({ ...formData, [id]: finalValue });
  };

  const getDataFromLocalStorage = () => {
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
      <Seo
        title={`${
          formType === "update" ? "Update Change Order" : "Create Change Order"
        }`}
      />
      <ToastContainer />
      <Pageheader
        mainpage={`${formType === "update" ? "Update" : "Create"} Change Order`}
        activepage={`${selectedProject?.attributes?.name || `Project Summary`}`}
        mainpageurl="/components/project-management/project-summary/"
        loadProjectData={getDataFromLocalStorage}
        createProject={false}
        loadingState={loadingState}
        isDisabled={true}
      />

      <div className="box-body">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-6">
            <div className="xl:col-span-12 col-span-12">
              <div className="box custom-box">
                <div className="box-header">
                  <div className="box-title">
                    {formType === "update"
                      ? "Update Change Order"
                      : "Create Change Order"}
                  </div>
                </div>
                <div className="box-body">
                  <div className="grid grid-cols-12 gap-4">
                    {/* input field for Notes */}
                    <div className="xl:col-span-4 col-span-12">
                      <label htmlFor="notes" className="form-label">
                        Notes :
                      </label>
                      <textarea
                        required
                        className="form-control"
                        id="notes"
                        placeholder="Enter Notes"
                        value={formData.notes?.join("\n")}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* input field for Document URLs */}
                    <div className="xl:col-span-4 col-span-12">
                      <label htmlFor="document_urls" className="form-label">
                        Document URLs :
                      </label>
                      <FilePond
                        files={files}
                        onupdatefiles={setFiles}
                        allowMultiple={true}
                        maxFiles={3}
                        onremovefile={handleFileRemove}
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
                        labelIdle="Drag & Drop your files here or click"
                      />
                    </div>

                    {/* input field for Description */}
                    <div className="xl:col-span-4 col-span-12">
                      <label htmlFor="description" className="form-label">
                        Description :
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="Enter Description"
                        value={formData.description}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* input field for Amount */}
                    <div className="xl:col-span-4 col-span-12">
                      <label htmlFor="amount" className="form-label">
                        Amount :
                      </label>
                      <input
                        required
                        type="number"
                        className="form-control"
                        id="amount"
                        placeholder="Enter Amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* input field for Status */}
                    <div className="xl:col-span-4 col-span-12">
                      <label htmlFor="status" className="form-label">
                        Status :
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="status"
                        placeholder="Enter Status"
                        value={formData.status}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* input field for Increase Budget */}
                    <div className="xl:col-span-2 col-span-12">
                      <label htmlFor="increase_budget" className="form-label">
                        Increase Budget :
                      </label>
                      <br />
                      <input
                        type="checkbox"
                        id="increase_budget"
                        className="ti-switch mb-4"
                        checked={formData.increase_budget}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="xl:col-span-2 col-span-12">
                      <label htmlFor="active" className="form-label">
                        Active :
                      </label>
                      <br />
                      <input
                        type="checkbox"
                        className="ti-switch mb-4"
                        id="active"
                        checked={formData.active}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* input field for Payment Terms */}
                    <div className="xl:col-span-4 col-span-12">
                      <label htmlFor="payment_terms" className="form-label">
                        Payment Terms :
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="payment_terms"
                        placeholder="Enter Payment Terms"
                        value={formData.payment_terms}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* input field for Reviewed By */}

                    <div className="xl:col-span-4 col-span-12">
                      <label htmlFor="reviewed_by" className="form-label">
                        Reviewed By :
                      </label>
                      <Select
                        id="reviewed_by"
                        value={
                          Users?.find(
                            (user) => user.id === formData.reviewed_by
                          )
                            ? {
                                value: formData.reviewed_by,
                                label: Users.find(
                                  (user) => user.id === formData.reviewed_by
                                ).attributes.username,
                              }
                            : null
                        }
                        onChange={(selectedOption) =>
                          setFormData({
                            ...formData,
                            reviewed_by: selectedOption.value,
                          })
                        }
                        options={Users?.map((user) => ({
                          value: user.id,
                          label: user.attributes.username,
                        }))}
                        menuPlacement="auto"
                      />
                    </div>
                    {/* input field for Approved By */}
                    <div className="xl:col-span-4 col-span-12">
                      <label htmlFor="approved_by" className="form-label">
                        Approved By :
                      </label>
                      <Select
                        id="approved_by"
                        value={
                          Users?.find(
                            (user) => user.id === formData.approved_by
                          )
                            ? {
                                value: formData.approved_by,
                                label: Users.find(
                                  (user) => user.id === formData.approved_by
                                ).attributes.username,
                              }
                            : null
                        }
                        onChange={(selectedOption) =>
                          setFormData({
                            ...formData,
                            approved_by: selectedOption.value,
                          })
                        }
                        options={Users?.map((user) => ({
                          value: user.id,
                          label: user.attributes.username,
                        }))}
                        menuPlacement="auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="box-footer">
                  <button
                    type="submit"
                    className="ti-btn ti-btn-primary btn-wave ms-auto float-right"
                  >
                    {formType === "update"
                      ? "Update Change Order"
                      : "Create Change Order"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
CreateUpdateChangeOrder.layout = "Contentlayout";

export default CreateUpdateChangeOrder;
