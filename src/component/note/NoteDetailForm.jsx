import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getNoteDetail } from "../../store/note/noteSlice";

const NoteDetailForm = () => {
  const { detail, detailStatus } = useSelector((state) => state.note);
  const [imgCheck, setImgCheck] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { noteId } = useParams();

  useEffect(() => {
    dispatch(getNoteDetail(noteId));
  }, []);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      {detailStatus === "successed" && (
        <div className="flex flex-col items-center w-full h-5/6 mt-10">
          <div className="text-center border-b-2 border-gray-100 pb-5 w-5/6 font-bold text-3xl">
            {detail.title}
          </div>
          <div className="w-5/6 text-sm text-right">
            <p>
              {String(detail.createAt).split("T")[0] +
                " " +
                String(detail.createAt).split("T")[1]}
            </p>
          </div>
          <div className="ck-content w-5/6 whitespace-pre-wrap break-all">
            {HTMLReactParser(String(detail.content))}
          </div>
          <div className="divide-solid border-2 p-3 mt-10 border-yellow-300 rounded-md flex flex-col w-5/6 float-left font-bold">
            첨부 파일
            {imgCheck && (
              <Link
                to={
                  "https://storage.googleapis.com/kookbee-test-strorage/" +
                  detail.uuid
                }
              >
                {"https://storage.googleapis.com/kookbee-test-strorage/" +
                  detail.uuid}
              </Link>
            )}
            {detail.uuid && (
              <img
                src={
                  "https://storage.googleapis.com/kookbee-test-strorage/" +
                  detail.uuid
                }
                className="border-2 border-yellow-300 rounded-xl whitespace-pre-wrap break-all overflow-auto p-2 w-40 h-40 font-semibold"
                onError={() => {
                  setImgCheck(true);
                }}
                hidden={imgCheck}
              />
            )}
          </div>
          <button
            className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
            onClick={() => {
              navigate(`/portfolio/note/${detail.curriculumId}`);
            }}
          >
            목록으로
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteDetailForm;
