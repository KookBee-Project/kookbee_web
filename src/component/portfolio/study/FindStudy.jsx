import PortfolioSideBar from "../../sidebar/PortfolioSideBar";
import FindStudyForm from "./FindStudyForm";

const FindStudy = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <FindStudyForm />
      </div>
    </div>
  );
};
export default FindStudy;
