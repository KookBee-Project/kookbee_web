import SideBar from "../sidebar/BootcampSideBar";
import HomeworkEditForm from "./HomeworkEditForm";

const HomeworkEdit = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <SideBar></SideBar>
        <HomeworkEditForm></HomeworkEditForm>
      </div>
    </div>
  );
};
export default HomeworkEdit;
