import BootcampSideBar from "../sidebar/BootcampSideBar";
import EatingTogetherPostDetailForm from "./EatingTogetherPostDetailForm";

const EatingTogetherPostDetail = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <BootcampSideBar />
        <EatingTogetherPostDetailForm />
      </div>
    </div>
  );
};
export default EatingTogetherPostDetail;
