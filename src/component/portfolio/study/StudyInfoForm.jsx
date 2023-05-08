import { Link } from "react-router-dom";

const StudyInfoForm = () => {
  const data = {
    groupStudyName: "자바 기초부터 알아갑시다.",
    groupStudyLeader: "정유철",
    groupStudyOpenDate: "2023-05-02",
    groupStudyPurpose:
      "자바를 블라블라입니다~~ 월 수 금 마다 진행 어쩌구 지각 어쩌구 ~~",
    groupStudyMembers: 6,
  };
  return (
    <div>
      <div className="table items-center h-5/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <div className="flex justify-center mt-5 mb-3">
            <b className="text-3xl">{data.groupStudyName}</b>
          </div>
          <div className="flex">
            <div className="ml-2 mr-2">
              <b className="mr-2">팀장</b>
              <t>{data.groupStudyLeader}</t>
            </div>
            <div className="ml-2 mr-2">
              <b className="mr-2">개설일</b>
              <t>{data.groupStudyOpenDate}</t>
            </div>
            <div className="ml-2 mr-2">
              <b className="mr-2">팀원수</b>
              <t>{data.groupStudyMembers}</t>
            </div>
          </div>
          <p className="flex justify-start">설명</p>
          <div className="flex m-5">
            <t>{data.groupStudyPurpose}</t>
          </div>
        </div>
        <div className="flex justify-end mr-10">
          <button className="border-4 rounded-xl bg-sky-400 border-sky-400">가입 신청하기</button>
        </div>
      </div>
    </div>
  );
};
export default StudyInfoForm;
