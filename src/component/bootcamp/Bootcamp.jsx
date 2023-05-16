import BootcampSideBar from "../sidebar/BootcampSideBar";
import SideBar from "../sidebar/BootcampSideBar";
import BootcampList from "./BootcampList";

const BootCamp = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-full h-5/6 justify-center">
        <BootcampSideBar />
        <BootcampList />
      </div>
    </div>
  );
};

export default BootCamp;
