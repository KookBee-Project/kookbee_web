import SideBar from "../sidebar/BootcampSideBar";
import DayOffClassHistoryList from "./DayOffClassHistoryList";

const DayOffClassHistory = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <SideBar></SideBar>
        <DayOffClassHistoryList></DayOffClassHistoryList>
      </div>
    </div>
  );
};
export default DayOffClassHistory;
