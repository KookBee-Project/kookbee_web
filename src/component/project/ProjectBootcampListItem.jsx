import { useNavigate } from "react-router";
import { readBootcampList } from "../../store/bootcamp/bootcampSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ProjectBootcampListItem = () => {
  const { data } = useSelector((state) => state.bootcamp);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(readBootcampList());
  }, []);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">나의 부트캠프</div>
        {data.length === 0 ? (
          <div className="flex flex-col text-center items-center">
            <p className="my-5">현재 강의 정보가 없습니다</p>
          </div>
        ) : (
          <div>
            <table className="my-10">
              <thead className="font-bold text-center">
                <tr>
                  <td>훈련과정명</td>
                  <td>시작일</td>
                  <td>종료일</td>
                  <td>캠퍼스</td>
                </tr>
              </thead>
              <tbody className="text-center border border-black">
                {data?.map((el, idx) => (
                  <tr key={idx}>
                    <td
                      className="p-1 hover:cursor-pointer"
                      onClick={() => {
                        navigate(`/portfolio/project/my/${el.bootcampId}`);
                      }}
                    >
                      {el.bootcampTitle}
                    </td>
                    <td className="p-1">{el.bootcampStartDate}</td>
                    <td className="p-1">{el.bootcampEndDate}</td>
                    <td className="p-1">{el.campusName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectBootcampListItem;
