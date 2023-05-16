import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyProjectDetail,
  submitProject,
} from "../../store/project/projectSlice";
import Loading from "../../loading/Loading";

const ProjectSubmitForm = ({ projectId, setEditMode, dispatch, navigate }) => {
  const { createStatus, error, status } = useSelector((state) => state.project);
  const [submit, setSubmit] = useState({
    projectOutputLink: "",
    projectOutputFileUUID: "",
  });

  const setSubmitData = (e) => {
    setSubmit({ ...submit, projectOutputLink: e.target.value });
  };

  const fileChange = async (e) => {
    e.preventDefault();
    const requestFile = new FormData();
    const fileReader = new FileReader();
    const fileValue = e.target.files[0];
    if (fileValue) {
      fileReader.readAsDataURL(fileValue);
    }
    requestFile.append("file", fileValue);
    try {
      const response = await api("POST", "/upload", requestFile);
      setSubmit({ ...submit, projectOutputFileUUID: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(submit);
    if (window.confirm("프로젝트를 제출하시겠습니까?"))
      dispatch(submitProject({ projectId, submit }));
  };

  useEffect(() => {
    if (createStatus === "successed" && submit.projectOutputLink !== "") {
      alert("프로젝트가 제출되었습니다.");
      dispatch(getMyProjectDetail(projectId));
      setEditMode(false);
    } else if (createStatus === "failed" && submit.projectOutputLink !== "")
      alert("프로젝트 제출에 실패했습니다");
  }, [createStatus]);

  return (
    <div>
      <form className="flex flex-col" onSubmit={onSubmit}>
        {status === "loading" && <Loading></Loading>}
        <label htmlFor="projectOutputLink" className="mt-5 font-bold">
          산출물 링크
        </label>
        <input
          type="text"
          id="projectOutputLink"
          name="projectOutputLink"
          className="p-2 border-2 border-yellow-300 rounded-md text-lg"
          value={submit.projectOutputLink}
          onChange={setSubmitData}
          required
        />
        <label htmlFor="projectOutputFileUUID" className="mt-5 font-bold">
          산출물 파일
        </label>
        <input
          type="file"
          id="projectOutputFileUUID"
          name="projectOutputFileUUID"
          className="p-2 border-2 border-yellow-300 rounded-md text-lg"
          onChange={fileChange}
        />
        <div className="flex justify-center mt-5">
          <button className="px-5 py-3 my-3 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none">
            제출하기
          </button>
        </div>
        <div className="flex justify-center mt-5">
          <button
            type="button"
            onClick={() => {
              setEditMode(false);
            }}
            className="px-3 py-2 mb-3 bg-red-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-red-200 focus:shadow-none"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectSubmitForm;
