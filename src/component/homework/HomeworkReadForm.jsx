import { Link, useParams } from "react-router-dom";
import HomeworkTeacherAnswer from "./HomeworkTeacherAnswer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getHomeworkAnswerDetail } from "../../store/homework/HomeworkSlice";

const HomeworkReadForm = () => {
  const data = useSelector((state) => state.homework.answerDetailData);
  const { status } = useSelector((state) => state.homework);
  const [imgCheck, setImgCheck] = useState(false);
  const [imgCheck1, setImgCheck1] = useState(false);

  const { homeworkAnswerId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeworkAnswerDetail(homeworkAnswerId));
  }, []);

  return (
    <div>
      <div className="table items-center h-5/6 w-auto min-h-40 min-w-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        {status === "successed" && (
          <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
            <div className="text-center font-bold text-3xl mb-5">
              {data.homeworkTitle}
            </div>
            <div>
              <div className="flex">
                <h1 className="float-left font-bold">훈련과정명 :</h1>
                <div>{data.bootcampName}</div>
              </div>
              <div className="flex">
                <h1 className="float-left font-bold">커리큘럼 :</h1>
                <div>{data.curriculumName}</div>
              </div>
              <div className="flex">
                <h1 className="float-left font-bold">강사님 :</h1>
                <div>{data.teacherName}</div>
              </div>
              <div className="flex">
                <h1 className="float-left font-bold">스킬셋 :</h1>
                <div>{data.skillSetName}</div>
              </div>
              <div className="flex">
                <h1 className="float-left font-bold">기간 :</h1>
                <div className="float-right ml-3 font-black">
                  <div>{data.homeworkQuestionStartDate}</div>
                  <div>{data.homeworkQuestionEndDate}</div>
                </div>
              </div>
              <div className="flex">
                <h1 className="divide-solid float-left font-bold">내용 :</h1>
              </div>
              <div>
                <div className="whitespace-pre-wrap break-all overflow-auto">
                  {data.homeworkQuestionContent}
                </div>
              </div>
              <h1 className="divide-solid float-left font-bold">참고자료 :</h1>
              {imgCheck && (
                <Link
                  to={
                    "https://storage.googleapis.com/kookbee-test-strorage/" +
                    data?.homeworkQuestionImages
                  }
                >
                  {"https://storage.googleapis.com/kookbee-test-strorage/" +
                    data?.homeworkQuestionImages}
                </Link>
              )}

              {data?.homeworkQuestionImages && (
                <img
                  src={
                    "https://storage.googleapis.com/kookbee-test-strorage/" +
                    data?.homeworkQuestionImages
                  }
                  className="border-2 border-yellow-300 rounded-xl whitespace-pre-wrap break-all overflow-auto p-2 w-40 h-40 font-semibold"
                  onError={() => {
                    setImgCheck(true);
                  }}
                  hidden={imgCheck}
                />
              )}

              <div className="flex">
                <h1 className="divide-solid float-left font-bold">
                  나의 답안 :
                </h1>
              </div>
              <div className="flex">
                <div
                  className=" whitespace-pre-wrap break-all overflow-auto"
                  dangerouslySetInnerHTML={{
                    __html: data.homeworkAnswerContent,
                  }}
                ></div>
              </div>
              <div className="flex flex-col font-bold mt-3">
                첨부파일
                {imgCheck1 && (
                  <Link
                    to={
                      "https://storage.googleapis.com/kookbee-test-strorage/" +
                      data?.homeworkAnswerImages
                    }
                  >
                    {"https://storage.googleapis.com/kookbee-test-strorage/" +
                      data?.homeworkAnswerImages}
                  </Link>
                )}
                {data?.homeworkAnswerImages ? (
                  <img
                    src={
                      "https://storage.googleapis.com/kookbee-test-strorage/" +
                      data?.homeworkAnswerImages
                    }
                    className="border-2 border-yellow-300 rounded-xl whitespace-pre-wrap break-all overflow-auto p-2 w-40 h-40 font-semibold"
                    onError={() => {
                      setImgCheck1(true);
                    }}
                    hidden={imgCheck1}
                  />
                ) : (
                  <p className="text-sm">등록된 첨부파일이 없습니다.</p>
                )}
              </div>
              {data.homeworkAnswerScore && (
                <HomeworkTeacherAnswer data={data} />
              )}
              <div className="flex justify-center mt-4">
                <Link
                  to={"/homeworkhistory"}
                  className=" bg-yellow-300 rounded-lg w-1/4 h-11 text-center"
                >
                  뒤로가기
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default HomeworkReadForm;
