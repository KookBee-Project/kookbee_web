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
import BootCamp from "../component/bootcamp/Bootcamp";
import BootcampAdd from "../component/bootcamp/BootcampAdd";
import NoteWrite from "../component/note/NoteWrite";
import NoteList from "../component/note/NoteList";
import NoteCurriculumList from "../component/note/NoteCurriculumList";
import NoteDetail from "../component/note/NoteDetail";
import NoteEdit from "../component/note/NoteEdit";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<StudentSignUp />} />
          <Route path="/bootcamp" element={<BootCamp />} />
          <Route path="/bootcamp/add" element={<BootcampAdd />} />
          <Route path="/homeworkhistory" element={<HomeworkHistory />} />
          <Route
            path="/homeworkwrite/:homeworkQuestionId"
            element={<HomeworkWrite />}
          />
          <Route
            path="/homeworkedit/:homeworkAnswerId"
            element={<HomeworkEdit />}
          />
          <Route
            path="/homeworkread/:homeworkAnswerId"
            element={<HomeworkRead />}
          />
          <Route path="bootcamp/dayoff" element={<DayOffClassHistory />} />
          <Route
            path="bootcamp/dayoff/:bootcampId"
            element={<DayOffHistory />}
          />
          <Route
            path="bootcamp/dayoff/:bootcampId/apply"
            element={<DayOffApply />}
          />
          <Route path="/producthistory" element={<ProductHistory />} />
          <Route path="/portfolio/note" element={<NoteCurriculumList />} />
          <Route path="/portfolio/note/:curriculumId" element={<NoteList />} />
          <Route
            path="/portfolio/note/write/:curriculumId"
            element={<NoteWrite />}
          />
          <Route
            path="/portfolio/note/detail/:noteId"
            element={<NoteDetail />}
          />
          <Route path="/portfolio/note/edit/:noteId" element={<NoteEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
