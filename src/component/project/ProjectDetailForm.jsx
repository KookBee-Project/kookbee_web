import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  deleteProject,
  getMyProjectDetail,
  setStatusInit,
  startProject,
} from "../../store/project/projectSlice";
import ProjectSubmitForm from "./ProjectSubmitForm";
import Loading from "../../loading/Loading";

const ProjectDetailForm = () => {
  const { userId } = useSelector((state) => state.user.data);
  const { detailData, status, startStatus, deleteStatus } = useSelector(
    (state) => state.project
  );
  const [imgCheck, setImgCheck] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const dataList = [
    { label: "프로젝트명", data: detailData?.projectTitle },
    { label: "팀명", data: detailData?.projectTeamName },
    { label: "팀장", data: detailData?.projectLeaderName },
    { label: "팀원", data: detailData?.userNameList },
  ];

  useEffect(() => {
    dispatch(getMyProjectDetail(projectId));
  }, []);

  const getStatus = (projectStatus) => {
    if (projectStatus === "PROGRESS")
      return {
        status: "진행 중",
        style: "p-1 bg-green-300 rounded-xl font-bold",
      };
    else if (projectStatus === "PENDING")
      return {
        status: "모집 중",
        style: "p-1 bg-yellow-300 rounded-xl font-bold",
      };
    else if (projectStatus === "FINISHED")
      return {
        status: "종료됨",
        style: "p-1 bg-red-300 rounded-xl font-bold",
      };
  };

  const startingProject = () => {
    window.confirm("프로젝트를 시작하시겠습니까?") &&
      dispatch(startProject(projectId));
  };

  const deletingProject = () => {
    window.confirm("정말 프로젝트를 삭제하시겠습니까?") &&
      dispatch(deleteProject(projectId));
  };

  useEffect(() => {
    console.log(detailData);
    if (startStatus === "successed") {
      alert("프로젝트가 시작되었습니다.");
      dispatch(getMyProjectDetail(projectId));
      dispatch(setStatusInit());
    } else if (startStatus === "failed") {
      alert("프로젝트 시작에 실패하였습니다.");
      dispatch(getMyProjectDetail(projectId));
      dispatch(setStatusInit());
    }
  }, [startStatus]);

  useEffect(() => {
    if (deleteStatus === "successed") {
      alert("프로젝트가 삭제되었습니다.");
      dispatch(setStatusInit());
      navigate("/portfolio/project/my");
    } else if (deleteStatus === "failed") {
      alert("프로젝트 삭제에 실패하였습니다.");
      dispatch(getMyProjectDetail(projectId));
      dispatch(setStatusInit());
    }
  }, [deleteStatus]);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      {status === "loading" && <Loading></Loading>}
      {status === "successed" && (
        <div className="flex flex-col items-center w-full h-5/6 mt-10">
          <div className="flex">
            <div className="text-center font-bold text-3xl pr-5">
              {detailData?.projectTitle}
            </div>
            <div className={getStatus(detailData?.projectStatus)?.style}>
              {getStatus(detailData?.projectStatus)?.status}
            </div>
          </div>
          <div className="flex flex-col mt-10 w-5/6">
            <div className="flex w-full">
              <div className="w-1/2">
                <span className="font-bold text-lg">프로젝트 분류{"\t"}</span>
                <span>{detailData?.projectSubject}</span>
              </div>
              <div className="w-1/2 text-end">
                <span className="font-bold text-lg">생성일{"\t"}</span>
                <span>{String(detailData?.createAt).split("T")[0]}</span>
              </div>
            </div>
            {dataList.map((el) => (
              <div key={el.label} className="mt-10">
                <span className="font-bold text-lg">{el.label + "\t"}</span>
                {el.label === "팀원" ? (
                  <span>
                    {el.data
                      ?.filter((el) => el !== detailData.projectLeaderName)
                      .join(" / ")}
                  </span>
                ) : (
                  <span>{el.data}</span>
                )}
              </div>
            ))}
            <div className="flex flex-col mt-10">
              <span className="font-bold text-lg">내용</span>
              <div className="border-2 border-yellow-300 min-h-10">
                {detailData?.projectDescription}
              </div>
            </div>
            {detailData?.projectStatus === "FINISHED" && (
              <div className="flex flex-col mt-10">
                <span className="font-bold text-lg">제출 링크</span>
                <Link to={detailData?.projectOutputLink}>
                  {detailData?.projectOutputLink}
                </Link>
                <span className="font-bold text-lg mt-5">제출 파일</span>
                {imgCheck && (
                  <Link
                    to={
                      "https://storage.googleapis.com/kookbee-test-strorage/" +
                      detailData?.projectOutputFileUUID
                    }
                  >
                    {"https://storage.googleapis.com/kookbee-test-strorage/" +
                      detailData?.projectOutputFileUUID}
                  </Link>
                )}
                {detailData?.projectOutputFileUUID && (
                  <img
                    src={
                      "https://storage.googleapis.com/kookbee-test-strorage/" +
                      detailData?.projectOutputFileUUID
                    }
                    className="border-2 border-yellow-300 rounded-xl whitespace-pre-wrap break-all overflow-auto p-2 w-40 h-40 font-semibold"
                    onError={() => {
                      setImgCheck(true);
                    }}
                    hidden={imgCheck}
                  />
                )}
              </div>
            )}

            {userId == detailData.leaderId && (
              <div className="w-full">
                <div className="flex flex-col mt-10">
                  <span className="font-bold text-lg">초대코드</span>
                  <input
                    type="text"
                    className="w-full text-lg border-2 border-yellow-300 rounded-md text-gray-500"
                    value={detailData.projectCode}
                    disabled
                  />
                </div>
                {editMode ? (
                  <ProjectSubmitForm
                    projectId={projectId}
                    setEditMode={setEditMode}
                    dispatch={dispatch}
                    navigate={navigate}
                  />
                ) : (
                  <>
                    {detailData.projectStatus !== "FINISHED" && (
                      <div className="flex">
                        {detailData.projectStatus === "PENDING" && (
                          <div className="flex w-full justify-center">
                            <button
                              className="px-5 py-3 my-5 bg-green-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-green-200 focus:shadow-none"
                              onClick={startingProject}
                            >
                              프로젝트 시작
                            </button>
                          </div>
                        )}
                        {detailData.projectStatus === "PROGRESS" && (
                          <div className="flex w-full justify-center">
                            <button
                              className="px-5 py-3 my-5 bg-green-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-green-200 focus:shadow-none"
                              onClick={() => {
                                setEditMode(true);
                              }}
                            >
                              프로젝트 제출
                            </button>
                          </div>
                        )}
                        <div className="flex w-full justify-center">
                          <button
                            className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
                            onClick={() => {
                              navigate(`/portfolio/project/edit/${projectId}`);
                            }}
                          >
                            프로젝트 수정
                          </button>
                        </div>
                        <div className="flex w-full justify-center">
                          <button
                            className="px-5 py-3 my-5 bg-red-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-red-200 focus:shadow-none"
                            onClick={deletingProject}
                          >
                            프로젝트 삭제
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
            <div className="flex justify-center">
              <button
                className="px-5 py-3 my-3 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
                onClick={() => {
                  navigate(-1);
                }}
              >
                목록으로
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailForm;
