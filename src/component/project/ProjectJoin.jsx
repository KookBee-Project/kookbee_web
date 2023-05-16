import PortfolioSideBar from "../sidebar/PortfolioSideBar";
import ProjectJoinForm from "./ProjectJoinForm";

const ProjectJoin = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <ProjectJoinForm />
      </div>
    </div>
  );
};

export default ProjectJoin;
