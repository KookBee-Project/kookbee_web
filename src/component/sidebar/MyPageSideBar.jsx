import { Link } from "react-router-dom";

const MyPageSideBar = () => {
  return (
    <div className="w-1/6 min-w-15 min-h-40 my-20 mx-10 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center mt-20">
        <p className="font-bold text-3xl mb-5">마이페이지</p>
        <ul className="list-disc mb-2">
            <li className="mb-2"><Link to={"/my"} className="text-xl">대시보드</Link></li>
            <li className="mb-2"><Link to={"/my/changeinfo"} className="text-xl">정보수정</Link></li>
            <li className="mb-2"><Link to={"/my/skillset"} className="text-xl">스킬셋 현황</Link></li>
        </ul>
      </div>
    </div>
  );
};
export default MyPageSideBar;
