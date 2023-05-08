import { async } from "q";
import { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const ProjectCreateForm = () => {
  const userName = useSelector((state) => state.user.data.name);
  const { bootcampId } = useParams();
  const [request, setRequest] = useState({
    projectTitle: "",
    projectTeamName: "",
    projectSubject: "",
    projectDescription: "",
    bootcampId: bootcampId,
    userName: userName,
  });

  const subjectList = ["미니프로젝트", "최종프로젝트"];

  const setInput = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (request.projectSubject === "") alert("프로젝트 분류를 선택해주세요.");
    else console.log(request);
  };

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">프로젝트 생성</div>
        <form onSubmit={onSubmit} className="flex flex-col w-full items-center">
          <div className="flex flex-col w-5/6">
            <label htmlFor="projectSubject" className="font-bold mt-10">
              프로젝트 분류
            </label>
            <select
              id="projectSubject"
              onChange={setInput}
              name="projectSubject"
              className="w-2/5 text-center border-2 border-yellow-300 rounded-md p-1"
            >
              <option value="">-------선택해주세요-------</option>
              {subjectList.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </select>
            <label htmlFor="projectTitle" className="font-bold mt-10">
              프로젝트명
            </label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              value={request.projectTitle}
              className="border-2 border-yellow-300 p-1 rounded-lg text-xl"
              onChange={setInput}
              required
            />
            <label className="font-bold mt-10">팀/팀원 초대</label>
            <label htmlFor="projectTeamName" className="mt-5">
              팀명
            </label>
            <input
              type="text"
              id="projectTeamName"
              name="projectTeamName"
              value={request.projectTeamName}
              className="w-3/5 border-2 border-yellow-300 p-1 rounded-lg text-xl"
              onChange={setInput}
              required
            />
            <label htmlFor="projectTeamName" className="mt-5">
              팀장
            </label>
            <input
              type="text"
              id="projectTeamName"
              name="projectTeamName"
              value={userName}
              className="w-3/5 border-2 border-yellow-300 p-1 rounded-lg text-xl"
              onChange={setInput}
              disabled
            />
            <label htmlFor="projectDescription" className="font-bold mt-10">
              프로젝트 설명
            </label>
            <textarea
              name="projectDescription"
              id="projectDescription"
              value={request.projectDescription}
              onChange={setInput}
              className="resize-none border-2 border-yellow-300 p-1 rounded-lg text-xl"
              cols="20"
              rows="10"
              required
            ></textarea>
          </div>
          <button className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none">
            제출하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectCreateForm;
