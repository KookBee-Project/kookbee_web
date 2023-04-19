import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../component/main";
import Login from "../component/student/Login";
import StudentSignUp from "../component/student/StudentSignUp";
import HomeworkHistory from "../component/homework/HomeworkHistory";
import HomeworkWrite from "../component/homework/HomeworkWrite";
import HomeworkEdit from "../component/homework/HomeworkEdit";
import HomeworkRead from "../component/homework/HomeworkRead";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
