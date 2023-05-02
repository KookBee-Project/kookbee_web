import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getHomeworkAnswerDetail,
  updateHomeworkAnswer,
} from "../../store/homework/HomeworkSlice";
import ImgUpload from "../imageUpload/ImgUpload";
import { api } from "../../api/api";

const HomeworkEditForm = () => {
  const { answerDetailData, updateStatus } = useSelector(
    (state) => state.homework
  );
  const { homeworkAnswerId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState({
    file: "",
    fileName: "",
    fileURL: "",
    loaded: false,
  });
  const [input, setInput] = useState({
    homeworkAnswerId: homeworkAnswerId,
    homeworkAnswerContent: "",
    homeworkAnswerImages: "",
  });

  useEffect(() => {
    dispatch(getHomeworkAnswerDetail(homeworkAnswerId));
  }, []);

  useEffect(() => {
    setInput({
      ...input,
      homeworkAnswerContent: answerDetailData.homeworkAnswerContent,
      homeworkAnswerImages: answerDetailData.homeworkAnswerImages,
    });
    setFile({
      ...file,
      file: { type: "image" },
      fileURL: answerDetailData.homeworkAnswerImages,
      loaded: true,
    });
  }, [answerDetailData]);

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
      dispatch(updateHomeworkAnswer(input));
    }
  };

  useEffect(() => {
    if (updateStatus === "successed" && input.homeworkAnswerContent !== "") {
      alert("수정이 완료되었습니다.");
      navigate("/homeworkhistory");
    } else if (updateStatus === "failed" && input.homeworkAnswerContent !== "")
      alert("수정에 실패했습니다.");
  }, [updateStatus]);

  return (
    <div>
      <div className="table items-center h-5/6 w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <div className="text-center font-bold text-3xl mb-5">
            {answerDetailData?.homeworkQuestionTitle}
          </div>
          <div>
            <div className="flex">
              <h1 className="float-left font-bold">훈련과정명 :</h1>
              <div>{answerDetailData?.bootcampName}</div>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">커리큘럼 :</h1>
              <div>{answerDetailData?.curriculumName}</div>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">강사님 :</h1>
              <div>{answerDetailData?.teacherName}</div>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">스킬셋 :</h1>
              <div>{answerDetailData?.skillSetName}</div>
            </div>
            <div className="flex">
              <h1 className="float-left font-bold">기간 :</h1>
              <div className="float-right ml-3 font-black">
                <div className="float-left">
                  {answerDetailData?.homeworkQuestionStartDate}
                </div>
                <div>~</div>
                <div className="float-right">
                  {answerDetailData?.homeworkQuestionEndDate}
                </div>
              </div>
            </div>
            <div className="flex">
              <h1 className="divide-solid float-left font-bold">내용 :</h1>
            </div>
            <div>
              <div className="whitespace-pre-wrap break-all overflow-auto">
                {answerDetailData?.homeworkQuestionContent}
              </div>
            </div>
            <div className="flex">
              <h1 className="divide-solid float-left font-bold">나의 답안 :</h1>
            </div>
            <form onSubmit={onSubmit}>
              <div className="whitespace-pre-wrap break-all overflow-auto">
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    className: "w-full",
                  }}
                  data={answerDetailData.homeworkAnswerContent}
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
                <button className="bg-yellow-300 rounded-lg w-44 h-11 mr-20">
                  수정하기
                </button>
                <div className=" bg-yellow-300 rounded-lg w-44 h-11 text-center">
                  <Link to={"/homeworkhistory"}>뒤로가기</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeworkEditForm;
