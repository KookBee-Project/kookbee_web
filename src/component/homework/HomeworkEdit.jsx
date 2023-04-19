import SideBar from "../sidebar/StudentSideBar";
import HomeworkEditForm from "./HomeworkEditForm";

const HomeworkEdit = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <SideBar></SideBar>
        <HomeworkEditForm></HomeworkEditForm>
      </div>
    </div>
  );
};
export default HomeworkEdit;
