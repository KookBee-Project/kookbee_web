import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { applyGroupStudy } from "../../../../store/portfolio/study/applySlice";
import Loading from "../../../../loading/Loading";

const StudyApplyForm = () => {
  const { data, status } = useSelector((state) => state.study);
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [request, setRequest] = useState({
    groupStudyApplyContents: "",
  });

  const onChangeHandler = (e) => {
    setRequest({ groupStudyApplyContents: e.target.value });
  };

  const studyId = param.groupStudyId;

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(applyGroupStudy({ studyId, request }));
    navigate("/portfolio/study/findstudy");
  };

  return (
    <div>
      <div className="table items-center h-5/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        {status === "loading" && <Loading></Loading>}
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <b className="text-3xl">가입 신청하기</b>
          <form onSubmit={onSubmit}>
            <div className="w-96">
              {data?.map(
                (el) =>
                  el.groupStudyId === Number(param.groupStudyId) && (
                    <>
                      <div className="mt-4 mb-4">
                        <b className="flex">스터디</b>
                        <t>{el.groupStudyName}</t>
                      </div>
                    </>
                  )
              )}
              <div className="mt-2 mb-2">
                <b>내용</b>
                <input
                  type="text"
                  id="groupStudyApplyContents"
                  name="groupStudyApplyContents"
                  className="bg-gray-200 flex w-full h-28 mt-2"
                  placeholder=" 스터디에 임할 각오를 입력해주세요."
                  onChange={onChangeHandler}
                ></input>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="border-8 border-sky-400 rounded-3xl bg-sky-400 flex justify-center"
              >
                신청하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default StudyApplyForm;
