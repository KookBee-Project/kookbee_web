import { Outlet } from "react-router-dom";
import BootcampSideBar from "../sidebar/BootcampSideBar";

const QNA = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <BootcampSideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default QNA;
