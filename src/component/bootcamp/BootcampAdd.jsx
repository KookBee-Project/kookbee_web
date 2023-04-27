import SideBar from "../sidebar/StudentSideBar";
import BootcampAddForm from "./BootcampAddForm";

const BootcampAdd = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <SideBar />
        <BootcampAddForm />
      </div>
    </div>
  );
};

export default BootcampAdd;
