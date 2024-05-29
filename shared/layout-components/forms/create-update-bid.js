import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { z } from "zod";
const today = new Date();
const isoDate = today.toISOString();
import { FilePond } from "react-filepond";
import network from "@/config";

const formDataSchema = z.object({
  bid_amount_from_sub: z
    .string()
    .nonempty({ message: "Bid Amount From Sub is required" }),
  bid_status: z.string().nonempty({ message: "Bid Status is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  bid_details_from_sub: z
    .string()
    .nonempty({ message: "Bid Details From Sub is required" }),
  bid_outscope: z.string().nonempty({ message: "Bid Outscope is required" }),
  bid_inscope: z.string().nonempty({ message: "Bid Inscope is required" }),
  subcontractor_id: z
    .string()
    .nonempty({ message: "Subcontractor ID is required" }),
  builder_notes: z.string().nonempty({ message: "Builder Notes is required" }),
  bid_payment_terms: z
    .string()
    .nonempty({ message: "Bid Payment Terms is required" }),
});

const CreateUpdateBid = (props) => {
  const formType = props.formType;
  const bidId = props.bidId;
  const [formData, setFormData] = useState({
    selectedProject: "",
    selectedTask: "",
    cost_code_id: "",
    description: "",
    bid_amount: "",
    bid_details: "",
    bid_inscope: "",
    bid_outscope: "",
    bid_payment_terms: "",
    bid_recieved_date: isoDate,
    builder_notes: "",
    bid_warranty: "",
  });
  const [scopeData, setScopeData] = useState({
    bid_inscope: [{ bidDetail: "" }],
    bid_outscope: [{ bidDetail: "" }],
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTaskCostCodes, setSelectedTaskCostCodes] = useState([]);

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  useEffect(() => {
    if (
      scopeData.bid_inscope.length !== 0 &&
      scopeData.bid_outscope.length !== 0
    ) {
      const inScope = scopeData.bid_inscope
        .map((bid) => bid.bidDetail)
        .join(",");
      const outScope = scopeData.bid_outscope
        .map((bid) => bid.bidDetail)
        .join(",");
      setFormData((prevState) => ({
        ...prevState,
        bid_inscope: inScope,
        bid_outscope: outScope,
      }));
    }
  }, [scopeData]);

  useEffect(() => {
    if (bidId) {
      const fetchBidDetails = async () => {
        try {
          const response = await axios.get(`${network.serverUrl}api/${bidId}`);
          setFormData({
            selectedProject: response.data.selectedProject,
            selectedTask: response.data.selectedTask,
            cost_code_id: response.data.cost_code_id,
            description: response.data.description,
            bid_amount: response.data.bid_amount_from_sub,
            bid_details: response.data.bid_details_from_sub,
            bid_inscope: response.data.bid_inscope,
            bid_outscope: response.data.bid_outscope,
            bid_payment_terms: response.data.bid_payment_terms,
            bid_recieved_date: response.data.bid_recieved_date,
            subcontractor_id: response.data.subcontractor_id["id"],
            builder_notes: response.data.builder_notes,
            bid_warranty: response.data.warranty,
          });
          const inScope = response.data.bid_inscope.split(",").map((bid) => ({
            bidDetail: bid,
          }));
          const outScope = response.data.bid_outscope.split(",").map((bid) => ({
            bidDetail: bid,
          }));
          setScopeData({
            bid_inscope: inScope,
            bid_outscope: outScope,
          });
        } catch (error) {
          console.error(error);
        }
      };
      fetchBidDetails();
    }
  }, [bidId]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
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

  const handleBidChange = (e, index, field) => {
    const newBids = [...scopeData[field]];
    newBids[index][e.target.name] = e.target.value;
    setScopeData({ ...scopeData, [field]: newBids });
  };

  const handleAddBid = (field) => {
    setScopeData({
      ...scopeData,
      [field]: [...scopeData[field], { bidDetail: "" }],
    });
  };

  const handleRemoveBid = (index, field) => {
    const newBids = [...scopeData[field]];
    if (newBids.length === 1) {
      return;
    }
    newBids.splice(index, 1);
    setScopeData({ ...scopeData, [field]: newBids });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      formDataSchema.parse(formData);

      setFormData({
        selectedProject: "",
        selectedTask: "",
        cost_code_id: "",
        description: "",
        bid_amount: "",
        bid_details: "",
        bid_inscope: "",
        bid_outscope: "",
        bid_payment_terms: "",
        bid_recieved_date: isoDate,
        builder_notes: "",
        bid_warranty: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [displayedBidAmount, setDisplayedBidAmount] = useState("");

  const handleBidAmountChange = (event) => {
    const { value } = event.target;
    const numericValue = value.replace(/,/g, "");
    if (!isNaN(numericValue)) {
      setFormData({ ...formData, bid_amount: numericValue });
      setDisplayedBidAmount(Intl.NumberFormat().format(numericValue));
    }
  };

  const [files, setFiles] = useState([]);

  return (
    <div>
      <Seo title={`${formType === "update" ? "Update Bid" : "Create Bid"}`} />
      <Pageheader
        activepage={`${formType === "update" ? "Update" : "Create"} Bid`}
        mainpage="Bids"
        mainpageurl="/components/bids/bids"
        loadProjectData={getDataFromLocalStorage}
      />
      <div className="flex justify-between">
        <div className="ml-auto"></div>
      </div>
      <div className="box custom-box">
        <div className="box-header">
          <div className="box-title">Select Your Task And Cost Code</div>
        </div>
        <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4 p-4">
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Select Task/Trade Name</label>
            <Select
              name="task"
              className="js-example-basic-single w-full"
              isDisabled={!selectedProject}
              isSearchable
              menuPlacement="auto"
              classNamePrefix="Select2"
              placeholder="Select Task"
              onChange={(e) => {
                const selectedTask = selectedProject.tasks.find(
                  (task) => task.task_id === e.value
                );
                setFormData((prevState) => ({
                  ...prevState,
                  selectedTask: selectedTask.task_name,
                  selectedCostCode: selectedTask.cost_code_id,
                }));
                setSelectedTaskCostCodes([selectedTask.cost_code_id]);
              }}
              onClick={getDataFromLocalStorage}
              options={
                selectedProject &&
                selectedProject.tasks.map((task) => ({
                  value: task.task_id,
                  label: task.task_name,
                }))
              }
            />
          </div>
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Cost Code</label>
            <Select
              name="cost_code"
              id="cost_code_id"
              isDisabled={selectedTaskCostCodes.length === 0}
              options={selectedTaskCostCodes.map((cost_code) => ({
                value: cost_code,
                label: cost_code,
              }))}
              className="js-example-basic-single w-full"
              isSearchable
              menuPlacement="auto"
              classNamePrefix="Select2"
              placeholder="Select Cost Code"
              onChange={(e) => {
                setFormData((prevState) => ({
                  ...prevState,
                  cost_code_id: e.value,
                }));
              }}
            />
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box-header justify-between">
          <div className="box-title">{`${
            formType === "update" ? "Update Bid" : "Create A New Bid"
          }`}</div>
        </div>
        <div className="box-body">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="bid_amount" className="form-label">
                  Bid Amount
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bid_amount"
                  value={displayedBidAmount}
                  onChange={handleBidAmountChange}
                />
              </div>
              <div className="mb-4"></div>
              <div className="mb-4">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  cols="50"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="builder_notes" className="form-label">
                  Builder Notes
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  cols="50"
                  id="builder_notes"
                  value={formData.builder_notes}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bid_payment_terms" className="form-label">
                  Bid Payment Terms
                </label>
                <textarea
                  className="form-control"
                  id="bid_payment_terms"
                  rows="3"
                  cols="50"
                  value={formData.bid_payment_terms}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bid_amount" className="form-label">
                  Bid Warranty
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  cols="50"
                  id="bid_warranty"
                  value={formData.bid_warranty}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="bid_amount" className="form-label">
                Upload Files
              </label>
              <FilePond
                className="multiple-filepond"
                accepted-file-types={[
                  "application/pdf",
                  "image/png",
                  "image/jpeg",
                  "image/gif",
                ]}
                server="/api"
                allowReorder={true}
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                allowImagePreview={true}
                maxFiles={10}
                name="filepond"
                labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="bid_inscope" className="form-label">
                  Bid Inscope
                </label>
                {scopeData.bid_inscope.map((bid, index) => (
                  <div className="mb-4 flex items-center gap-2" key={index}>
                    <input
                      type="text"
                      className="form-control"
                      name="bidDetail"
                      value={bid.bidDetail}
                      onChange={(e) => handleBidChange(e, index, "bid_inscope")}
                    />
                    {index === scopeData.bid_inscope.length - 1 && (
                      <button
                        type="button"
                        className="ti-btn ti-btn-primary"
                        onClick={() => handleAddBid("bid_inscope")}
                      >
                        <i className="ti ti-plus"></i>
                      </button>
                    )}
                    {scopeData.bid_inscope.length > 1 && (
                      <button
                        type="button"
                        className="ti-btn ti-btn-danger"
                        onClick={() => handleRemoveBid(index, "bid_inscope")}
                      >
                        <i className="ti ti-minus"></i>
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="bid_outscope" className="form-label">
                  Bid Outscope
                </label>
                {scopeData.bid_outscope.map((bid, index) => (
                  <div className="mb-4 flex items-center gap-2" key={index}>
                    <input
                      type="text"
                      className="form-control"
                      name="bidDetail"
                      value={bid.bidDetail}
                      onChange={(e) =>
                        handleBidChange(e, index, "bid_outscope")
                      }
                    />
                    {index === scopeData.bid_outscope.length - 1 && (
                      <button
                        type="button"
                        className="ti-btn ti-btn-primary"
                        onClick={() => handleAddBid("bid_outscope")}
                      >
                        <i className="ti ti-plus"></i>
                      </button>
                    )}
                    {scopeData.bid_outscope.length > 1 && (
                      <button
                        type="button"
                        className="ti-btn ti-btn-danger"
                        onClick={() => handleRemoveBid(index, "bid_outscope")}
                      >
                        <i className="ti ti-minus"></i>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <br></br>
            <button className="ti-btn ti-btn-primary-full" type="submit">
              {formType === "update" ? "Update Bid" : "Create Bid"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
CreateUpdateBid.layout = "Contentlayout";

export default CreateUpdateBid;
