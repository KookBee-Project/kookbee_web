import PortfolioSideBar from "../../sidebar/PortfolioSideBar";
import StudyRegisterForm from "./StudyRegisterForm";

const StudyRegister = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <StudyRegisterForm />
      </div>
    </div>
  );
};
export default StudyRegister;
