import PortfolioSideBar from "../sidebar/PortfolioSideBar";
import AllProjectListItem from "./AllProjectListItem";

const AllProjectList = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
      <PortfolioSideBar />
        <AllProjectListItem />
      </div>
    </div>
  );
};

export default AllProjectList;
