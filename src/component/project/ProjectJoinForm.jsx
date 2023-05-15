import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { joinProject } from "../../store/project/projectSlice";
import Loading from "../../loading/Loading";

const ProjectJoinForm = () => {
  const { userName } = useSelector((state) => state.user.data);
  const { status, error } = useSelector((state) => state.project);
  const [project, setProject] = useState({
    userName: "",
    projectCode: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setProject({ ...project, userName: userName });
  }, [userName]);

  const setInput = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const onSubmit = (e) => {
    console.log(userName);
    console.log(project);
    e.preventDefault();
    dispatch(joinProject(project));
  };

  useEffect(() => {
    if (status === "successed" && project.projectCode != "") {
      alert("프로젝트의 일원이 되셨습니다!");
      navigate("/bootcamp");
    } else if (status === "failed" && project.projectCode != "") alert(error);
  }, [status]);

  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      {status === "loading" && <Loading></Loading>}
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">포로젝트 참가</div>
        <div className="flex flex-col items-center text-center">
          <p className="my-5 font-bold">프로젝트 코드를 입력해주세요!!</p>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="projectCode"
              className="border-2 border-yellow-400 rounded-md w-full p-3 text-xl"
              value={project.projectCode}
              onChange={setInput}
            />
            <button
              className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md
         shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
            >
              프로젝트 참가
            </button>
          </form>
          <div className="text-xl w-5/6">
            프로젝트 팀장에게 받은 초대코드를 입력해주세요!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectJoinForm;
