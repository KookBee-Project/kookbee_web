import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getNoteList } from "../../store/note/noteSlice";

const NoteListItem = () => {
  const NoteList = useSelector((state) => state.note.data);
  const { status } = useSelector((state) => state.note);
  const { curriculumId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getNoteList(curriculumId));
  }, []);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      {status === "successed" && (
        <div className="flex flex-col items-center w-full h-5/6 mt-10">
          <div className="text-center font-bold text-3xl">
            진행중인 부트캠프
          </div>
          {NoteList.length === 0 ? (
            <div className="flex flex-col text-center items-center">
              <p className="my-5">
                작성하신 수업노트가 없네요. 작성하러 가시겠습니까?
              </p>
              <button
                className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md
                 shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
                onClick={() => {
                  navigate(`/portfolio/note/write/${curriculumId}`);
                }}
              >
                작성하러 가기
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <table className="my-10 min-w-30">
                <thead className="font-bold text-center">
                  <tr>
                    <td>노트 제목</td>
                    <td>작성일</td>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {NoteList?.map((el) => (
                    <tr key={el.noteId}>
                      <td
                        className="p-1 hover:cursor-pointer"
                        onClick={() => {
                          navigate(`/portfolio/note/detail/${el.noteId}`);
                        }}
                      >
                        {el.noteTitle}
                      </td>
                      <td className="p-1">
                        {String(el.createAt).split("T")[0]}
                      </td>
                      <td
                        className="p-1 m-1 font-bold bg-yellow-300 border-0 rounded-lg cursor-pointer"
                        onClick={() => {
                          navigate(`/portfolio/note/edit/${el.noteId}`);
                        }}
                      >
                        수정하기
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md
                 shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
                onClick={() => {
                  navigate(`/portfolio/note/write/${curriculumId}`);
                }}
              >
                새 수업노트
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NoteListItem;
