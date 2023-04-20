import SideBar from "../sidebar/StudentSideBar";
import DayOffHistoryList from "./DayOffHistoryList";

const DayOffHistory = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <SideBar></SideBar>
        <DayOffHistoryList></DayOffHistoryList>
      </div>
    </div>
  );
};
export default DayOffHistory;