import PortfolioSideBar from "../../sidebar/PortfolioSideBar";
import StudyRegistForm from "./StudyRegistForm";

const StudyRegist = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <StudyRegistForm />
      </div>
    </div>
  );
};
export default StudyRegist;
