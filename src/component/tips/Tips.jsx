import { Outlet } from "react-router-dom";
import CommunitySideBar from "../sidebar/CommunitySideBar";

const Tips = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <CommunitySideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Tips;
