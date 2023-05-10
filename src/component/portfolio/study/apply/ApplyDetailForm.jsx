import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getStudyApplyList,
  putStudyApply,
} from "../../../../store/portfolio/study/applySlice";

const ApplyDetailForm = () => {
  const { applyList } = useSelector((state) => state.apply);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const param = useParams();

  const [request, setRequest] = useState({
    studyApplyStatus: "",
  });

  const applyId = param.groupStudyApplyId;

  const onClick = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  useEffect(() => {
    dispatch(putStudyApply({ applyId, request }));
    navigate("/portfolio/study/apply");
  }, [request]);

  return (
    <div>
      <div className="table items-center h-5/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          {applyList?.map(
            (el) =>
              el.groupStudyApplyId === Number(param.groupStudyApplyId) && (
                <>
                  <div className="w-96">
                    <b className="flex justify-center text-3xl">
                      {el.groupStudyName}
                    </b>
                    <div className="mt-2 mb-2 flex-col">
                      <div className="flex">
                        <b>신청자</b>
                      </div>
                      <t className="bg-gray-200 mr-2 w-2/12">
                        {el.groupStudyApplicantName}
                      </t>
                      <div className="flex">
                        <b>신청일</b>
                      </div>
                      <t className="bg-gray-200 mr-2 w-2/12">
                        {el.groupStudyApplyCreateAt}
                      </t>
                    </div>
                    <div className="mt-2 mb-2">
                      <b>내용</b>
                      <t className="bg-gray-200 flex w-full h-28 mt-2">
                        {el.groupStudyApplyContents}
                      </t>
                    </div>
                  </div>
                </>
              )
          )}
          <div className="flex justify-center mt-10">
            <button
              className="mr-28 rounded-2xl border-8 bg-sky-400"
              id="studyApplyStatus"
              name="studyApplyStatus"
              value="APPROVAL"
              onClick={onClick}
            >
              승인
            </button>
            <button
              className=" rounded-2xl border-8 bg-sky-400"
              id="studyApplyStatus"
              name="studyApplyStatus"
              value="REJECT"
              onClick={onClick}
            >
              거부
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplyDetailForm;
