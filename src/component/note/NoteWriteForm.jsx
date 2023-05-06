import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ImgUpload from "../imageUpload/ImgUpload";
import { api } from "../../api/api";

const NoteWriteForm = () => {
  const [file, setFile] = useState({
    file: "",
    fileName: "",
    fileURL: "",
    loaded: false,
  });
  const { curriculumId } = useParams();
  const [input, setInput] = useState({
    curriculumId: curriculumId,
    noteTitle: "",
    noteContent: "",
    noteImage: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setTitle = (e) => {
    setInput({ ...input, noteTitle: e.target.value });
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
      setInput({ ...input, noteImage: response.data });
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
    if (input.noteContent === "") alert("내용을 입력해주세요.");
    else {
      console.log(input);
      // dispatch(postHomeworkAnswer(input));
    }
  };
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
              value={input.noteTitle}
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
                  "fontfamily",
                  "fontsize",
                  "fontColor",
                  "fontBackgroundColor",
                  "|",
                  "bold",
                  "italic",
                  "strikethrough",
                  "subscript",
                  "superscript",
                  "code",
                  "|",
                  "link",
                  "blockQuote",
                  "codeBlock",
                  "|",
                  "bulletedList",
                  "numberedList",
                  "todoList",
                  "outdent",
                  "indent",
                ],
                placeholder: "내용을 입력하세요.",
              }}
              value={input.noteContent}
              onChange={(event, editor) => {
                const data = editor.getData();
                setInput({
                  ...input,
                  noteContent: data,
                });
              }}
              onReady={(editor) => {
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
              <div className="flex flex-col justify-center">
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
            제출하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteWriteForm;
