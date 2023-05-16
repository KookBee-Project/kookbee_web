import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNoteCurriculumList } from "../../store/note/noteSlice";
import Loading from "../../loading/Loading";

const NoteCurriculumListItem = () => {
  const { userId } = useSelector((state) => state.user);
  const curriculumList = useSelector((state) => state.note.curriculum);
  const { status } = useSelector((state) => state.note);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoteCurriculumList());
  }, []);
  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      {status === "loading" && <Loading></Loading>}
      {status === "successed" && (
        <div className="flex flex-col items-center w-full h-5/6 mt-10">
          <div className="text-center font-bold text-3xl">커리큘럼</div>
          {curriculumList.length === 0 ? (
            "커리큘럼이 없군요"
          ) : (
            <table className="my-10">
              <thead className="font-bold text-center">
                <tr>
                  <td>커리큘럼명</td>
                  <td>시작일</td>
                  <td>종료일</td>
                  <td>부트캠프</td>
                  <td>스킬셋</td>
                </tr>
              </thead>
              <tbody className="text-center border-2 border-black ">
                {curriculumList?.map((el) => (
                  <tr key={el.curriculumId}>
                    <td
                      className="p-1 hover:cursor-pointer"
                      onClick={() =>
                        navigate(`/portfolio/note/${el.curriculumId}`)
                      }
                    >
                      {el.curriculumName}
                    </td>
                    <td className="p-1">{el.curriculumStartDate}</td>
                    <td className="p-1">{el.curriculumEndDate}</td>
                    <td className="p-1">{el.bootcampTitle}</td>
                    <td className="p-1">{el.skillSetName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default NoteCurriculumListItem;
