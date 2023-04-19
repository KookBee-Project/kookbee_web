import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Link } from "react-router-dom";

const HomeworkEditForm = () => {
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
  };

  return (
    <div>
      <div className="table items-center h-5/6 w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
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
                <div className="float-left">{data.homeworkStartDate}</div>
                <div>~</div>
                <div className="float-right">{data.homeworkEndDate}</div>
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
              <CKEditor
                editor={ClassicEditor}
                config={{
                  placeholder: data.homeworkAnswerContent,
                }}
                onReady={(editor) => {}}
              ></CKEditor>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-yellow-300 rounded-lg w-44 h-11 mr-20">
              수정하기
            </button>
            <div className=" bg-yellow-300 rounded-lg w-44 h-11 text-center">
              <Link to={"/homeworkhistory"}>뒤로가기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeworkEditForm;
