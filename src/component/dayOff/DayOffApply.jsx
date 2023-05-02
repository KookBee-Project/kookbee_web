import SideBar from "../sidebar/BootcampSideBar";
import DayOffApplyForm from "./DayOffApplyForm";

const DayOffApply = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <SideBar></SideBar>
        <DayOffApplyForm></DayOffApplyForm>
      </div>
    </div>
  );
};
export default DayOffApply;
