import PortfolioSideBar from "../../../sidebar/PortfolioSideBar";
import ApplyDetailForm from "./ApplyDetailForm";

const ApplyDetail = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <ApplyDetailForm />
      </div>
    </div>
  );
};
export default ApplyDetail;
