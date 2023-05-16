import { Outlet } from "react-router-dom";
import BootcampSideBar from "../sidebar/BootcampSideBar";
import CommunitySideBar from "../sidebar/CommunitySideBar";

const Error = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <CommunitySideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Error;
