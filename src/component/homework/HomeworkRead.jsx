import SideBar from "../sidebar/BootcampSideBar";
import HomeworkEditForm from "./HomeworkEditForm";
import HomeworkReadForm from "./HomeworkReadForm";

const HomeworkRead = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <SideBar></SideBar>
        <HomeworkReadForm></HomeworkReadForm>
      </div>
    </div>
  );
};
export default HomeworkRead;
