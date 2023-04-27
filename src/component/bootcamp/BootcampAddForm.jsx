import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBootcamp } from "../../store/bootcamp/bootcampSlice";
import { useNavigate } from "react-router-dom";

const BootcampAddForm = () => {
  const { status, error } = useSelector((state) => state.bootcamp);
  const [bootcampCode, setBootcampCode] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setInput = (e) => {
    setBootcampCode(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(bootcampCode);
    e.preventDefault();
    dispatch(addBootcamp(bootcampCode));
  };

  useEffect(() => {
    if (status === "successed" && bootcampCode != "") {
      alert("강의 등록에 성공했습니다!");
      navigate("/bootcamp");
    } else if (status === "failed" && bootcampCode != "") alert(error);
  }, [status]);

  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">강의 등록하기</div>
        <div className="flex flex-col items-center text-center">
          <p className="my-5 font-bold">부트캠프 코드를 입력해주세요!!</p>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="border-2 border-yellow-400 rounded-md w-full p-3 text-xl"
              value={bootcampCode}
              onChange={setInput}
            />
            <button
              className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md
         shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
            >
              강의 등록
            </button>
          </form>
          <div className="text-xl w-5/6">
            수강 신청한 학원을 통하여 수강 코드를 받아주시길 바랍니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootcampAddForm;
