import PortfolioSideBar from "../sidebar/PortfolioSideBar";
import ProjectEditForm from "./ProjectEditForm";

const ProjectEdit = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
      <PortfolioSideBar />
        <ProjectEditForm />
      </div>
    </div>
  );
};
export default ProjectEdit;
