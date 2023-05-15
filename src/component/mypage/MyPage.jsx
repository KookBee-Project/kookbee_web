import { Outlet } from "react-router-dom";
import MyPageSideBar from "../sidebar/MyPageSideBar";

const MyPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex h-5/6 justify-center">
        <MyPageSideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MyPage;
