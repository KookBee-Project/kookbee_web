import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { applyDayOff } from "../../store/dayoff/dayOffSlice";

const DayOffApplyForm = () => {
  const { bootcampList, status, error } = useSelector((state) => state.dayOff);
  const bootcampId = useParams().bootcampId;
  const [request, setRequest] = useState({
    dayOffStartDate: "",
    dayOffEndDate: "",
    dayOffReason: "",
    bootcampId: bootcampId,
  });

  console.log(request);

  const setInput = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(request);
    dispatch(applyDayOff(request));
  };

  useEffect(() => {
    if (status === "successed" && request.dayOffStartDate !== "") {
      alert("휴가 신청에 성공하였습니다.");
      navigate("/bootcamp/dayoff");
    } else if (status === "failed") alert(error);
  }, [status]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const dateStr = `${year}-${month}-${day}`;

  Date.prototype.getInterval = function (otherDate) {
    var interval;
    if (this > otherDate) interval = this.getTime() - otherDate.getTime();
    else interval = otherDate.getTime() - this.getTime();
    return Math.floor(interval / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="table items-center h-5/6 w-2/4 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
        <div className="text-center font-bold text-3xl mb-5">휴가신청서</div>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col">
            <div className="flex">
              <h1 className="float-left font-bold">훈련과정명 :</h1>
              <div className="ml-3">{bootcampList.bootcampName}</div>
            </div>

            <div className="flex flex-col mt-5">
              <h1 className="float-left font-bold">휴가 신청 기간</h1>
              <div className="flex font-semibold justify-between mt-1">
                <div>
                  시작일
                  <input
                    type="date"
                    className="font-black border rounded ml-3"
                    placeholder="시작일을 입력해주세요."
                    name="dayOffStartDate"
                    value={request.dayOffStartDate}
                    min={dateStr}
                    onChange={setInput}
                  />
                </div>
                <div className="ml-3">
                  종료일
                  <input
                    type="date"
                    className="font-black border rounded ml-3"
                    placeholder="시작일을 입력해주세요."
                    name="dayOffEndDate"
                    value={request.dayOffEndDate}
                    min={dateStr}
                    onChange={setInput}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <h1 className="float-left font-bold">사유</h1>
              <textarea
                type="textarea"
                className="float-left border-2 p-2 resize-none h-56"
                placeholder="사유를 입력해주세요."
                name="dayOffReason"
                value={request.dayOffReason}
                onChange={setInput}
              />
            </div>

            <div className="flex justify-center mt-16 font-bold">
              <button className="bg-yellow-300 rounded-lg w-1/4 h-11 mr-20">
                신청하기
              </button>
              <button
                className=" bg-yellow-300 rounded-lg w-1/4 h-11"
                onClick={() => {
                  navigate("/bootcamp/dayoff");
                }}
              >
                뒤로가기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default DayOffApplyForm;
