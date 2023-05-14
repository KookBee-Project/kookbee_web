import { RiTeamFill } from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";

const ClientTab = ({ scroll }) => {
  console.log(scroll);

  const textList = [
    {
      icon: <RiTeamFill size={80} />,
      title: "팀프로젝트",
      description: "간략한 서비스의 대한 내용~~~~~~~~~~~~~~~~~",
    },
    {
      icon: <GiNotebook size={80} />,
      title: "포트폴리오",
      description: "간략한 서비스의 대한 내용~~~~~~~~~~~~~~~~~",
    },
    { icon: "", title: "", description: "" },
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
              <div className="flex flex-col text-center text-white">
                <span className="text-xl font-bold">{el.title}</span>
                <span className="">{el.description}</span>
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
