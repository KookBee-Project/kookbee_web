import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readBootcampList } from "../../store/bootcamp/bootcampSlice";

const BootcampList = () => {
  const { data } = useSelector((state) => state.bootcamp);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readBootcampList());
  }, []);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">진행중인 부트캠프</div>
      </div>
    </div>
  );
};

export default BootcampList;
