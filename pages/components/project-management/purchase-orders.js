import Pageheader from "@/shared/layout-components/page-header/pageheader";
import { useEffect, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React from "react";
import { ResponsiveDataTable } from "@/shared/data/tables/datatabledata";
import Link from "next/link";
import Preloader from "@/shared/layout-components/preloader/preloader";
import { format } from "date-fns";
import { Cell } from "gridjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import network from "@/config";


const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const PurchaseOrders = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [completedPurchaseOrders, setCompletedPurchaseOrders] = useState(0);
  const [pendingPurchaseOrders, setPendingPurchaseOrders] = useState(0);
  const [inProgressPurchaseOrders, setInProgressPurchaseOrders] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gcBuisness, setGcBuisness] = useState([]);
  const [Users, setUsers] = useState(null);
  const [token, setToken] = useState(null);

  const loadingState = () => {
    setLoading(true);
  };

  const handleDelete = (id) => {
    return () => {
      axios
        .delete(`${network.onlineUrl}api/purchase_Order/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data.status === 204) {
            toast.success("Purchase Order deleted successfully");
            const newPurchaseOrders = purchaseOrders.filter(
              (purchaseOrder) => purchaseOrder.id !== id
            );
            setPurchaseOrders(newPurchaseOrders);
            localStorage.setItem(
              "projectPurchaseOrders",
              JSON.stringify(newPurchaseOrders)
            );
          }
        })
        .catch((error) => {
          toast.error("Error deleting Purchase Order");
        });
    };
  };

  const COLUMNS = [
    {
      Header: "Action",
      accessor: "attributes.action_task_id",
      Cell: ({ row: { original } }) => (
        <div className="flex justify-center space-x-2">
          <Link
            href={`/components/project-management/edit-purchaseorder/${original.id}`}
          >
            <i className="ri-pencil-fill"></i>
          </Link>
          <Link onClick={handleDelete(original.id)} href="javascript:void(0)">
            <i className="ri-delete-bin-6-fill"></i>
          </Link>
        </div>
      ),
    },
    {
      Header: "Active",
      accessor: "attributes.active",
      Cell: ({ value }) => (value ? "Yes" : "No"),
    },
    {
      Header: "Order Date",
      accessor: "attributes.Order_date",
      Cell: ({ value }) => format(new Date(value), "dd MMM yyyy"),
    },
    {
      Header: "Delivery Date",
      accessor: "attributes.Delivery_date",
      Cell: ({ value }) => format(new Date(value), "dd MMM yyyy"),
    },
    {
      Header: "User",
      accessor: "attributes.user_id",
      Cell: ({ value }) => {
        const user = Users.find((user) => user.id == value);
        return user ? user.attributes.username : "";
      },
    },
    {
      Header: "Description",
      accessor: "attributes.description",
    },
    {
      Header: "Amount",
      accessor: "attributes.amount",
      Cell: ({ value }) => `$${parseInt(value).toLocaleString()}`,
    },
    {
      Header: "Business",
      accessor: "attributes.business_id",
      Cell: ({ value }) => {
        return (
          gcBuisness?.find((business) => business.id == value)?.attributes
            .name || ""
        );
      },
    },
    {
      Header: "Notes",
      accessor: "attributes.notes",
      //show as bullets
      Cell: ({ value }) => (
        <ol>
          {value?.map((note) => (
            <li>{note}</li>
          ))}
        </ol>
      ),
    },
    {
      Header: "Status",
      accessor: "attributes.status",
    },
    {
      Header: "PO Number",
      accessor: "attributes.po_number",
    },
    {
      Header: "Document URLs",
      accessor: "attributes.document_urls",
      Cell: ({ value }) => value?.join(", "), // Optional cell formatter to join URLs array
    },
  ];

  const getProjectDataFromLocalStorage = () => {
    try {
      if (
        localStorage.getItem("selectedProject") !== null &&
        localStorage.getItem("selectedProject") !== "undefined"
      ) {
        const selectedProject = JSON.parse(
          localStorage.getItem("selectedProject")
        );
        setSelectedProject(selectedProject);
        setToken(localStorage.getItem("token"));
        setGcBuisness(JSON.parse(localStorage.getItem("gcBuisness")));
        setUsers(JSON.parse(localStorage.getItem("Users")));
        getPurchaseOrders();
      } else {
        setSelectedProject(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const getPurchaseOrders = () => {
    if (
      localStorage.getItem("projectPurchaseOrders") !== null &&
      localStorage.getItem("projectPurchaseOrders") !== "undefined"
    ) {
      const purchaseOrders = JSON.parse(
        localStorage.getItem("projectPurchaseOrders")
      );
      setPurchaseOrders(purchaseOrders);
    }
  };

  useEffect(() => {
    getProjectDataFromLocalStorage();
    getPurchaseOrders();
  }, []);

  return (
    <div>
      <Seo title={"Purchase Orders"} />
      <Pageheader
        activepage={`${selectedProject?.attributes?.name || `Purchase Orders`}`}
        mainpage="Purchase Orders"
        mainpageurl="/components/project-management/purchase-orders"
        loadProjectData={getProjectDataFromLocalStorage}
        loadingState={loadingState}
      />
      <ToastContainer />
      {loading ? (
        <Preloader />
      ) : selectedProject && purchaseOrders && gcBuisness && Users ? (
        <>
          <div className="box">
            <div className="box-body">
              <div className="grid grid-cols-3">
                <div className="p-6 border-r dark:border-defaultborder/10 border-solid col-md-3">
                  <div className="svg-icon-background bg-success/10 !fill-success me-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="svg-success"
                    >
                      <path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h6 className="mb-1 text-[0.75rem]">
                      Completed PurchaseOrders
                    </h6>
                    <div>
                      <h4 className="text-[1.125rem] font-semibold mb-1">
                        <span className="count-up" data-count="319">
                          {completedPurchaseOrders}
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-r dark:border-defaultborder/10 border-solid col-md-3">
                  <div className="svg-icon-background bg-warning/10 me-4 !fill-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      className="svg-warning"
                    >
                      <path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h6 className="mb-1 text-[0.75rem]">
                      Pending PurchaseOrders
                    </h6>
                    <div>
                      <h4 className="text-[1.125rem] font-semibold mb-1">
                        <span className="count-up" data-count="81">
                          {pendingPurchaseOrders}
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="p-6 col-md-3">
                  <div className="svg-icon-background bg-secondary/10 text-secondary !fill-secondary me-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      className="svg-secondary"
                    >
                      <path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h6 className="mb-1 text-[0.75rem]">
                      Inprogress PurchaseOrders
                    </h6>
                    <div>
                      <h4 className="text-[1.125rem] font-semibold mb-1">
                        <span className="count-up" data-count="32">
                          {inProgressPurchaseOrders}
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <div className="box">
                <div className="box-header">
                  <h5 className="box-title">PurchaseOrders Table</h5>
                  <div className="display-flex justify-content-end">
                    <button
                      type="button"
                      className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]"
                      data-hs-overlay="#create-purchaseorder"
                    >
                      <Link href="/components/project-management/create-purchaseorder/">
                        <i className="ri-add-line font-semibold align-middle"></i>{" "}
                        Create Purchase Order
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="box-body space-y-3">
                  <div className="overflow-hidden">
                    <div
                      id="reactivity-table"
                      className="ti-custom-table ti-striped-table ti-custom-table-hover"
                    >
                      <ResponsiveDataTable
                        columns={COLUMNS}
                        data={purchaseOrders}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="box">
          <div className="box-body">
            <div className="flex items-center justify-center">
              <h1 className="text-center">No project selected</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
PurchaseOrders.layout = "Contentlayout";

export default PurchaseOrders;
