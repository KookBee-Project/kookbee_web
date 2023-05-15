import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getBootcampNameList,
  setData,
} from "../../store/bootcamp/bootcampNameSlice";

const BootcampSideBar = () => {
  const { data, sideSet, status, selectData } = useSelector(
    (state) => state.bootcampName
  );
  const dispatch = useDispatch();

  const studentMenu = sideSet
    ? [
        { value: "나의 강의 내역", link: "/bootcamp" },
        { value: "공지사항", link: "/notification" },
        { value: "과제", link: "/homeworkhistory" },
        { value: "QnA", link: "/QNA" },
        { value: "휴가", link: "/bootcamp/dayoff" },
        { value: "물품 대여", link: "/producthistory" },
        { value: "밥친구", link: "/bootcamp/eatingtogether" },
        { value: "캘린더", link: "/calendar" },
        { value: "출석 및 수강율 (출예)", link: "/" },
        { value: "강의평가 (출시예정)", link: "/" },
      ]
    : [{ value: "나의 강의 내역", link: "/bootcamp" }];

  const setBootcamp = (e) => {
    dispatch(setData(e.target.value));
  };

  return (
    <div className="w-3/12 min-w-20 min-h-40 border-yellow-300 border-r-2">
      {status === "successed" && (
        <div className="flex flex-col items-center mt-20">
          <p className="font-bold text-lg">부트캠프</p>
          <select
            onChange={setBootcamp}
            defaultValue={selectData}
            className="mb-8"
          >
            {data?.map((el) => (
              <option key={el.bootcampId} value={el.bootcampId}>
                {el.bootcampName}
              </option>
            ))}
          </select>
          <ul className="list-disc mb-2">
            {studentMenu?.map((el, idx) => (
              <Link to={el.link} key={idx}>
                <li className="list-inside mb-3">{el.value}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BootcampSideBar;
