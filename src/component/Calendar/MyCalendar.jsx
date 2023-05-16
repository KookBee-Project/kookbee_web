import { useDispatch, useSelector } from "react-redux";
import BootcampSideBar from "../sidebar/BootcampSideBar";
import MyCalendarView from "./MyCalendarView";
import MyTableView from "./MyTableView";
import { useState } from "react";
import { useEffect } from "react";
import { getCurriculum } from "../../store/curriculum/curriculumSlice";

const MyCalendar = () => {
  const { selectData } = useSelector((state) => state.bootcampName);
  const { data, status } = useSelector((state) => state.curriculum);
  const [mode, setMode] = useState("calendar");

  const dispatch = useDispatch();

  useEffect(() => {
    selectData != undefined && dispatch(getCurriculum(selectData));
  }, [selectData]);

  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <BootcampSideBar />
        {mode === "calendar" ? (
          <MyCalendarView data={data} status={status} setMode={setMode} />
        ) : (
          <MyTableView data={data} status={status} setMode={setMode} />
        )}
      </div>
    </div>
  );
};
export default MyCalendar;
