import SideBar from "../sidebar/StudentSideBar";
import HomeworkWriteForm from "./HomeworkWriteForm";


const HomeworkWrite = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <SideBar></SideBar>
        <HomeworkWriteForm></HomeworkWriteForm>
      </div>
    </div>
  );
};
export default HomeworkWrite;
