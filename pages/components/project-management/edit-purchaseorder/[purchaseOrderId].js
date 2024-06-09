import React from "react";
import CreateUpdatePurchaseOrder from "@/shared/layout-components/forms/create-update-purchaseorder";
import { useRouter } from 'next/router';


const EditPurchaseOrder = () => {
    const router = useRouter();
    const { purchaseOrderId } = router.query;
  return (
    <>
      <CreateUpdatePurchaseOrder formType="update" purchaseOrderId={purchaseOrderId} />
    </>
  );
}

EditPurchaseOrder.layout = "Contentlayout";

export default EditPurchaseOrder;