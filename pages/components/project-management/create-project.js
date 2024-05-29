import CreateUpdateProject from "@/shared/layout-components/forms/create-update-project";

const CreateProject = () => {
  return (
    <>
      <CreateUpdateProject formType="create" />
    </>
  );
};
CreateProject.layout = "Contentlayout";

export default CreateProject;
