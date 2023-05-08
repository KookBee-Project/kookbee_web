import PortfolioSideBar from "../../sidebar/PortfolioSideBar";
import StudyMainForm from "./StudyMainForm";

const StudyMain = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <StudyMainForm />
      </div>
    </div>
  );
};
export default StudyMain;
