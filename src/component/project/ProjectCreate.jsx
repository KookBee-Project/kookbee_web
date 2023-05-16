import PortfolioSideBar from "../sidebar/PortfolioSideBar";
import ProjectCreateForm from "./ProjectCreateForm";

const ProjectCreate = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
      <PortfolioSideBar />
        <ProjectCreateForm />
      </div>
    </div>
  );
};

export default ProjectCreate;
