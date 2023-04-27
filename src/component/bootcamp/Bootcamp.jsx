import SideBar from "../sidebar/StudentSideBar";
import BootcampList from "./BootcampList";

const BootCamp = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <SideBar />
        <BootcampList />
      </div>
    </div>
  );
};

export default BootCamp;
