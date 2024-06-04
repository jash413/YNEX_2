import React from "react";
import CreateUpdateProject from "@/shared/layout-components/forms/create-update-project";
import { useRouter } from 'next/router';


const EditProject = () => {
    const router = useRouter();
    const { editProject } = router.query;
  return (
    <>
      <CreateUpdateProject formType="update" projectId={editProject} />
    </>
  );
}

EditProject.layout = "Contentlayout";

export default EditProject;