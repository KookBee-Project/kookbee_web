import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const MyCalendarView = ({ data, status, setMode }) => {
  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      {status === "successed" && (
        <div className="flex flex-col items-center w-full h-full mt-10">
          <div className="text-center border-b-2 border-gray-100 pb-5 w-5/6 font-bold text-3xl">
            나의 일정
          </div>
          <div className="w-5/6 h-full">
            <FullCalendar
              defaultView="dayGridMonth"
              plugins={[dayGridPlugin, interactionPlugin]}
              events={data}
            />
            <div className="w-full flex justify-center">
              <button
                className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
                onClick={() => {
                  setMode("table");
                }}
              >
                표로 보기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCalendarView;
