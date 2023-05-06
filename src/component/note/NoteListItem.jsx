import { useNavigate } from "react-router-dom";

const NoteListItem = () => {
  const NoteList = [
    {
      curriculumId: 1,
      curriculumName: "자바 쌉고수 되기",
      curriculumStartDate: "2023-04-15",
      curriculumEndDate: "2023-05-09",
      bootcampTitle: "JAVA Springboot",
      skillSet: "JAVA",
      noteId: 1,
    },
    {
      curriculumId: 2,
      curriculumName: "자바 쌉고수 되기",
      curriculumStartDate: "2023-04-15",
      curriculumEndDate: "2023-05-09",
      bootcampTitle: "JAVA Springboot",
      skillSet: "JAVA",
      noteId: 2,
    },
    {
      curriculumId: 3,
      curriculumName: "자바 쌉고수 되기",
      curriculumStartDate: "2023-04-15",
      curriculumEndDate: "2023-05-09",
      bootcampTitle: "JAVA Springboot",
      skillSet: "JAVA",
      noteId: null,
    },
    {
      curriculumId: 4,
      curriculumName: "자바 쌉고수 되기",
      curriculumStartDate: "2023-04-15",
      curriculumEndDate: "2023-05-09",
      bootcampTitle: "JAVA Springboot",
      skillSet: "JAVA",
      noteId: 4,
    },
    {
      curriculumId: 5,
      curriculumName: "자바 쌉고수 되기",
      curriculumStartDate: "2023-04-15",
      curriculumEndDate: "2023-05-09",
      bootcampTitle: "JAVA Springboot",
      skillSet: "JAVA",
      noteId: 8,
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">진행중인 부트캠프</div>
        {NoteList.length === 0 ? (
          "작성하신 수업노트가 없군요"
        ) : (
          <table className="my-10">
            <thead className="font-bold text-center">
              <tr>
                <td>노트 제목</td>
                <td>작성일</td>
                <td>부트캠프</td>
                <td>스킬셋</td>
                <td>상태</td>
              </tr>
            </thead>
            <tbody className="text-center border-2 border-black ">
              {NoteList?.map((el) => (
                <tr key={el.curriculumId}>
                  <td
                    className="p-1 hover:cursor-pointer"
                    onClick={() => {
                      navigate(`/portfolio/note/detail/${el.noteId}`);
                    }}
                  >
                    {el.curriculumName}
                  </td>
                  <td className="p-1">{el.noteCreatedAt}</td>
                  <td className="p-1">{el.bootcampTitle}</td>
                  <td className="p-1">{el.skillSet}</td>
                  <td
                    className="p-1 hover:cursor-pointer"
                    onClick={() =>
                      navigate(`/portfolio/note/edit/${el.noteId}`)
                    }
                  >
                    수정하기
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default NoteListItem;
