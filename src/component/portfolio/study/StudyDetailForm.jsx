import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getStudyAndLectureList } from "../../../store/portfolio/study/studySlice";

const StudyDetailForm = () => {
  const { data, studyJoin, responseList, status } = useSelector(
    (state) => state.study
  );
  const { userId } = useSelector((state) => state.user);

  const param = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudyAndLectureList(param.groupStudyId));
  }, []);

  return (
    <div>
      <div className="table items-center h-2/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        {data?.map(
          (el) =>
            el.groupStudyId === Number(param.groupStudyId) && (
              <>
                <div className="flex flex-col items-center h-2/6 mt-10 ml-3 mr-3">
                  <div className="flex justify-center mt-5 mb-3">
                    <b className="text-3xl">{el.groupStudyName}</b>
                  </div>
                  <div className="flex">
                    <div className="ml-2 mr-2">
                      <b className="mr-2">팀장</b>
                      <t>{el.groupStudyLeaderName}</t>
                    </div>
                    <div className="ml-2 mr-2">
                      <b className="mr-2">개설일</b>
                      <t>{el.groupStudyOpenDate}</t>
                    </div>
                    <div className="ml-2 mr-2">
                      <b className="mr-2">팀원수</b>
                      <t>{el.groupStudyMemberCounts}</t>
                    </div>
                  </div>
                  <p className="flex justify-start">설명</p>
                  <div className="flex m-5">
                    <t>{el.groupStudyPurpose}</t>
                  </div>
                </div>
                {(studyJoin && (
                  <>
                    <div className="flex justify-center">
                      {status === "successed" && (
                        <table className="border-8 bg-gray-200">
                          <thead>
                            <th className="ml-3 mr-3">차수</th>
                            <th className="ml-3 mr-3">회차명</th>
                            <th className="ml-3 mr-3">제출자</th>
                          </thead>
                          <tbody>
                            {responseList.map((el) => (
                              <tr className="mr-2 ml-2">
                                <td className="ml-5 mr-5">
                                  {el.groupStudyLectureIteration}회차
                                </td>
                                <td>
                                  <Link
                                    to={`/portfolio/study/${param.groupStudyId}/lecture/${el.groupStudyLectureId}/detail`}
                                    className="ml-3 mr-3"
                                  >
                                    {el.groupStudyLectureTitle}
                                  </Link>
                                </td>
                                <td className="ml-3 mr-3">
                                  {el.submitterCounts}명
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                    {(el.groupStudyLeaderId === userId && (
                      <div className="flex justify-end mr-10">
                        <Link
                          to={`/portfolio/study/${el.groupStudyId}/lecture/register`}
                          className="border-4 rounded-xl bg-sky-400 border-sky-400"
                        >
                          회차 추가
                        </Link>
                      </div>
                    )) ||
                      null}
                  </>
                )) || (
                  <div className="flex justify-end mr-10">
                    <Link
                      to={`/portfolio/study/${el.groupStudyId}/apply`}
                      className="border-4 rounded-xl bg-sky-400 border-sky-400"
                    >
                      가입 신청하기
                    </Link>
                  </div>
                )}
              </>
            )
        )}
      </div>
    </div>
  );
};
export default StudyDetailForm;
