import PortfolioSideBar from "../sidebar/PortfolioSideBar";
import ProjectBootcampListItem from "./ProjectBootcampListItem";

const ProjectBootcampList = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
      <PortfolioSideBar />
        <ProjectBootcampListItem />
      </div>
    </div>
  );
};

export default ProjectBootcampList;
