import { Link } from "react-router-dom";

const PortfolioSideBar = () => {
  const studySide = [
    { value: "나의 스터디", link: "/portfolio/study" },
    { value: "스터디 찾기", link: "/portfolio/study/findstudy" },
    { value: "스터디 신청내역", link: "/portfolio/study/apply" },
  ];
  const projectSide = [
    { value: "부트캠프 별 프로젝트", link: "/portfolio/project" },
    { value: "나의 프로젝트", link: "/portfolio/project/my" },
    { value: "프로젝트 참가", link: "/portfolio/project/join" },
  ];

  return (
    <div className="w-3/12 min-w-20 min-h-40 my-20 mx-10 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center mt-20">
        <p className="font-bold text-3xl mb-5">나의 포트폴리오</p>
        <ul className="list-disc mb-2">
          <p className="text-2xl">수업노트</p>
          <ul className="list-disc mb-2">
            <Link to="/portfolio/note">
              <li className="list-inside mb-3">나의 수업노트</li>
            </Link>
          </ul>
          <div>
            <p className="text-2xl">스터디</p>
            <ul className="list-disc mb-2">
              {studySide?.map((el, idx) => (
                <Link to={el.link} key={idx}>
                  <li className="list-inside mb-3">{el.value}</li>
                </Link>
              ))}
            </ul>
          </div>
          <p className="text-2xl">프로젝트</p>
          <ul className="list-disc mb-2">
            {projectSide?.map((el, idx) => (
              <Link to={el.link} key={idx}>
                <li className="list-inside mb-3">{el.value}</li>
              </Link>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
};
export default PortfolioSideBar;
