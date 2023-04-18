import SideBar from "../sidebar/StudentSideBar";
import HomeworkHistoryList from "./HomeworkHistoryList";

const HomeworkHistory = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <SideBar></SideBar>
        <HomeworkHistoryList></HomeworkHistoryList>
      </div>
    </div>
  );
};
export default HomeworkHistory;
