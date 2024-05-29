import React from "react";
import Link from "next/link";

const BidDetails = (props) => {
  const bidsData = props.bidsData;
  return (
    <div className="p-4 box">
      <div className="flex justify-between mb-8">
        <div>
          <h6 className="text-xl font-bold text-gray-800">BID ESTIMATE</h6>
        </div>
        {props.showEditBtn && (
          <div className="btn-list">
            <button
              aria-label="button"
              type="button"
              className="ti-btn bg-success !py-1 !px-2 !font-medium text-white !text-[0.75rem] me-0"
            >
              <Link href={`/components/bids/editBid/${bidsData.bid_id}`}>
                <i className="ri-edit-line me-1 align-middle"></i>Edit Bid
              </Link>
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h6 className="text-md font-bold mb-2 text-gray-800">
            SUBCONTRACTOR DETAILS
          </h6>
          <p className="text-gray-600">
            {bidsData.subcontractor_id && bidsData.subcontractor_id["Name"]}
          </p>
          <p className="text-gray-600">123 Main Street</p>
          <p className="text-gray-600">Suite 456</p>
          <p className="text-gray-600">Hamilton, OH 44416</p>
          <p className="text-gray-600">(321) 456-7890</p>
          <p className="text-gray-600">Email Address</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h6 className="text-md font-bold mb-2 text-gray-800">
            PROJECT DETAILS
          </h6>
          <p className="text-gray-600">123 Main Street</p>
          <p className="text-gray-600">Suite 456</p>
          <p className="text-gray-600">Hamilton, OH 44416</p>
          <p className="text-gray-600">ESTIMATE DATE</p>
          <p className="text-gray-600">WORK START</p>
          <p className="text-gray-600">WORK END</p>
          <p className="text-gray-600">ESTIMATE ID</p>
          <p className="text-gray-600">CUSTOMER ID</p>
        </div>
      </div>

      <div className="mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 font-bold text-gray-800 border-r border-gray-400">
                TASK NAME
              </th>
              <th className="px-4 py-2 font-bold text-gray-800 border-r border-gray-400">
                COST CODE
              </th>
              <th className="px-4 py-2 font-bold text-gray-800 border-r border-gray-400">
                DESCRIPTION
              </th>
              <th className="px-4 py-2 font-bold text-gray-800">BID AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-2 border border-gray-300">
                {bidsData.task_name}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {bidsData.cost_code_id}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {bidsData.description}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                ${bidsData.bid_amount_from_sub}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 font-bold text-gray-800 border-r border-gray-400">INSCOPE</th>
              <th className="px-4 py-2 font-bold text-gray-800">OUTSCOPE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-2 border">{bidsData.bid_inscope}</td>
              <td className="px-4 py-2 border">{bidsData.bid_outscope}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 font-bold text-gray-800">
                PAYMENT TERMS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-2 border">{bidsData.bid_payment_terms}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-8 bg-white p-4 rounded-md shadow-md">
        <div className="mb-4">
          <p className="font-bold text-gray-700 mb-2">
            TOTAL AMOUNT: ${bidsData?.bid_amount_from_sub?.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-gray-700">
            AUTHORIZED SIGNATURE:{" "}
            {bidsData.subcontractor_id && bidsData.subcontractor_id["Name"]}
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-md shadow-md">
        <p className="text-lg font-bold text-gray-800">THANK YOU</p>
        <p className="text-gray-600">
          For questions concerning this estimate, please contact
        </p>
        <p className="text-gray-600">
          {bidsData.subcontractor_id && bidsData.subcontractor_id["Name"]}
        </p>
        <p className="text-gray-600">(321) 456-7890</p>
        <p className="text-gray-600">Email Address</p>
        <p className="text-gray-600">www.yourwebaddress.com</p>
      </div>
    </div>
  );
};

export default BidDetails;
