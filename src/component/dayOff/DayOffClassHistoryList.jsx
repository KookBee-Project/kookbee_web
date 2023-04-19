import { Link } from "react-router-dom";

const DayOffClassHistoryList = () => {
  const data = [
    {
      classTitle: "빅데이터 17기",
      classStartDate: "2022-11-14",
      classEndDate: "2023-05-17",
      classProgressPeriod: "80일(78.8%)",
      remainingDayOff: "5",
    },
  ];

  Date.prototype.getInterval = function (otherDate) {
    var interval;
    if (this > otherDate) interval = this.getTime() - otherDate.getTime();
    else interval = otherDate.getTime() - this.getTime();
    return Math.floor(interval / (1000 * 60 * 60 * 24));
  };

  return (
    <div>
      <div className="table items-center w-max h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <div className="text-center font-bold text-3xl">휴가 신청 내역</div>
          <table className="my-10">
            <thead className="font-bold text-center">
              <tr>
                <td>훈련과정명</td>
                <td>시작일</td>
                <td>종료일</td>
                <td>진행기간</td>
                <td>잔여휴가</td>
                <td>비고</td>
              </tr>
            </thead>
            <tbody className="text-center border-t border-sky-400">
              {data?.map((el) => (
                <tr>
                  <td className="p-1 pl-7 pr-7">{el.classTitle}</td>
                  <td className="p-1 pl-7 pr-7">{el.classStartDate}</td>
                  <td className="p-1 pl-7 pr-7">{el.classEndDate}</td>
                  <td className="p-1 pl-7 pr-7">
                    {data.map((el) =>
                      new Date().getInterval(new Date(el.classStartDate))
                    )}
                    일 /
                    {data.map((el) =>
                      String(
                        new Date().getInterval(new Date(el.classStartDate)) /
                          new Date(el.classEndDate).getInterval(
                            new Date(el.classStartDate)
                          )
                      ).slice(2, 4)
                    )}
                    %
                  </td>
                  <td className="p-1 pl-7 pr-7">{el.remainingDayOff}</td>
                  <td className="p-1 pl-10 pr-10 bg-yellow-300 rounded-lg w-13">
                    <Link to={"/dayoffhistory"}>휴가신청</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default DayOffClassHistoryList;
