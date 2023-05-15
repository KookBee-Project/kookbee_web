import { FaSchool } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { IoChatbubblesSharp } from "react-icons/io5";

const ClientTab = ({ scroll }) => {
  const textList = [
    {
      icon: <FaSchool size={80} />,
      title: "부트캠프",
      description: "간편한 부트캠프 이용, 공부에만 집중하세요!!",
    },
    {
      icon: <GiNotebook size={80} />,
      title: "포트폴리오",
      description: "여러분의 발자취를 남겨보세요!!",
    },
    {
      icon: <IoChatbubblesSharp size={80} />,
      title: "커뮤니티",
      description: "공부하다 지칠 땐 동료들과 대화를 남겨보세요!!",
    },
  ];

  return (
    <div className="bg-yellow-300 py-10 flex w-full mt-10 justify-center">
      {scroll.y >= 154 ? (
        <div className="grid grid-cols-3 place-items-center w-5/6 animate-puff-in">
          {textList.map((el, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-60 h-60 border bg-black opacity-60 rounded-full shadow-md shadow-black"
            >
              <div className="flex flex-col text-white h-1/2 justify-center">
                {el.icon}
              </div>
              <div className="flex flex-col items-center text-center text-white">
                <span className="text-xl font-bold">{el.title}</span>
                <span className="w-11/12">{el.description}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ClientTab;
