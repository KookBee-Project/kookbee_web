import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const HomeworkWriteForm = () => {
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
  };

  return (
    <div>
      <div className="table items-center w-max h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <div className="text-center font-bold text-3xl mb-5">
            {data.homeworkTitle}
          </div>
          <div>
            <div className="flex">
              <h1 className="float-left font-bold">훈련과정명 :</h1>
              <input
                type="text"
                className="float-right ml-3 font-black"
                placeholder={data.classTitle}
              ></input>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">커리큘럼 :</h1>
              <input
                type="text"
                className="float-right ml-3 font-black"
                placeholder={data.classCurriculum}
              ></input>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">강사님 :</h1>
              <input
                type="text"
                className="float-right ml-3 font-black"
                placeholder={data.curriculumTeacher}
              ></input>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">스킬셋 :</h1>
              <input
                type="text"
                className="float-right ml-3 font-black"
                placeholder={data.classSkillSet}
              ></input>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">기간 :</h1>
              <div className="float-right ml-3 font-black">
                <input
                  type="text"
                  className="float-left"
                  placeholder={data.homeworkStartDate}
                ></input>
                <input
                  type="text"
                  className="float-right"
                  placeholder={data.homeworkEndDate}
                ></input>
              </div>
            </div>
            <div className="flex">
              <h1 className="divide-solid float-left font-bold">내용 :</h1>
            </div>
            <div>
              <input
                type="text"
                className="flex justify-center ml-3 font-black w-full h-5/6"
                placeholder={data.homeworkDescription}
              ></input>
            </div>
            <div>
              <CKEditor
                editor={ClassicEditor}
                config={{
                  placeholder: "내용을 입력하세요.",
                }}
                onReady={(editor) => {}}
              ></CKEditor>
            </div>
            <div className="flex">
              <button className=" bg-yellow-300 rounded-lg w-1/6 h-1/6">
                제출하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeworkWriteForm;
