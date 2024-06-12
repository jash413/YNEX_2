import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import dynamic from "next/dynamic";
const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });
import { FilePond } from "react-filepond";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import network from "@/config";
import { useRouter } from "next/router";
import Preloader from "@/shared/layout-components/preloader/preloader";

const CreateUpdatePurchaseOrder = (props) => {
  const router = useRouter();

  const formType = props.formType;
  const [formData, setFormData] = useState({
    active: true,
    order_date: new Date(),
    delivery_date: new Date(),
    user_id: "",
    description: "",
    amount: "",
    business_id: "",
    notes: [],
    status: "",
    po_number: "",
    document_urls: [],
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [Users, setUsers] = useState(null);
  const [gcBusiness, setGcBusiness] = useState(null);
  const [files, setFiles] = useState([]);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  const loadingState = () => {
    setLoading(true);
  };

  const updateLocalStorage = async () => {
    await axios
      .get(`${network.onlineUrl}api/purchase_Order`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        localStorage.setItem(
          "projectPurchaseOrders",
          JSON.stringify(response.data.body.data)
        );
      })
      .catch((error) => {
        console.log(error);
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

  const handleFilePurchase = (response) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.info("Please wait while we are processing your request", {
      toastId: "loading",
      autoClose: false,
    });
    if (formType === "update") {
      axios
        .patch(
          `${network.onlineUrl}api/purchase_Order/${props.purchaseOrderId}`,
          {
            data: {
              type: "purchase_order",
              attributes: {
                project_id: selectedProject.id,
                Order_date: formData.order_date,
                Delivery_date: formData.delivery_date,
                user_id: formData.user_id,
                description: formData.description,
                amount: Number(formData.amount),
                business_id: formData.business_id,
                notes: formData.notes,
                status: formData.status,
                po_number: formData.po_number,
                document_urls: formData.document_urls,
                active: formData.active,
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
            updateLocalStorage().then(() => {
              toast.dismiss("loading");
              toast.success("Purchase Order Updated Successfully");
              setTimeout(() => {
                router.push("/components/project-management/purchase-orders/");
              }, 1000);
            });
          }
        })
        .catch((error) => {
          toast.dismiss("loading");
          toast.error("Error Updating Purchase Order");
        });
    } else {
      axios
        .post(
          `${network.onlineUrl}api/purchase_Order`,
          {
            data: {
              type: "purchase_order",
              attributes: {
                project_id: selectedProject.id,
                Order_date: formData.order_date,
                Delivery_date: formData.delivery_date,
                user_id: formData.user_id,
                description: formData.description,
                amount: Number(formData.amount),
                business_id: formData.business_id,
                notes: formData.notes,
                status: formData.status,
                po_number: formData.po_number,
                document_urls: formData.document_urls,
                active: formData.active,
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
            updateLocalStorage().then(() => {
              toast.dismiss("loading");
              toast.success("Purchase Order Updated Successfully");
              setTimeout(() => {
                router.push("/components/project-management/purchase-orders/");
              }, 1000);
            });
          }
        })
        .catch((error) => {
          toast.dismiss("loading");
          toast.error("Error Creating Purchase Order");
        });
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (window !== undefined) {
      setUsers(JSON.parse(localStorage.getItem("Users")));
      setGcBusiness(JSON.parse(localStorage.getItem("gcBuisness")));
      setToken(localStorage.getItem("token"));
    }
    if (formType === "update" && token !== "") {
      axios
        .get(
          `${network.onlineUrl}api/purchase_Order/${props.purchaseOrderId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          const data = response.data.body.data.attributes;
          setFormData({
            ...data,
            order_date: data.Order_date ? new Date(data.Order_date) : "",
            delivery_date: data.Delivery_date
              ? new Date(data.Delivery_date)
              : "",
          });
          setFiles(
            data.document_urls.map((url) => {
              return { source: url };
            })
          );
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (formType === "create") {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  const handleInputChange = (event) => {
    const { id, value, checked } = event.target;
    let finalValue;
    if (id === "active") {
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
          formType === "update"
            ? "Update Purchase Order"
            : "Create Purchase Order"
        }`}
      />
      <ToastContainer />
      <Pageheader
        mainpage={`${
          formType === "update" ? "Update" : "Create"
        } Purchase Order`}
        activepage={`${selectedProject?.attributes?.name || `Project Summary`}`}
        mainpageurl="/components/project-management/purchase-orders/"
        loadProjectData={getDataFromLocalStorage}
        createProject={false}
        loadingState={loadingState}
        isDisabled={true}
      />
      {loading ? (
        <Preloader />
      ) : (
        <div className="box-body">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 gap-6">
              <div className="xl:col-span-12 col-span-12">
                <div className="box custom-box">
                  <div className="box-header">
                    <div className="box-title">
                      {formType === "update"
                        ? "Update Purchase Order"
                        : "Create Purchase Order"}
                    </div>
                  </div>
                  <div className="box-body">
                    <div className="grid grid-cols-12 gap-4">
                      {/* input field for Order Date */}
                      <div className="xl:col-span-4 col-span-12">
                        <label htmlFor="order_date" className="form-label">
                          Order Date:
                        </label>
                        <DatePicker
                          selected={formData.order_date}
                          onChange={(date) =>
                            setFormData({ ...formData, order_date: date })
                          }
                          className="form-control"
                          dateFormat="dd MMM yyyy"
                        />
                      </div>

                      {/* input field for Delivery Date */}
                      <div className="xl:col-span-4 col-span-12">
                        <label htmlFor="delivery_date" className="form-label">
                          Delivery Date:
                        </label>
                        <DatePicker
                          selected={formData.delivery_date}
                          onChange={(date) =>
                            setFormData({ ...formData, delivery_date: date })
                          }
                          className="form-control"
                          dateFormat="dd MMM yyyy"
                        />
                      </div>

                      {/* input field for User */}
                      <div className="xl:col-span-4 col-span-12">
                        <label htmlFor="user_id" className="form-label">
                          User:
                        </label>
                        <Select
                          id="user_id"
                          value={
                            Users?.find((user) => user.id === formData.user_id)
                              ? {
                                  value: formData.user_id,
                                  label: Users.find(
                                    (user) => user.id === formData.user_id
                                  ).attributes.username,
                                }
                              : null
                          }
                          onChange={(selectedOption) =>
                            setFormData({
                              ...formData,
                              user_id: selectedOption.value,
                            })
                          }
                          options={Users?.map((user) => ({
                            value: user.id,
                            label: user.attributes.username,
                          }))}
                          menuPlacement="auto"
                        />
                      </div>

                      {/* input field for Description */}
                      <div className="xl:col-span-4 col-span-12">
                        <label htmlFor="description" className="form-label">
                          Description:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="description"
                          value={formData.description}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* input field for Amount */}
                      <div className="xl:col-span-4 col-span-12">
                        <label htmlFor="amount" className="form-label">
                          Amount:
                        </label>
                        <input
                          type="number"
                          min={0}
                          className="form-control"
                          id="amount"
                          value={formData.amount}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* input field for Business */}
                      <div className="xl:col-span-4 col-span-12">
                        <label htmlFor="business_id" className="form-label">
                          Business:
                        </label>
                        <Select
                          id="business_id"
                          value={
                            gcBusiness?.find(
                              (business) => business.id === formData.business_id
                            )
                              ? {
                                  value: formData.business_id,
                                  label: gcBusiness.find(
                                    (business) =>
                                      business.id === formData.business_id
                                  ).attributes.name,
                                }
                              : null
                          }
                          onChange={(selectedOption) =>
                            setFormData({
                              ...formData,
                              business_id: selectedOption.value,
                            })
                          }
                          options={gcBusiness?.map((business) => ({
                            value: business.id,
                            label: business.attributes.name,
                          }))}
                          menuPlacement="auto"
                        />
                      </div>

                      {/* input field for Notes */}
                      <div className="xl:col-span-4 col-span-12">
                        <label htmlFor="notes" className="form-label">
                          Notes:
                        </label>
                        <textarea
                          className="form-control"
                          id="notes"
                          value={formData.notes.join("\n")}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              notes: e.target.value.split("\n"),
                            })
                          }
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
                      {/* input field for Status */}
                      <div className="xl:col-span-4 col-span-12">
                        <label htmlFor="status" className="form-label">
                          Status
                        </label>
                        <Select
                          id="status"
                          value={{
                            value: formData.status,
                            label: formData.status,
                          }}
                          onChange={(selectedOption) =>
                            handleInputChange({
                              target: {
                                id: "status",
                                value: selectedOption.value,
                              },
                            })
                          }
                          options={[
                            { value: "Pending", label: "Pending" },
                            { value: "Approved", label: "Approved" },
                            { value: "Shipped", label: "Shipped" },
                            { value: "Delivered", label: "Delivered" },
                          ]}
                        />
                      </div>

                      {/* input field for PO Number */}
                      <div className="xl:col-span-4 col-span-12">
                        <label htmlFor="po_number" className="form-label">
                          PO Number:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="po_number"
                          value={formData.po_number}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* input field for Document URLs */}
                      <div className="xl:col-span-12 col-span-12">
                        <label htmlFor="document_urls" className="form-label">
                          Document URLs:
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
                              handleFilePurchase(JSON.parse(file.serverId));
                            }
                          }}
                          name="files"
                          labelIdle="Drag & Drop your files here or click"
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
                        ? "Update Purchase Order"
                        : "Create Purchase Order"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

CreateUpdatePurchaseOrder.layout = "Contentlayout";

export default CreateUpdatePurchaseOrder;
