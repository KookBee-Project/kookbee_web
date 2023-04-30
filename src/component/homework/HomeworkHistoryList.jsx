import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHomeworkList } from "../../store/homework/HomeworkSlice";

const HomeworkHistoryList = () => {
  const { data } = useSelector((state) => state.homework);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getHomeworkList(1));
  }, []);

  function getLinkByStatus(status, homeworkQuestionId, homeworkAnswerId) {
    if (status === null)
      return <Link to={`/homeworkwrite/${homeworkQuestionId}`}>제출하기</Link>;
    if (status === "SUBMIT")
      return <Link to={`/homeworkedit/${homeworkAnswerId}`}>수정하기</Link>;
    if (status === "COMPLETE")
      return <Link to={`/homeworkread/${homeworkAnswerId}`}>채점완료</Link>;
    return null;
  }

  return (
    <div>
      <div className="table items-center w-max h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <div className="text-center font-bold text-3xl">과제 내역</div>
          {data.length === 0 ? (
            <div>등록된 과제가 없습니다.</div>
          ) : (
            <table className="my-10">
              <thead className="font-bold text-center">
                <tr>
                  <td>훈련과정명</td>
                  <td>커리큘럼</td>
                  <td>스킬셋</td>
                  <td>제목</td>
                  <td>시작일</td>
                  <td>종료일</td>
                  <td>상태</td>
                </tr>
              </thead>
              <tbody className="text-center border-t border-sky-400">
                {data?.map((el) => (
                  <tr>
                    <td
                      className="p-1 hover:cursor-pointer"
                      onClick={() => {
                        if (el.homeworkAnswerStatus === null)
                          navigate(`/homeworkwrite/${el.homeworkQuestionId}`);
                        else navigate(`/homeworkread/${el.homeworkAnswerId}`);
                      }}
                    >
                      {el.bootcampTitle}
                    </td>
                    <td className="p-1">{el.curriculumName}</td>
                    <td className="p-1">{el.skillSetName}</td>
                    <td className="p-1">{el.homeworkQuestionTitle}</td>
                    <td className="p-1">{el.homeworkQuestionStartDate}</td>
                    <td className="p-1">{el.homeworkQuestionEndDate}</td>
                    <td className="p-1">
                      {getLinkByStatus(
                        el.homeworkAnswerStatus,
                        el.homeworkQuestionId,
                        el.homeworkAnswerId
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
export default HomeworkHistoryList;
