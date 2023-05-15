import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudyApplyList,
  getRequestApplyList,
} from "../../../../store/portfolio/study/applySlice";
import { Link } from "react-router-dom";
import Loading from "../../../../loading/Loading";

const StudentApplyHistoryForm = () => {
  const { applyList, requestApplyList, status } = useSelector(
    (state) => state.apply
  );

  const dispatch = useDispatch();

  const [page, setPage] = useState(true);

  useEffect(() => {
    if (page === "true") {
      dispatch(getStudyApplyList());
    } else if (page === "false") {
      dispatch(getRequestApplyList());
    }
  }, [page]);

  const onClick = (e) => {
    setPage(e.target.value);
  };

  function statusView(status) {
    if (status === "PENDING") {
      return (
        <td className="border-8 text-white rounded-3xl bg-sky-400">대기중</td>
      );
    }
    if (status === "APPROVAL") {
      return (
        <td className="border-8 text-white rounded-3xl bg-sky-400">승인</td>
      );
    }
    if (status === "REJECT") {
      return (
        <td className="border-8 text-white rounded-3xl bg-sky-400">거절</td>
      );
    }
  }

  console.log(applyList);
  return (
    <div>
      <div className="table items-center h-2/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        {status === "loading" && <Loading></Loading>}
        <div className="flex justify-center m-10">
          <b className="text-3xl">스터디 신청내역</b>
        </div>
        <div className="flex justify-center mb-5">
          <button
            value={true}
            onClick={onClick}
            className="border-8 text-white rounded-3xl border-sky-400 bg-sky-400 mr-5"
          >
            나에게 온 요청
          </button>
          <button
            value={false}
            onClick={onClick}
            className="border-8 text-white rounded-3xl border-sky-400 bg-sky-400"
          >
            내가 신청한 내역
          </button>
        </div>
        {(page === "true" && (
          <div className="flex justify-center">
            <table className="border-8 bg-gray-200 w-4/6">
              <thead>
                <th className="ml-3 mr-3">스터디명</th>
                <th className="ml-3 mr-3">신청자</th>
                <th className="ml-3 mr-3">내용</th>
                <th className="ml-3 mr-3">신청일</th>
                <th className="ml-3 mr-3">상태</th>
              </thead>
              {applyList?.map((el) => (
                <tbody>
                  <tr>
                    <td>{el.groupStudyName}</td>
                    <td>{el.groupStudyApplicantName}</td>
                    <td>
                      <Link
                        to={`/portfolio/study/apply/${el.groupStudyApplyId}`}
                      >
                        {el.groupStudyApplyContents}
                      </Link>
                    </td>
                    <td>{el.groupStudyApplyCreateAt}</td>
                    {statusView(el.estudyApplyStatus)}
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )) || (
          <div className="flex justify-center">
            <table className="border-8 bg-gray-200 w-4/6">
              <thead>
                <th className="ml-3 mr-3">스터디명</th>
                <th className="ml-3 mr-3">신청일</th>
                <th className="ml-3 mr-3">상태</th>
              </thead>
              {requestApplyList?.map((el) => (
                <tbody>
                  <tr>
                    <td>{el.groupStudyName}</td>
                    <td>{el.groupStudyApplyCreateAt}</td>
                    {statusView(el.estudyApplyStatus)}
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
export default StudentApplyHistoryForm;
