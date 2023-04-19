import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../component/main";
import Login from "../component/student/Login";
import StudentSignUp from "../component/student/StudentSignUp";
import HomeworkHistory from "../component/homework/HomeworkHistory";
import HomeworkWrite from "../component/homework/HomeworkWrite";
import HomeworkEdit from "../component/homework/HomeworkEdit";
import HomeworkRead from "../component/homework/HomeworkRead";
import DayOffHistory from "../component/dayOff/DayOffHistory";
import DayOffApply from "../component/dayOff/DayOffApply";
import DayOffClassHistory from "../component/dayOff/DayOffClassHistory";
import ProductHistory from "../component/product/ProductHistory";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<StudentSignUp />} />
          <Route path="/homeworkhistory" element={<HomeworkHistory />} />
          <Route path="/homeworkwrite" element={<HomeworkWrite />} />
          <Route path="/homeworkedit" element={<HomeworkEdit />} />
          <Route path="/homeworkread" element={<HomeworkRead />} />
          <Route path="/dayoffclasshistory" element={<DayOffClassHistory />} />
          <Route path="/dayoffhistory" element={<DayOffHistory />} />
          <Route path="/dayoffapply" element={<DayOffApply />} />
          <Route path="/producthistory" element={<ProductHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
