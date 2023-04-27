import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBootcampNameList } from "../../store/bootcamp/bootcampNameSlice";

const BootcampSideBar = () => {
  const { sideSet } = useSelector((state) => state.bootcamp);
  const { data } = useSelector((state) => state.bootcampName);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBootcampNameList());
  }, []);

  const studentMenu = sideSet
    ? [
        { value: "나의 강의 내역", link: "/bootcamp" },
        { value: "공지사항", link: "/" },
        { value: "과제", link: "/homeworkhistory" },
        { value: "QnA", link: "/" },
        { value: "휴가", link: "/bootcamp/dayoff" },
        { value: "물품 대여", link: "/producthistory" },
        { value: "밥친구", link: "/" },
        { value: "캘린더 (출시예정)", link: "" },
        { value: "출석 및 수강율 (출예)", link: "/" },
        { value: "강의평가 (출시예정)", link: "/" },
      ]
    : [{ value: "나의 강의 내역", link: "/bootcamp" }];

  return (
    <div className="w-3/12 min-w-20 min-h-40 my-20 mx-10 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center mt-20">
        <p className="font-bold text-lg">부트캠프</p>
        {data?.map((el) => (
          <select className="mb-8">
            <option>{el.bootcampName}</option>)
          </select>
        ))}
        <ul className="list-disc mb-2">
          {studentMenu?.map((el, idx) => (
            <Link to={el.link} key={idx}>
              <li className="list-inside mb-3">{el.value}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BootcampSideBar;
