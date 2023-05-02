const HomeworkTeacherAnswer = ({ data }) => {
  return (
    <div className="border border-sky-400">
      <div className="">
        <h1>강사님 답변</h1>
      </div>
      <div className="">
        <h1>스킬평가</h1>
        <div>{data.homeworkAnswerScore}</div>
      </div>
      <div className="">
        <h1>내용</h1>
        <div>{data.homeworkAnswerComment}</div>
      </div>
    </div>
  );
};

export default HomeworkTeacherAnswer;
