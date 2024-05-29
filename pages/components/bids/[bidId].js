import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import network from "@/config";
import BidDetails from "@/shared/layout-components/forms/bid-details";

const BidDetail = () => {
  const router = useRouter();
  const { bidId } = router.query;
  const [bidDetails, setBidDetails] = useState({});

  useEffect(() => {
    if (bidId) {
      const fetchBidDetails = async () => {
        try {
          const response = await axios.get(`${network.serverUrl}api/${bidId}`);
          setBidDetails(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchBidDetails();
    }
  }, [bidId]);

  return (
    <>
      <Seo title={"Bid Details"} />
      <Pageheader
        activepage="Bid Details"
        mainpage="Bids"
        mainpageurl="/components/bids/bids"
        isDisabled={true}
      />
      <BidDetails bidsData={bidDetails} showEditBtn={true} />
    </>
  );
};

BidDetail.layout = "Contentlayout";

export default BidDetail;
