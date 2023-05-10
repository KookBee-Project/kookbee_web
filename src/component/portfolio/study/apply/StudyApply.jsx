import PortfolioSideBar from "../../../sidebar/PortfolioSideBar";
import StudyApplyForm from "./StudyApplyForm";

const StudyApply = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <StudyApplyForm />
      </div>
    </div>
  );
};
export default StudyApply;
