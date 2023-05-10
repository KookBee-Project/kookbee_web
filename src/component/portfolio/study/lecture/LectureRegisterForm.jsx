import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getStudyAndLectureList,
  lectureRegister,
} from "../../../../store/portfolio/study/studySlice";

const LectureRegisterForm = () => {
  const { data, responseList } = useSelector((state) => state.study);

  const param = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getStudyAndLectureList(param.groupStudyId));
    console.log(responseList.length + 1);
  }, []);

  const [request, setRequest] = useState({
    groupStudyLectureIteration: responseList.length + 1,
    groupStudyLectureTitle: "",
    groupStudyLectureContents: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(lectureRegister({ groupStudyId: param.groupStudyId, request }));
    navigate(`/portfolio/study/studydetail/${param.groupStudyId}`);
  };

  return (
    <div>
      <div className="table items-center h-5/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <b className="text-3xl">회차 등록하기</b>
          <form onSubmit={onSubmit}>
            {data?.map(
              (el) =>
                el.groupStudyId === Number(param.groupStudyId) && (
                  <>
                    <div className="w-96">
                      <div className="mt-4 mb-4">
                        <b className="flex">스터디</b>
                        <t>{el.groupStudyName}</t>
                      </div>
                      <div className="mt-2 mb-2">
                        <div className="flex">
                          <label for="groupStudyLectureTitle">회차</label>
                        </div>
                        <div>
                          <input
                            type="text"
                            id="groupStudyLectureIteration"
                            name="groupStudyLectureIteration"
                            className="bg-gray-200 mr-2 w-2/12"
                            placeholder={responseList.length + 1}
                            value={responseList.length + 1}
                            readOnly
                          ></input>
                          <input
                            type="text"
                            id="groupStudyLectureTitle"
                            name="groupStudyLectureTitle"
                            onChange={onChangeHandler}
                            className="bg-gray-200 w-9/12"
                            placeholder="제목을 입력하세요"
                          ></input>
                        </div>
                      </div>
                      <div className="mt-2 mb-2">
                        <label for="groupStudyLectureContents">내용</label>
                        <input
                          type="text"
                          id="groupStudyLectureContents"
                          name="groupStudyLectureContents"
                          className="bg-gray-200 flex w-full h-28 mt-2"
                          onChange={onChangeHandler}
                        ></input>
                      </div>
                    </div>
                  </>
                )
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                className="border-8 border-sky-400 rounded-3xl bg-sky-400 flex justify-center"
              >
                등록하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LectureRegisterForm;
