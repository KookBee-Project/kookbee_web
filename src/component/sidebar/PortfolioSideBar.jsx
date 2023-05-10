import { Link } from "react-router-dom";

const PortfolioSideBar = () => {
  return (
    <div className="w-3/12 min-w-20 min-h-40 my-20 mx-10 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center mt-20">
        <p className="font-bold text-3xl mb-5">나의 포트폴리오</p>
        <ul className="list-disc mb-2">
          <Link className="text-2xl">공부노트</Link>
          <div>
            <Link className="text-2xl">스터디</Link>
            <div className="flex-col">
              <Link to={"/portfolio/study"} className="flex text-lg">
                <t className="text-xs mt-1.5 mr-1">●</t> 나의 스터디
              </Link>
              <Link to={"/portfolio/study/findstudy"} className="flex text-lg">
                <t className="text-xs mt-1.5 mr-1">●</t> 스터디 찾기
              </Link>
              <Link to={"/portfolio/study/apply"} className="flex text-lg">
                <t className="text-xs mt-1.5 mr-1">●</t> 스터디 신청내역
              </Link>
            </div>
          </div>
          <Link className="text-2xl">프로젝트</Link>
        </ul>
      </div>
    </div>
  );
};
export default PortfolioSideBar;
