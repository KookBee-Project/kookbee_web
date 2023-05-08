import PortfolioSideBar from "../../sidebar/PortfolioSideBar";
import StudyDetailForm from "./StudyDetailForm";

const StudyDetail = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <StudyDetailForm />
      </div>
    </div>
  );
};
export default StudyDetail;
