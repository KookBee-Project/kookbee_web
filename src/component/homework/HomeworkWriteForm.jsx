import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getHomeworkDetail,
  postHomeworkAnswer,
} from "../../store/homework/HomeworkSlice";
import { api } from "../../api/api";
import ImgUpload from "../imageUpload/ImgUpload";

const HomeworkWriteForm = () => {
  const { detailData, writeStatus } = useSelector((state) => state.homework);
  const { homeworkQuestionId } = useParams();
  const [imgCheck, setImgCheck] = useState(false);
  const [file, setFile] = useState({
    file: "",
    fileName: "",
    fileURL: "",
    loaded: false,
  });
  const [input, setInput] = useState({
    homeworkQuestionId: homeworkQuestionId,
    homeworkAnswerContent: "",
    homeworkAnswerImages: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getHomeworkDetail(homeworkQuestionId));
  }, []);

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
      setInput({ ...input, homeworkAnswerImages: response.data });
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
    if (input.homeworkAnswerContent === "") alert("내용을 입력해주세요.");
    else {
      console.log(input);
      dispatch(postHomeworkAnswer(input));
    }
  };

  useEffect(() => {
    if (writeStatus === "successed" && input.homeworkAnswerContent !== "") {
      alert("과제 등록에 성공하였습니다.");
      navigate("/homeworkhistory");
    } else if (writeStatus === "failed" && input.homeworkAnswerContent !== "")
      alert("과제 등록에 실패하였습니다.");
  }, [writeStatus]);

  return (
    <div>
      <div className="table items-center h-5/6 w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <div className="text-center font-bold text-3xl mb-5">
            {detailData?.homeworkTitle}
          </div>
          <div className="">
            <div className="flex">
              <h1 className="float-left font-bold">훈련과정명 :</h1>
              <input
                type="text"
                className="float-right ml-3 font-black"
                placeholder={detailData?.bootcampName}
                disabled
              ></input>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">커리큘럼 :</h1>
              <input
                type="text"
                className="float-right ml-3 font-black"
                placeholder={detailData?.curriculumName}
                disabled
              ></input>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">강사님 :</h1>
              <input
                type="text"
                className="float-right ml-3 font-black"
                placeholder={detailData?.teacherName}
                disabled
              ></input>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">스킬셋 :</h1>
              <input
                type="text"
                className="float-right ml-3 font-black"
                placeholder={detailData?.skillSetName}
                disabled
              ></input>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">기간 :</h1>
              <div className="float-right ml-3 font-black">
                <input
                  type="text"
                  className="float-left"
                  placeholder={detailData?.homeworkStartDate}
                  disabled
                ></input>
                <input
                  type="text"
                  className="float-right"
                  placeholder={detailData?.homeworkEndDate}
                  disabled
                ></input>
              </div>
            </div>
            <div className="flex">
              <h1 className="divide-solid float-left font-bold">내용 :</h1>
            </div>
            <div className="w-full whitespace-pre-wrap break-all overflow-auto">
              {detailData?.homeworkContent}
            </div>
            <h1 className="divide-solid float-left font-bold">참고자료 :</h1>
            {imgCheck && (
              <Link
                to={
                  "https://storage.googleapis.com/kookbee-test-strorage/" +
                  detailData?.homeworkImage
                }
              >
                {"https://storage.googleapis.com/kookbee-test-strorage/" +
                  detailData?.homeworkImage}
              </Link>
            )}
            {detailData?.homeworkImage && (
              <img
                src={
                  "https://storage.googleapis.com/kookbee-test-strorage/" +
                  detailData?.homeworkImage
                }
                className="border-2 border-yellow-300 rounded-xl whitespace-pre-wrap break-all overflow-auto p-2 w-40 h-40 font-semibold"
                onError={() => {
                  setImgCheck(true);
                }}
                hidden={imgCheck}
              />
            )}
            <div className="flex">
              <h1 className="divide-solid float-left font-bold">나의 답안 :</h1>
            </div>
            <form onSubmit={onSubmit}>
              <div className="whitespace-pre-wrap break-all overflow-auto">
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    className: "w-full",
                    placeholder: "내용을 입력하세요.",
                  }}
                  value={input.homeworkAnswerContent}
                  onReady={(editor) => {}}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setInput({
                      ...input,
                      homeworkAnswerContent: data,
                    });
                  }}
                ></CKEditor>
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
              </div>
              <div className="flex justify-center mt-10">
                <button className="bg-yellow-300 rounded-lg w-1/4 h-11 mr-20">
                  제출하기
                </button>
                <button
                  type="button"
                  className=" bg-yellow-300 rounded-lg w-1/4 h-11"
                  onClick={() => {
                    navigate("/homeworkhistory");
                  }}
                >
                  뒤로가기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeworkWriteForm;
