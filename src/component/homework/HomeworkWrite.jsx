import SideBar from "../sidebar/BootcampSideBar";
import HomeworkWriteForm from "./HomeworkWriteForm";

const HomeworkWrite = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <SideBar></SideBar>
        <HomeworkWriteForm></HomeworkWriteForm>
      </div>
    </div>
  );
};
export default HomeworkWrite;
