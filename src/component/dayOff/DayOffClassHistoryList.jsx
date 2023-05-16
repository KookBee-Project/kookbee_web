import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getBootcampList } from "../../store/dayoff/dayOffSlice";

const DayOffClassHistoryList = () => {
  const dispatch = useDispatch();
  const { bootcampList, status, error } = useSelector((state) => state.dayOff);
  const { selectData } = useSelector((state) => state.bootcampName);
  console.log(bootcampList);

  useEffect(() => {
    selectData != undefined && dispatch(getBootcampList(selectData));
  }, [selectData]);

  Date.prototype.getInterval = function (otherDate) {
    var interval;
    if (this > otherDate) interval = this.getTime() - otherDate.getTime();
    else interval = otherDate.getTime() - this.getTime();
    return Math.floor(interval / (1000 * 60 * 60 * 24));
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="table items-center w-max h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-full mt-10 ml-3 mr-3">
          <div className="text-center font-bold text-3xl">휴가</div>
          <table className="my-10">
            <thead className="font-bold text-center">
              <tr>
                <td>훈련과정명</td>
                <td>시작일</td>
                <td>종료일</td>
                <td>진행기간</td>
                <td>잔여휴가</td>
                {/* <td>비고</td> */}
              </tr>
            </thead>
            <tbody className="text-center border-t border-sky-400">
              <tr>
                <td className="p-1 pl-7 pr-7">{bootcampList.bootcampName}</td>
                <td className="p-1 pl-7 pr-7">
                  {bootcampList.bootcampStartDate}
                </td>
                <td className="p-1 pl-7 pr-7">
                  {bootcampList.bootcampEndDate}
                </td>
                <td className="p-1 pl-7 pr-7">
                  {new Date().getInterval(
                    new Date(bootcampList.bootcampStartDate)
                  )}
                  일 /
                  {String(
                    new Date().getInterval(
                      new Date(bootcampList.bootcampStartDate)
                    ) /
                      new Date(bootcampList.bootcampEndDate).getInterval(
                        new Date(bootcampList.bootcampStartDate)
                      )
                  ).slice(2, 4)}
                  %
                </td>
                <td className="p-1 pl-7 pr-7">
                  {bootcampList.remainingDayOff}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center font-bold text-xl">신청 내역</div>
          {bootcampList.studentDayOffList?.length != 0 ? (
            <div>
              <table className="my-3">
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
                  {bootcampList.studentDayOffList?.map((el) => (
                    <tr>
                      <td className="p-1 pl-7 pr-7">{el.bootcampName}</td>
                      <td className="p-1 pl-7 pr-7">{el.curriculumName}</td>
                      <td className="p-1 pl-7 pr-7">
                        {el.dayOffStartDate} ~ {el.dayOffEndDate}
                      </td>
                      <td className="p-1 pl-7 pr-7">{el.useDays}</td>
                      <td className="p-1 pl-7 pr-7">{el.dayOffStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>신청 내역이 없습니다.</div>
          )}
          <div className="flex flex-col justify-end h-1/3">
            <button
              className="mt-5 p-1 pl-10 pr-10 bg-yellow-300 rounded-lg w-13 font-bold text-lg"
              onClick={() => {
                navigate(`/bootcamp/dayoff/${bootcampList.bootcampId}/apply`);
              }}
            >
              휴가신청
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DayOffClassHistoryList;
