import { useState } from "react";
import { Link } from "react-router-dom";

const ImgUpload = ({ file, loaded, delFile, fileURL, fileChange }) => {
  const [imgCheck, setImgCheck] = useState(false);
  return (
    <>
      {file.type?.includes("image") ? (
        <div className="flex justify-center">
          {loaded === true && (
            <>
              {imgCheck && <Link to={fileURL}>{fileURL}</Link>}
              <img
                src={fileURL}
                className="w-48 h-48"
                onError={() => {
                  setImgCheck(true);
                }}
                hidden={imgCheck}
              ></img>
            </>
          )}
        </div>
      ) : (
        <div className="text-center">{file.name}</div>
      )}
      <div className="flex flex-col items-center">
        <label
          htmlFor="fileInput"
          className="text-sm font-bold bg-yellow-200 mx-2 mt-3 py-3 px-5 rounded-md shadow-sm shadow-cyan-900 hover:cursor-pointer focus:shadow-none"
        >
          파일 선택
          <input
            id="fileInput"
            className="hidden"
            type="file"
            onChange={(e) => {
              fileChange(e);
            }}
          />
        </label>
        {fileURL && (
          <label
            htmlFor="delFile"
            className="text-sm font-bold bg-red-200 mx-2 mt-3 p-1 rounded-md shadow-sm shadow-cyan-900 hover:cursor-pointer focus:shadow-none"
          >
            삭제하기
            <input
              id="delFile"
              className="hidden"
              type="button"
              onClick={() => {
                delFile();
              }}
            />
          </label>
        )}
      </div>
    </>
  );
};
export default ImgUpload;
