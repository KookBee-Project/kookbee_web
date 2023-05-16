import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CommunitySideBar = () => {
  const dispatch = useDispatch();

  const communityMenu = [
    { value: "꿀팁 추가", link: "/community/tip" },
    { value: "도와주세요!!!", link: "/community/error" },
    { value: "화이팅 해야지", link: "/community/fighting" },
  ];

  return (
    <div className="w-3/12 min-w-20 min-h-40 border-yellow-300 border-r-2">
      <div className="flex flex-col items-center mt-20">
        <p className="font-bold text-lg">부트캠프</p>
        <ul className="list-disc mb-2">
          {communityMenu?.map((el, idx) => (
            <Link to={el.link} key={idx}>
              <li className="list-inside mb-3">{el.value}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommunitySideBar;
