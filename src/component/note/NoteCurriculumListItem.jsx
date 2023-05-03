import { useNavigate } from "react-router-dom";

const NoteCurriculumListItem = () => {
  const curriculumList = [
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

  const setNavigate = (curriculumId, noteId) => {
    noteId
      ? navigate(`/portfolio/note/edit/${noteId}`)
      : navigate(`/portfolio/note/write/${curriculumId}`);
  };

  const getStatus = (curriculumId, noteId) => {
    if (noteId === null)
      return (
        <td
          className="p-1 hover:cursor-pointer"
          onClick={() => navigate(`/portfolio/note/write/${curriculumId}`)}
        >
          작성하기
        </td>
      );
    return (
      <td
        className="p-1 hover:cursor-pointer"
        onClick={() => navigate(`/portfolio/note/edit/${noteId}`)}
      >
        수정하기
      </td>
    );
  };
  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">진행중인 부트캠프</div>
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
                <td>상태</td>
              </tr>
            </thead>
            <tbody className="text-center border-2 border-black ">
              {curriculumList?.map((el) => (
                <tr key={el.curriculumId}>
                  <td
                    className="p-1 hover:cursor-pointer"
                    onClick={() => setNavigate(el.curriculumId, el.noteId)}
                  >
                    {el.curriculumName}
                  </td>
                  <td className="p-1">{el.curriculumStartDate}</td>
                  <td className="p-1">{el.curriculumEndDate}</td>
                  <td className="p-1">{el.bootcampTitle}</td>
                  <td className="p-1">{el.skillSet}</td>
                  {getStatus(el.curriculumId, el.noteId)}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default NoteCurriculumListItem;
