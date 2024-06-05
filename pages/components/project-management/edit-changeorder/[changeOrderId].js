import React from "react";
import CreateUpdateChangeOrder from "@/shared/layout-components/forms/create-update-changeorder";
import { useRouter } from 'next/router';


const EditChangeOrder = () => {
    const router = useRouter();
    const { changeOrderId } = router.query;
  return (
    <>
      <CreateUpdateChangeOrder formType="update" changeOrderId={changeOrderId} />
    </>
  );
}

EditChangeOrder.layout = "Contentlayout";

export default EditChangeOrder;