import PortfolioSideBar from "../../../sidebar/PortfolioSideBar";
import StudentApplyHistoryForm from "./StudyApplyHistoryForm";

const StudyApplyHistory = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <StudentApplyHistoryForm />
      </div>
    </div>
  );
};
export default StudyApplyHistory;
