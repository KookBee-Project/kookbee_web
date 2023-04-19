import { Link } from "react-router-dom";

const HomeworkReadForm = () => {
  const data = {
    classTitle: "빅데이터 17기",
    classCurriculum: "Spring Boot",
    curriculumTeacher: "tjdanqkr",
    classSkillSet: "JPA",
    homeworkTitle: "JPA 활용하기",
    homeworkStartDate: "2023-04-01",
    homeworkEndDate: "2023-04-04",
    homeworkDescription:
      "JPA, Querydsl과정 뒷부분에서 소핑몰 프로젝트를 만들기 위한 실습 과제로 엔티티 매핑과 연관관계 매핑 과제를 드리니 실습해보세요",
    homeworkAnswerContent:
      "나의 답변은 1234567이라고 생각한다. 그 이유는 1234567643이기 때문이다.",
    homeworkAnswerImages: "http::img.com",
    homeworkScore: "4",
    homeworkComment: "내용은 훌륭하나, 오답이 있습니다.",
  };
  return (
    <div>
      <div className="table items-center h-5/6 w-auto min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <div className="text-center font-bold text-3xl mb-5">
            {data.homeworkTitle}
          </div>
          <div>
            <div className="flex">
              <h1 className="float-left font-bold">훈련과정명 :</h1>
              <div>{data.classTitle}</div>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">커리큘럼 :</h1>
              <div>{data.classCurriculum}</div>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">강사님 :</h1>
              <div>{data.curriculumTeacher}</div>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">스킬셋 :</h1>
              <div>{data.classSkillSet}</div>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">기간 :</h1>
              <div className="float-right ml-3 font-black">
                <div>{data.homeworkStartDate}</div>
                <div>{data.homeworkEndDate}</div>
              </div>
            </div>
            <div className="flex">
              <h1 className="divide-solid float-left font-bold">내용 :</h1>
            </div>
            <div>
              <div>{data.homeworkDescription}</div>
            </div>
            <div className="flex">
              <h1 className="divide-solid float-left font-bold">나의 답안 :</h1>
            </div>
            <div className="flex">
              <div>{data.homeworkAnswerContent}</div>
            </div>
            {/* 채점 결과 */}
            <div className="border-sky-400 flex justify-center">
              <div className="">
                <h1>강사님 답변</h1>
              </div>
              <div className="">
                <h1>스킬평가</h1>
                <div>{data.homeworkScore}</div>
              </div>
              <div className="">
                <h1>내용</h1>
                <div>{data.homeworkComment}</div>
              </div>
            </div>
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
      </div>
    </div>
  );
};
export default HomeworkReadForm;
