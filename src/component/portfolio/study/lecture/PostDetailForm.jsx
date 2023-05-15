import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getPostCommentList,
  registerGroupStudyReview,
} from "../../../../store/portfolio/study/studySlice";
import Loading from "../../../../loading/Loading";

const PostDetailForm = () => {
  const { postList, postCommentList, reviewStatus } = useSelector(
    (state) => state.study
  );

  const param = useParams();
  const dispatch = useDispatch();

  const [request, setRequest] = useState({
    groupStudyReviewContents: "",
  });

  useEffect(() => {
    dispatch(getPostCommentList(param.lectureId));
  }, []);

  const onChangeHandler = (e) => {
    setRequest({ groupStudyReviewContents: e.target.value });
  };

  const postId = param.groupStudyPostId;

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerGroupStudyReview({ postId, request }));
  };

  return (
    <div>
      <div className="table items-center h-2/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        {reviewStatus === "loading" && <Loading></Loading>}
        {postList?.map(
          (el) =>
            el.groupStudyPostId === Number(param.groupStudyPostId) && (
              <>
                <div className="flex flex-col justify-center m-10">
                  <div className="flex justify-center">
                    <b className="text-3xl">{el.groupStudyPostTitle}</b>
                  </div>
                  <div className="flex justify-center">
                    <b className="text-xl">{el.groupStudyPostWriterName}</b>
                  </div>
                  <div className="flex justify-center mt-10">
                    <b>{el.groupStudyPostContents}</b>
                  </div>
                </div>
              </>
            )
        )}

        <div className="flex-col border-8 bg-gray-200 w-4/6">
          <div className="justify-center">
            <table>
              <thead>
                <th>이름</th>
                <th>내용</th>
              </thead>
              {postCommentList?.map(
                (el) =>
                  el.groupStudyPostId === Number(param.groupStudyPostId) &&
                  el.reviewList.map((ele) => (
                    <tbody>
                      <tr>
                        <td>{ele.groupStudyReviewWriterName}</td>
                        <td>{ele.groupStudyReviewContents}</td>
                      </tr>
                    </tbody>
                  ))
              )}
            </table>
            <div className="">
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  id="groupStudyReviewContents"
                  name="groupStudyReviewContents"
                  onChange={onChangeHandler}
                ></input>
                <button
                  type="submit"
                  className="border-8 border-sky-400 rounded-3xl bg-sky-400 flex justify-center"
                >
                  입력
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailForm;
