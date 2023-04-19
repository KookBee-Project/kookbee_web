import { Link } from "react-router-dom";

const DayOffHistoryList = () => {
  const data = [
    {
      classTitle: "빅데이터 17기",
      classCurriculum: "Spring Boot",
      dayOffStartDate: "2023-04-01",
      dayOffEndDate: "2023-04-03",
      dayOffPeriod: "3",
      dayOffStatus: "승인",
    },
  ];
  return (
    <div>
      <div className="table items-center w-max h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <div className="text-center font-bold text-3xl">휴가 신청 내역</div>
          <table className="my-10">
            <thead className="font-bold text-center">
              <tr>
                <td>훈련과정명</td>
                <td>커리큘럼</td>
                <td>휴가신청일자</td>
                <td>휴가기간</td>
                <td>상태</td>
              </tr>
            </thead>
            <tbody className="text-center border-t border-sky-400">
              {data?.map((el) => (
                <tr>
                  <td className="p-1 pl-7 pr-7">{el.classTitle}</td>
                  <td className="p-1 pl-7 pr-7">{el.classCurriculum}</td>
                  <td className="p-1 pl-7 pr-7">
                    {el.dayOffStartDate} ~ {el.dayOffEndDate}
                  </td>
                  <td className="p-1 pl-7 pr-7">{el.dayOffPeriod}</td>
                  <td className="p-1 pl-7 pr-7">{el.dayOffStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-10">
            <div className="bg-yellow-300 rounded-lg w-28 h-11 text-center font-bold mr-20">
              <Link to={"/dayoffapply"} className="">
                신청하기
              </Link>
            </div>
            <div className=" bg-yellow-300 rounded-lg w-28 h-11 text-center font-bold">
              <Link to={"/dayoffclasshistory"}>뒤로가기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DayOffHistoryList;
