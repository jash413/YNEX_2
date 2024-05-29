import React from "react";
import CreateUpdateBid from "@/shared/layout-components/forms/create-update-bid";
import { useRouter } from "next/router";

const EditBid = () => {
  const router = useRouter();
  const { editBid } = router.query;
  return (
    <>
      <CreateUpdateBid formType="update" bidId={editBid} />
    </>
  );
};
EditBid.layout = "Contentlayout";

export default EditBid;
