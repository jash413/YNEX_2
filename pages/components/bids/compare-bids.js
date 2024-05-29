import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const CompareBids = () => {
  const [compareBids, setCompareBids] = useState([]);
  const [selectedTask, setSelectedTask] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const addToCompareBidValue = JSON.parse(
      localStorage.getItem("addToCompareBid")
    );
    if (addToCompareBidValue !== null && addToCompareBidValue.length > 0) {
      setSelectedTask(addToCompareBidValue[0].task_name);
      setCompareBids(JSON.parse(localStorage.getItem("addToCompareBid")));
    }
  }, []);

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
      <Seo title={"Compare Bids"} />
      <Pageheader
        activepage="Compare Bids"
        mainpage="Bids"
        mainpageurl="/components/bids/bids"
        loadProjectData={getDataFromLocalStorage}
        isDisabled={true}
      />
      <div className="box">
        <div className="box-body">
          <h1 className="box-title font-semibold !mb-1 !text-[1rem]">
            {" "}
            Project/Job Name :{" "}
            {compareBids.length > 0 && compareBids[0].project_name}
          </h1>
          <h1 className="box-title font-semibold !mb-1 !text-[1rem]">
            Task/Trade Name : {selectedTask}
          </h1>
        </div>
      </div>
      <div className="ynex-kanban-board text-defaulttextcolor dark:text-defaulttextcolor/70 text-defaultsize">
        {compareBids.length > 0 &&
          compareBids.map((bid) => (
            <div className="kanban-tasks-type new">
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <span className="block font-semibold text-[.9375rem]">
                    {selectedTask}
                  </span>
                </div>
              </div>
              <div className="kanban-tasks " id="new-tasks">
                <PerfectScrollbar style={{ height: "560px" }}>
                  <div className="firstdrag" data-view-btn="new-tasks">
                    <div className="box kanban-tasks new">
                      <div className="box-body !p-0">
                        <div className="p-4 kanban-board-head">
                          <div className="flex justify-between mb-1 text-[.75rem] font-semibold">
                            <div className="inline-flex">
                              <h6 className="mb-1 text-[.9375rem]">
                                {bid.task_name}
                              </h6>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="task-badges">
                              <span className="badge bg-light text-default">
                                {bid.bid_id}
                              </span>
                            </div>
                          </div>
                          <div className="kanban-content !mt-1">
                            <h6 className="mb-1 text-[.9375rem]">
                              <span className="font-semibold">
                                Subcontractor:
                              </span>{" "}
                              {bid.subcontractor_id["Name"]}
                            </h6>
                            <h6 className="mb-1 text-[.9375rem]">
                              <span className="font-semibold">
                                Price Quoted:
                              </span>{" "}
                              ${bid.bid_amount_from_sub}
                            </h6>
                            <h6 className="mb-1 text-[.9375rem]">
                              <span className="font-semibold">In Scope:</span>{" "}
                              {bid.bid_inscope}
                            </h6>
                            <h6 className="mb-1 text-[.9375rem]">
                              <span className="font-semibold">
                                Out of Scope:
                              </span>{" "}
                              {bid.bid_outscope}
                            </h6>
                            <h6 className="mb-1 text-[.9375rem]">
                              <span className="font-semibold">
                                Payment Terms:
                              </span>{" "}
                              {bid.bid_payment_terms}
                            </h6>
                            <div id="stars-unlimited">
                              <Stack
                                spacing={1}
                                className="rating-stars block my-rating-7"
                              >
                                <Rating
                                  name="half-rating-read"
                                  value={bid.subcontractor_id["Rating"].length}
                                  max={5}
                                  size="medium"
                                  readOnly
                                />
                              </Stack>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 border-t dark:border-defaultborder/10 border-dashed">
                          <div className="hs-dropdown ti-dropdown">
                            <Link
                              href="#!"
                              className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                              aria-expanded="false"
                            >
                              Actions
                              <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                            </Link>
                            <ul
                              className="hs-dropdown-menu ti-dropdown-menu !-mt-2 hidden"
                              role="menu"
                            >
                              <li>
                                <Link
                                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                  href={`/components/bids/${bid.bid_id}`}
                                >
                                  View Bid
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                  href={`/components/bids/${bid.bid_id}`}
                                >
                                  Accept Bid
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                  href={`/components/bids/${bid.bid_id}`}
                                >
                                  Decline bid
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                  href={`/components/bids/${bid.bid_id}`}
                                >
                                  Ask Question
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                  href={`/components/bids/${bid.bid_id}`}
                                >
                                  Send Reminder
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
CompareBids.layout = "Contentlayout";

export default CompareBids;
