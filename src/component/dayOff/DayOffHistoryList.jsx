import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { getDayOffList } from "../../store/dayoff/dayOffSlice";

const DayOffHistoryList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, status, error } = useSelector((state) => state.dayOff);
  const bootcampId = useParams().bootcampId;
  
  useEffect(() => {
    dispatch(getDayOffList(bootcampId));
  }, []);
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
          <div className="flex justify-center mt-10">
            <div className="bg-yellow-300 rounded-lg w-28 h-11 text-center font-bold mr-20">
              <button
                onClick={() => {
                  navigate(`/dayoff/${bootcampId}/apply`);
                }}
              >
                신청하기
              </button>
            </div>
            <div className=" bg-yellow-300 rounded-lg w-28 h-11 text-center font-bold">
              <Link to={"/dayoff"}>뒤로가기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DayOffHistoryList;
