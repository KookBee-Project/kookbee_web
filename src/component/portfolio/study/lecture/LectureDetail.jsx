import PortfolioSideBar from "../../../sidebar/PortfolioSideBar";
import LectureDetailForm from "./LectureDetailForm";

const LectureDetail = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <LectureDetailForm />
      </div>
    </div>
  );
};
export default LectureDetail;
