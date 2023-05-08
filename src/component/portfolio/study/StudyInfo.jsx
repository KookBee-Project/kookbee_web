import PortfolioSideBar from "../../sidebar/PortfolioSideBar";
import StudyInfoForm from "./StudyInfoForm";

const StudyInfo = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <StudyInfoForm />
      </div>
    </div>
  );
};
export default StudyInfo;
