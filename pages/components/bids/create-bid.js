import React from "react";
import CreateUpdateBid from "@/shared/layout-components/forms/create-update-bid";

const CreateBid = () => {
  return (
    <>
      <CreateUpdateBid formType="create" />
    </>
  );
};
CreateBid.layout = "Contentlayout";

export default CreateBid;
