import PortfolioSideBar from "../sidebar/PortfolioSideBar";
import ProjectDetailForm from "./ProjectDetailForm";

const ProjectDetail = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
      <PortfolioSideBar />
        <ProjectDetailForm />
      </div>
    </div>
  );
};

export default ProjectDetail;
