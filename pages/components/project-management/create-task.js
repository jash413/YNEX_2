import React from "react";
import CreateUpdateTask from "@/shared/layout-components/forms/create-update-task";

const CreateTask = () => {
  return (
    <>
      <CreateUpdateTask formType="create" />
    </>
  );
};
CreateTask.layout = "Contentlayout";

export default CreateTask;
