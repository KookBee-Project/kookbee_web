import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { registerGroupStudyPost } from "../../../../store/portfolio/study/studySlice";
import Loading from "../../../../loading/Loading";

const PostRegisterForm = () => {
  const { data, responseList, status } = useSelector((state) => state.study);

  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [request, setRequest] = useState({
    groupStudyPostTitle: "",
    groupStudyPostContents: "",
  });

  const lectureId = param.lectureId;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerGroupStudyPost({ lectureId, request }));
    navigate(
      `/portfolio/study/${param.groupStudyId}/lecture/${param.lectureId}/detail`
    );
  };

  return (
    <div>
      <div className="table items-center h-5/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        {status === "loading" && <Loading></Loading>}
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <b className="text-3xl">글쓰기</b>
          <form onSubmit={onSubmit}>
            <div>
              <div className="w-96">
                {data?.map(
                  (el) =>
                    el.groupStudyId === Number(param.groupStudyId) && (
                      <>
                        <div className="mt-4 mb-4">
                          <b className="flex">스터디</b>
                          <t className="bg-gray-200">{el.groupStudyName}</t>
                        </div>
                      </>
                    )
                )}
                {responseList?.map(
                  (el) =>
                    el.groupStudyLectureId === Number(param.lectureId) && (
                      <div className="mt-4 mb-4">
                        <b className="flex">회차</b>
                        <div className="flex w-full">
                          <t className="mr-5 bg-gray-200 w-1/5 text-center">
                            {el.groupStudyLectureIteration}
                          </t>
                          <t className="mr-5 bg-gray-200 w-4/5 text-center">
                            {el.groupStudyLectureTitle}
                          </t>
                        </div>
                      </div>
                    )
                )}

                <div className="mt-2 mb-2">
                  <b className="mr-2">제목</b>
                  <input
                    type="text"
                    id="groupStudyPostTitle"
                    name="groupStudyPostTitle"
                    onChange={onChangeHandler}
                    className="bg-gray-200 w-10/12"
                    placeholder=" 제목을 입력하세요"
                  ></input>
                </div>
              </div>
              <div className="mt-2 mb-2">
                <b>내용</b>
                <input
                  type="text"
                  id="groupStudyPostContents"
                  name="groupStudyPostContents"
                  className="bg-gray-200 flex w-full h-28 mt-2"
                  onChange={onChangeHandler}
                ></input>
              </div>
            </div>
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
export default PostRegisterForm;
