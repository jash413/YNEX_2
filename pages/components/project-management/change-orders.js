import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { useEffect, useState } from "react";
import { ResponsiveDataTable } from "@/shared/data/tables/datatabledata";
import dynamic from "next/dynamic";
import React from "react";
import { Cell } from "gridjs";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const ChangeOrders = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [changeOrders, setChangeOrders] = useState([]);
  const [completedChangeOrders, setCompletedChangeOrders] = useState(0);
  const [pendingChangeOrders, setPendingChangeOrders] = useState(0);
  const [inProgressChangeOrders, setInProgressChangeOrders] = useState(0);
  const COLUMNS = [
    {
      Header: "Active",
      accessor: "active",
    },
    {
      Header: "Project ID",
      accessor: "project_id",
    },
    {
      Header: "Creator ID",
      accessor: "creator_id",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Notes",
      accessor: "notes",
      //show as bullets
      Cell: ({ value }) => (
        <ol>
          {value.map((note) => (
            <li>{note}</li>
          ))}
        </ol>
      ),
    },
    {
      Header: "Increase Budget",
      accessor: "increaase_budget",
    },
    {
      Header: "Payment Terms",
      accessor: "payment_terms",
    },
    {
      Header: "Reviewed By",
      accessor: "reviewed_by",
    },
    {
      Header: "Approved By",
      accessor: "approved_by",
    },
    {
      Header: "Document URLs",
      accessor: "document_urls",
      Cell: ({ value }) => value.join(", "), // Optional cell formatter to join URLs array
    },
  ];

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
  const getChangeOrders = () => {
    if (
      localStorage.getItem("purchaseOrders") !== null &&
      localStorage.getItem("purchaseOrders") !== "undefined"
    ) {
      const changeOrders = JSON.parse(localStorage.getItem("purchaseOrders"));
      setChangeOrders(changeOrders);
    }
  };

  useEffect(() => {
    getUserDataFromLocalStorage();
    getProjectDataFromLocalStorage();
    getChangeOrders();
  }, []);

  return (
    <div>
      <Seo title={"Change Orders"} />
      <Pageheader
        activepage="Change Orders"
        mainpage="Orders"
        mainpageurl="/components/project-management/change-orders"
        loadProjectData={getProjectDataFromLocalStorage}
        loadUserData={getUserDataFromLocalStorage}
      />
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
                <h6 className="mb-1 text-[0.75rem]">Completed ChangeOrders</h6>
                <div>
                  <h4 className="text-[1.125rem] font-semibold mb-1">
                    <span className="count-up" data-count="319">
                      {completedChangeOrders}
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
                <h6 className="mb-1 text-[0.75rem]">Pending ChangeOrders</h6>
                <div>
                  <h4 className="text-[1.125rem] font-semibold mb-1">
                    <span className="count-up" data-count="81">
                      {pendingChangeOrders}
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
                <h6 className="mb-1 text-[0.75rem]">Inprogress ChangeOrders</h6>
                <div>
                  <h4 className="text-[1.125rem] font-semibold mb-1">
                    <span className="count-up" data-count="32">
                      {inProgressChangeOrders}
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
              <h5 className="box-title">ChangeOrders Table</h5>
            </div>
            <div className="box-body space-y-3">
              <div className="overflow-hidden">
                <div
                  id="reactivity-table"
                  className="ti-custom-table ti-striped-table ti-custom-table-hover"
                >
                  <ResponsiveDataTable columns={COLUMNS} data={changeOrders} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ChangeOrders.layout = "Contentlayout";

export default ChangeOrders;
