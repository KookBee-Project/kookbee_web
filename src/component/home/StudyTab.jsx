import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeStudy } from "../../store/home/homeStudySlice";
import { useNavigate } from "react-router-dom";
import { BsPersonFill, BsFillCalendarWeekFill } from "react-icons/bs";

const StudyTab = () => {
  const { data, status } = useSelector((state) => state.homeStudy);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getHomeStudy());
  }, []);

  return (
    <div className="flex flex-col mt-10 items-center w-1/2 h-96">
      <div className="flex flex-col my-3 items-center w-4/5">
        <div className="border rounded-3xl bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 shadow-md p-2 w-full">
          <div className="text-center text-2xl font-bold">스터디</div>
        </div>
        {status === "successed" && (
          <div className="p-2 w-full">
            {data?.length == 0 ? (
              <div>새 소식이 없네요...</div>
            ) : (
              <ul className="w-full my-5">
                {data?.map((el) => (
                  <li key={el.groupStudyId}>
                    <div className="flex justify-between">
                      <div
                        className="text-gray-800 text-base font-bold hover:text-yellow-500 cursor-pointer"
                        onClick={() => {
                          navigate(
                            `/portfolio/study/studydetail/${el.groupStudyId}`
                          );
                        }}
                      >
                        {el.groupStudyName}
                      </div>
                      <div className="flex text-gray-600">
                        <div className="flex mr-1">
                          <div>
                            <BsPersonFill className="mt-1" />
                          </div>
                          <div className="font-bold">
                            {el.groupStudyMemberCount}
                          </div>
                        </div>
                        <div className="flex">
                          <div>
                            <BsFillCalendarWeekFill className="mt-1" />
                          </div>
                          <div className="font-bold">
                            {el.currentGroupStudyLectureIteration}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-5 mt-3 border-b border-gray-400"></div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyTab;
