import SideBar from "../sidebar/BootcampSideBar";
import DayOffHistoryList from "./DayOffHistoryList";

const DayOffHistory = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <SideBar></SideBar>
        <DayOffHistoryList></DayOffHistoryList>
      </div>
    </div>
  );
};
export default DayOffHistory;
