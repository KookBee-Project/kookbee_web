import { useState } from "react";
import { Link } from "react-router-dom";

const DayOffApplyForm = () => {
  const [data, setData] = useState({
    classTitle: "빅데이터 17기",
    classCurriculum: "Java",
    dayOffStartDate: 0,
    dayOffEndDate: 0,
    dayOffReason: "",
  });

  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const dateStr = `${year}-${month}-${day}`;
  console.log(dateStr);

  Date.prototype.getInterval = function (otherDate) {
    var interval;
    if (this > otherDate) interval = this.getTime() - otherDate.getTime();
    else interval = otherDate.getTime() - this.getTime();
    return Math.floor(interval / (1000 * 60 * 60 * 24));
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  function endDate(el) {
    if (data.dayOffStartDate === 0)
      return (
        <input
          type="date"
          className="float-right ml-3 font-black"
          placeholder="종료일을 입력해주세요."
          name="dayOffEndDate"
          min={dateStr}
          value={data.dayOffEndDate}
          onChange={onChangeHandler}
        ></input>
      );
    return (
      <input
        type="date"
        className="float-right ml-3 font-black"
        placeholder="종료일을 입력해주세요."
        name="dayOffEndDate"
        min={data.dayOffStartDate}
        value={data.dayOffEndDate}
        onChange={onChangeHandler}
      ></input>
    );
  }

  return (
    <div className="table items-center h-5/6 w-2/4 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
        <div className="text-center font-bold text-3xl mb-5">휴가신청서</div>
        <form>
          <div className="">
            <div className="flex">
              <h1 className="float-left font-bold">훈련과정명 :</h1>
              <div>{data.classTitle}</div>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">커리큘럼 :</h1>
              <div>{data.classCurriculum}</div>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">휴가 신청 기간 :</h1>
              <input
                type="date"
                className="float-right ml-3 font-black"
                placeholder="시작일을 입력해주세요."
                name="dayOffStartDate"
                value={data.dayOffStartDate}
                min={dateStr}
                onChange={onChangeHandler}
              ></input>
              {endDate(data.dayOffEndDate)}
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">휴가신청기간 :</h1>
              <div>
                {new Date(data.dayOffEndDate).getInterval(new Date(data.dayOffStartDate))}
              </div>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">사유 :</h1>
              <div className="float-right ml-3 font-black">
                <input
                  type="text"
                  className="float-left"
                  placeholder="사유를 입력해주세요."
                  name="dayOffReason"
                  value={data.dayOffReason}
                  onChange={onChangeHandler}
                ></input>
                <div className="flex justify-center mt-10">
                  <button className="bg-yellow-300 rounded-lg w-1/4 h-11 mr-20">
                    신청하기
                  </button>
                  <div className=" bg-yellow-300 rounded-lg w-1/4 h-11 text-center">
                    <Link to={"/dayoffhistory"}>뒤로가기</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default DayOffApplyForm;
