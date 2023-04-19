import { Link } from "react-router-dom";

const SideBar = () => {
  const studentMenu = [
    { value: "나의 강의 내역", link: "" },
    { value: "캘린더", link: "" },
    { value: "출석 및 수강율", link: "/" },
    { value: "과제", link: "/homeworkhistory" },
    { value: "휴가", link: "/dayoffclasshistory" },
    { value: "제공 및 대여", link: "/" },
    { value: "강의평가", link: "/" },
    { value: "공지사항", link: "/" },
    { value: "QnA", link: "/" },
    { value: "같이 밥먹을 사람", link: "/" },
  ];

  return (
    <div className="w-3/12 min-w-12 min-h-40 my-20 mx-10 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center mt-20">
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

export default SideBar;
