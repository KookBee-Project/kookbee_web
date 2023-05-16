import { Outlet, useNavigate } from "react-router-dom";
import MyPageSideBar from "../sidebar/MyPageSideBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

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
