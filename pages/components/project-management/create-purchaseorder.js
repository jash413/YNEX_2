import CreateUpdatePurchaseOrder from "@/shared/layout-components/forms/create-update-purchaseorder";

const CreatePurchaseOrder = () => {
  return (
    <>
      <CreateUpdatePurchaseOrder formType="create" />
    </>
  );
};
CreatePurchaseOrder.layout = "Contentlayout";

export default CreatePurchaseOrder;
