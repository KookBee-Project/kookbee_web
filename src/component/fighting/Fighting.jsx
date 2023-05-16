import { Outlet } from "react-router-dom";
import CommunitySideBar from "../sidebar/CommunitySideBar";

const Fighting = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <CommunitySideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Fighting;
