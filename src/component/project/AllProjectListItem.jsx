import { useNavigate } from "react-router";

const AllProjectListItem = () => {
  const projectList = [
    {
      id: 1,
      projectTitle: "한솥 점심메뉴 추천...",
      projectSubject: "최종 프로젝트",
      projectTeamName: "한솥은 신이야",
      projectLeaderName: "정유철",
      projectMemberCount: 4,
      projectEndDate: "2023-05-17",
    },
    {
      id: 3,
      projectTitle: "롯데리아 키오스크",
      projectSubject: "미니 프로젝트",
      projectTeamName: "KFC",
      projectLeaderName: "정유철",
      projectMemberCount: 2,
      projectEndDate: "2023-03-21",
    },
  ];
  const navigate = useNavigate();

  const getStatus = (endDate) => {
    // 현재 날짜가 endDate보다 크면 종료
    return {
      status: "진행 중",
      style: "p-1 bg-green-300 rounded-xl",
    };
  };

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">프로젝트</div>
        {projectList.length === 0 ? (
          "아직 프로젝트가 없네요..."
        ) : (
          <table className="my-10">
            <thead className="font-bold text-center">
              <tr>
                <td>프로젝트명</td>
                <td>분류</td>
                <td>팀명</td>
                <td>팀장/팀원 수</td>
                <td>제출일</td>
                <td>상태</td>
              </tr>
            </thead>
            <tbody className="text-center border-2 border-black ">
              {projectList?.map((el) => (
                <tr key={el.id}>
                  <td
                    className="p-1 hover:cursor-pointer"
                    onClick={() => navigate(`/portfolio/project/detail/${el.id}`)}
                  >
                    {el.projectTitle}
                  </td>
                  <td className="p-1">{el.projectSubject}</td>
                  <td className="p-1">{el.projectTeamName}</td>
                  <td className="p-1">
                    {el.projectLeaderName}/{el.projectMemberCount}
                  </td>
                  <td className="p-1">{el.projectEndDate}</td>
                  <td className={getStatus(el.projectEndDate).style}>
                    {getStatus(el.projectEndDate).status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllProjectListItem;
