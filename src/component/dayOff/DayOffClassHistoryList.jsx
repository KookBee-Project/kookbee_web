import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getBootcampList } from "../../store/dayoff/dayOffSlice";

const DayOffClassHistoryList = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.dayOff);

  useEffect(() => {
    dispatch(getBootcampList());
  }, []);
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
                  <td className="p-1 pl-7 pr-7">{el.bootcampName}</td>
                  <td className="p-1 pl-7 pr-7">{el.bootcampStartDate}</td>
                  <td className="p-1 pl-7 pr-7">{el.bootcampEndDate}</td>
                  <td className="p-1 pl-7 pr-7">
                    {data.map((el) =>
                      new Date().getInterval(new Date(el.bootcampStartDate))
                    )}
                    일 /
                    {data.map((el) =>
                      String(
                        new Date().getInterval(new Date(el.bootcampStartDate)) /
                          new Date(el.bootcampEndDate).getInterval(
                            new Date(el.bootcampStartDate)
                          )
                      ).slice(2, 4)
                    )}
                    %
                  </td>
                  <td className="p-1 pl-7 pr-7">{el.remainingDayOff}</td>
                  <td className="p-1 pl-10 pr-10 bg-yellow-300 rounded-lg w-13">
                    <button
                      onClick={() => {
                        navigate(`/bootcamp/dayoff/${el.bootcampId}`);
                      }}
                    >
                      휴가신청
                    </button>
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
