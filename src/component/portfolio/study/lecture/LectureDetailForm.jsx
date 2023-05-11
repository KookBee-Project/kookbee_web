import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPostList } from "../../../../store/portfolio/study/studySlice";

const LectureDetailForm = () => {
  const { responseList, postList, registerStatus } = useSelector(
    (state) => state.study
  );
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostList(param.lectureId));
  }, []);

  return (
    <div>
      <div className="table items-center h-2/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        {responseList?.map(
          (el) =>
            el.groupStudyLectureIteration === Number(param.lectureId) && (
              <>
                <div className="flex flex-col justify-center m-10">
                  <div className="flex justify-center">
                    <b className="text-3xl">{el.groupStudyLectureTitle}</b>
                  </div>
                  <div className="flex justify-center mt-10">
                    <b>{el.groupStudyLectureContents}</b>
                  </div>
                </div>
              </>
            )
        )}
        <div className="flex justify-center">
          <table className="border-8 bg-gray-200 w-4/6">
            <thead>
              <th className="ml-3 mr-3">제목</th>
              <th className="ml-3 mr-3">제출자</th>
            </thead>
            {postList?.map((el) => (
              <tbody className=" ">
                <tr className="mr-2 ml-2">
                  <td>
                    <Link
                      to={`/portfolio/study/${param.groupStudyId}/lecture/${param.lectureId}/post/${el.groupStudyPostId}`}
                    >
                      {el.groupStudyPostTitle}
                    </Link>
                  </td>
                  <td>{el.groupStudyPostWriterName}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="flex justify-end mt-10 mr-10">
          <Link
            to={`/portfolio/study/${param.groupStudyId}/lecture/${param.lectureId}/post/register`}
            className="border-4 rounded-xl bg-sky-400 border-sky-400"
          >
            글쓰기
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LectureDetailForm;
