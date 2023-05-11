const MyTableView = ({ data, status, setMode }) => {
  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      {status === "successed" && (
        <div className="flex flex-col items-center w-full h-full mt-10">
          <div className="text-center border-b-2 border-gray-100 pb-5 w-5/6 font-bold text-3xl">
            나의 일정
          </div>
          <div className="flex flex-col justify-center w-5/6 h-5/6">
            <table className="my-10 min-w-30">
              <thead className="font-bold text-center">
                <tr>
                  <td>커리큘럼명</td>
                  <td>시작일</td>
                  <td>종료일</td>
                  <td>부트캠프</td>
                  <td>스킬셋</td>
                  <td>강사</td>
                </tr>
              </thead>
              <tbody className="text-center border-2 border-black ">
                {data?.map((el) => (
                  <tr key={el.curriculumId}>
                    <td className="p-1">{el.title}</td>
                    <td className="p-1">{el.start}</td>
                    <td className="p-1">{el.end}</td>
                    <td className="p-1">{el.bootcampTitle}</td>
                    <td className="p-1">{el.skillSetName}</td>
                    <td className="p-1">{el.teacherName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-full flex justify-center">
              <button
                className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
                onClick={() => {
                  setMode("calendar");
                }}
              >
                캘린더로 보기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTableView;
