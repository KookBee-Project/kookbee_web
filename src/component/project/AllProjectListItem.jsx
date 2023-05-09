import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getProjectList } from "../../store/project/projectSlice";

const AllProjectListItem = () => {
  const { data, status } = useSelector((state) => state.project);
  const { bootcampId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getStatus = (projectStatus) => {
    if (projectStatus === "PROGRESS")
      return {
        status: "진행 중",
        style: "p-1 bg-green-300 rounded-xl",
      };
    else if (projectStatus === "PENDING")
      return {
        status: "모집 중",
        style: "p-1 bg-yellow-300 rounded-xl",
      };
    else if (projectStatus === "FINISHED")
      return {
        status: "종료됨",
        style: "p-1 bg-red-300 rounded-xl",
      };
  };

  useEffect(() => {
    dispatch(getProjectList(bootcampId));
  }, []);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      {status === "successed" && (
        <div className="flex flex-col items-center w-full h-5/6 mt-10">
          <div className="text-center font-bold text-3xl">프로젝트</div>
          {data.length === 0 ? (
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
                {data?.map((el) => (
                  <tr key={el.id}>
                    <td
                      className="p-1 hover:cursor-pointer"
                      onClick={() =>
                        navigate(`/portfolio/project/detail/${el.id}`)
                      }
                    >
                      {el.projectTitle}
                    </td>
                    <td className="p-1">{el.projectSubject}</td>
                    <td className="p-1">{el.projectTeamName}</td>
                    <td className="p-1">
                      {el.projectLeaderName}/{el.countUsers}
                    </td>
                    <td className="p-1">{String(el.createAt).split("T")[0]}</td>
                    <td className={getStatus(el.projectStatus)?.style}>
                      {getStatus(el.projectStatus)?.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="flex w-5/6 justify-center">
            <button
              className="px-5 py-3 my-5 bg-green-300 border rounded-xl text-xl font-bold shadow-md
                 shadow-gray-400 hover:bg-green-200 focus:shadow-none"
              onClick={() => {
                navigate("/portfolio/project/join");
              }}
            >
              프로젝트 참가
            </button>
            <button
              className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md
                 shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
              onClick={() => {
                navigate(`/portfolio/project/create/${bootcampId}`);
              }}
            >
              프로젝트 만들기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProjectListItem;
