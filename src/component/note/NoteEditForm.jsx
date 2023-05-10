import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ImgUpload from "../imageUpload/ImgUpload";
import { api } from "../../api/api";
import {
  EditNote,
  createNote,
  getNoteDetail,
} from "../../store/note/noteSlice";

const NoteEditForm = () => {
  const { writeStatus } = useSelector((state) => state.note);
  const { detail } = useSelector((state) => state.note);
  const [file, setFile] = useState({
    file: "",
    fileName: "",
    fileURL: "",
    loaded: false,
  });
  const { noteId } = useParams();
  const [input, setInput] = useState({
    id: noteId,
    title: "",
    content: "",
    uuid: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getNoteDetail(noteId));
  }, []);

  useEffect(() => {
    setInput({
      id: detail.id,
      title: detail.title,
      content: detail.content,
      uuid: detail.uuid,
    });
    detail.uuid
      ? setFile({
          ...file,
          file: { type: "image" },
          fileURL:
            "https://storage.googleapis.com/kookbee-test-strorage/" +
            detail.uuid,
          loaded: true,
        })
      : setFile({ file: "", fileName: "", fileURL: "", loaded: false });
  }, [detail]);

  const setTitle = (e) => {
    setInput({ ...input, title: e.target.value });
  };

  const fileChange = async (e) => {
    e.preventDefault();
    const requestFile = new FormData();
    const fileReader = new FileReader();
    const fileValue = e.target.files[0];
    if (fileValue) {
      setFile({ ...file, loaded: "loading" });
      fileReader.readAsDataURL(fileValue);
    }
    fileReader.onload = () => {
      setFile({
        file: e.target.files[0],
        fileName: e.target.files[0].name,
        fileURL: fileReader.result,
        loaded: true,
      });
    };
    requestFile.append("file", fileValue);
    try {
      const response = await api("POST", "/upload", requestFile);
      setInput({ ...input, uuid: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  const delFile = () => {
    setFile({
      file: "",
      fileName: "",
      fileURL: "",
      loaded: false,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.title === "") alert("제목을 입력해주세요.");
    else {
      console.log(input);
      dispatch(EditNote(input));
    }
  };

  useEffect(() => {
    if (writeStatus === "successed" && input.title !== "") {
      alert("변경사항이 저장되었습니다.");
      navigate(`/portfolio/note/${detail.curriculumId}`);
    } else if (writeStatus === "failed" && input.title !== "")
      alert("수정에 실패하였습니다.");
  }, [writeStatus]);
  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">노트 작성</div>
        <form onSubmit={onSubmit} className="flex flex-col w-full items-center">
          <div className="flex flex-col w-5/6">
            <label htmlFor="title" className="font-bold">
              제목
            </label>
            <input
              type="text"
              className="border-2 border-black p-2 rounded-md"
              id="title"
              value={input.title}
              onChange={setTitle}
            />
          </div>
          <div className="w-5/6 m-5 whitespace-pre-wrap break-all overflow-auto">
            <CKEditor
              editor={ClassicEditor}
              config={{
                toolbar: [
                  "undo",
                  "redo",
                  "|",
                  "heading",
                  "|",
                  "bold",
                  "italic",
                  "|",
                  "link",
                  "blockQuote",
                  "codeBlock",
                  "|",
                  "bulletedList",
                  "numberedList",
                  "outdent",
                  "indent",
                ],
                placeholder: "내용을 입력하세요.",
              }}
              value={input.content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setInput({
                  ...input,
                  content: data,
                });
              }}
              onReady={(editor) => {
                editor.data.set(detail.content);
                editor.editing.view.change((writer) => {
                  writer.setStyle(
                    "min-height",
                    "200px",
                    editor.editing.view.document.getRoot()
                  );
                });
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
          {file && (
            <div className="mt-5">
              <div className="flex flex-col justify-center text-center">
                <ImgUpload
                  file={file.file}
                  loaded={file.loaded}
                  delFile={delFile}
                  fileURL={file.fileURL}
                  fileChange={fileChange}
                />
              </div>
            </div>
          )}
          <button className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none">
            저장하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteEditForm;
