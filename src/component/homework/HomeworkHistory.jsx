import SideBar from "../sidebar/BootcampSideBar";
import HomeworkHistoryList from "./HomeworkHistoryList";

const HomeworkHistory = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <SideBar></SideBar>
        <HomeworkHistoryList></HomeworkHistoryList>
      </div>
    </div>
  );
};
export default HomeworkHistory;
