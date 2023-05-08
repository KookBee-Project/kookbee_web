import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const ProjectDetailForm = () => {
  const projectDetail = {
    id: 1,
    projectTitle: "한솥 점심메뉴 추천 써-비스",
    projectSubject: "최종 프로젝트",
    projectTeamName: "한솥은 신이야",
    projectLeaderName: "정유철",
    projectMemberName: ["김진우", "김한휘", "박성훈"],
    projectEndDate: "2023-05-17",
    projectDescription:
      "굶어가는 어린 양들을 위한 가성비 최고 한솥도시락 점심메뉴 추천^^^@@@@@@@@@@!!",
    projectOutPutFile: "1a534f3b-ea9a-4649-964e-08febcb17e90",
  };
  const [imgCheck, setImgCheck] = useState(false);

  const navigate = useNavigate();

  const dataList = [
    { label: "프로젝트명", data: projectDetail?.projectTitle },
    { label: "팀명", data: projectDetail?.projectTeamName },
    { label: "팀장", data: projectDetail?.projectLeaderName },
    { label: "팀원", data: projectDetail?.projectMemberName },
  ];

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">
          {projectDetail?.projectTitle}
        </div>
        <div className="flex flex-col mt-10 w-5/6">
          <div className="flex w-full">
            <div className="w-1/2">
              <span className="font-bold text-lg">프로젝트 분류{"\t"}</span>
              <span>{projectDetail?.projectSubject}</span>
            </div>
            <div className="w-1/2 text-end">
              <span className="font-bold text-lg">제출일{"\t"}</span>
              <span>{projectDetail?.projectEndDate}</span>
            </div>
          </div>
          {dataList.map((el) => (
            <div key={el.label} className="mt-10">
              <span className="font-bold text-lg">{el.label + "\t"}</span>
              {el.label === "팀원" ? (
                <span>{el.data.join(" / ")}</span>
              ) : (
                <span>{el.data}</span>
              )}
            </div>
          ))}
          <div className="flex flex-col mt-10">
            <span className="font-bold text-lg">내용</span>
            <div className="border bg-yellow-200 min-h-10">
              {projectDetail?.projectDescription}
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <span className="font-bold text-lg">첨부자료</span>
            {imgCheck && (
              <Link
                to={
                  "https://storage.googleapis.com/kookbee-test-strorage/" +
                  projectDetail?.projectOutPutFile
                }
              >
                {"https://storage.googleapis.com/kookbee-test-strorage/" +
                  projectDetail?.projectOutPutFile}
              </Link>
            )}
            {projectDetail?.projectOutPutFile && (
              <img
                src={
                  "https://storage.googleapis.com/kookbee-test-strorage/" +
                  projectDetail?.projectOutPutFile
                }
                className="border-2 border-yellow-300 rounded-xl whitespace-pre-wrap break-all overflow-auto p-2 w-40 h-40 font-semibold"
                onError={() => {
                  setImgCheck(true);
                }}
                hidden={imgCheck}
              />
            )}
          </div>
          <button
            className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
            onClick={() => {
              navigate(`/portfolio/project`);
            }}
          >
            목록으로
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailForm;
