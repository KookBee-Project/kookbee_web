import PortfolioSideBar from "../../../sidebar/PortfolioSideBar";
import LectureRegisterForm from "./LectureRegisterForm";

const LectureRegister = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <LectureRegisterForm />
      </div>
    </div>
  );
};
export default LectureRegister;
