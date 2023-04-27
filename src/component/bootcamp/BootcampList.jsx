import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readBootcampList } from "../../store/bootcamp/bootcampSlice";
import { useNavigate } from "react-router-dom";

const BootcampList = () => {
  const { data } = useSelector((state) => state.bootcamp);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(readBootcampList());
  }, []);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">나의 강의</div>
        {data.length === 0 ? (
          <div className="flex flex-col text-center items-center">
            <p className="my-5">현재 강의 정보가 없습니다. 등록하시겠습니까?</p>
            <button
              className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md
         shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
              onClick={() => {
                navigate("/bootcamp/add");
              }}
            >
              등록하러 가기
            </button>
          </div>
        ) : (
          <div>
            {data?.map((el) => {
              <div>안녕</div>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BootcampList;
