import SideBar from "../sidebar/StudentSideBar";

const HomeworkHistoryList = () => {
  const data = [
    {
      classTitle: "빅데이터 17기",
      classCurriculum: "Spring Boot",
      classSkillSet: "JPA",
      homeworkTitle: "JPA 활용하기",
      homeworkStartDate: "2023-04-01",
      homeworkEndDate: "2023-04-04",
      homeworkStatus: "제출하기",
    },
    {
      classTitle: "빅데이터 17기",
      classCurriculum: "Java",
      classSkillSet: "Java",
      homeworkTitle: "별 만들기",
      homeworkStartDate: "2023-02-11",
      homeworkEndDate: "2023-02-14",
      homeworkStatus: "제출완료",
    },
  ];
  return (
    <div>
      <div className="table items-center w-max h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <div className="text-center font-bold text-3xl">과제 내역</div>
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
                  <td className="p-1">{el.classTitle}</td>
                  <td className="p-1">{el.classCurriculum}</td>
                  <td className="p-1">{el.classSkillSet}</td>
                  <td className="p-1">{el.homeworkTitle}</td>
                  <td className="p-1">{el.homeworkStartDate}</td>
                  <td className="p-1">{el.homeworkEndDate}</td>
                  <td className="p-1">{el.homeworkStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default HomeworkHistoryList;
