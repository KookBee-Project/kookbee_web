import HTMLReactParser from "html-react-parser";

const NoteDetailForm = () => {
  const detailData = {
    noteTitle: "오늘은 자바를 배웠다.",
    noteContent:
      '<h2>안녕하세요!</h2><h3>오늘은 자바에 대해 공부를 할거에요!!</h3><ol><li>자바의 기초</li><li>자바의 기원</li><li>자바의 기능</li><li>자바의 효능</li></ol><p>야호</p><p>만만세</p><p>@@@@@@@@@@@@@@@@@@@@@@@</p><p><a href="참고">참고</a></p>',
    noteImage: "22d0832a-d4e8-411c-a4d8-ff403941a2a4",
  };
  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">detail</div>
        <div>{detailData.noteTitle}</div>
        <div className="ck-content">
          {HTMLReactParser(detailData.noteContent)}
        </div>
        <img
          src={
            "https://storage.googleapis.com/kookbee-test-strorage/" +
            detailData.noteImage
          }
        />
      </div>
    </div>
  );
};

export default NoteDetailForm;
