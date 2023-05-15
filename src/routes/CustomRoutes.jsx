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
import MyProjectList from "../component/project/MyProjectList";
import ProjectDetail from "../component/project/ProjectDetail";
import AllProjectList from "../component/project/AllProjectList";
import ProjectCreate from "../component/project/ProjectCreate";
import ProjectBootcampList from "../component/project/ProjectBootcampList";
import ProjectJoin from "../component/project/ProjectJoin";
import ProjectEdit from "../component/project/ProjectEdit";

import Notification from "../component/notification/Notification";
import NotificationList from "../component/notification/NotificationList";
import NotificationDetail from "../component/notification/NotificationDetail";

import QNA from "../component/QNA/QNA";
import QNAList from "../component/QNA/QNAList";
import QNADetail from "../component/QNA/QNADetail";
import QNACreate from "../component/QNA/QNACreate";

import StudyRegist from "../component/portfolio/study/StudyRegister";
import FindStudy from "../component/portfolio/study/FindStudy";
import StudyMain from "../component/portfolio/study/StudyMain";
import StudyDetail from "../component/portfolio/study/StudyDetail";
import LectureRegister from "../component/portfolio/study/lecture/LectureRegister";
import StudyRegister from "../component/portfolio/study/StudyRegister";
import PostRegister from "../component/portfolio/study/lecture/PostRegister";
import LectureDetail from "../component/portfolio/study/lecture/LectureDetail";
import PostDetail from "../component/portfolio/study/lecture/PostDetail";
import StudyApply from "../component/portfolio/study/apply/StudyApply";
import StudyApplyHistory from "../component/portfolio/study/apply/StudyApplyHistory";
import ApplyDetail from "../component/portfolio/study/apply/ApplyDetail";
import MyPage from "../component/mypage/MyPage";
import ChangeInfo from "../component/mypage/ChangeInfo";

import MyCalendar from "../component/Calendar/MyCalendar";

import EatingTogether from "../component/eatingTogether/EatingTogether";
import Fighting from "../component/fighting/Fighting";
import FightingList from "../component/fighting/FightingList";
import FightingCreate from "../component/fighting/FightingCreate";
import TipDetail from "../component/tips/TipDetail";
import TipCreate from "../component/tips/TipCreate";
import TipList from "../component/tips/TipList";
import PostRestaurant from "../component/eatingTogether/PostRestaurant";
import GetRestaurant from "../component/eatingTogether/GetRestaurant";
import PostWriting from "../component/eatingTogether/PostWriting";
import EatingTogetherPostDetail from "../component/eatingTogether/EatingTogetherPostDetail";
import Tips from "../component/tips/Tips";
import ErrorCreate from "../component/errorShare/ErrorCreate";
import ErrorList from "../component/errorShare/ErrorList";
import Error from "../component/errorShare/Error";
import ErrorDetail from "../component/errorShare/ErrorDetail";
import FightingDetail from "../component/fighting/FightingDetail";
import Home from "../component/home/Home";
import DashBoard from "../component/mypage/DashBoard";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<StudentSignUp />} />
          <Route path="my/" element={<MyPage />}>
            <Route path="" element={<DashBoard />} />
            <Route path="changeinfo" element={<ChangeInfo />} />
          </Route>
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

          <Route path="/portfolio/project" element={<ProjectBootcampList />} />
          <Route path="/portfolio/project/my" element={<MyProjectList />} />
          <Route
            path="/portfolio/project/detail/:projectId"
            element={<ProjectDetail />}
          />
          <Route
            path="/portfolio/project/all/:bootcampId"
            element={<AllProjectList />}
          />
          <Route
            path="/portfolio/project/create/:bootcampId"
            element={<ProjectCreate />}
          />
          <Route path="/portfolio/project/join" element={<ProjectJoin />} />
          <Route
            path="/portfolio/project/edit/:projectId"
            element={<ProjectEdit />}
          />
          <Route path="/portfolio/study" element={<StudyMain />} />
          <Route path="/portfolio/study/register" element={<StudyRegister />} />
          <Route path="/portfolio/study/findstudy" element={<FindStudy />} />
          <Route
            path="/portfolio/study/studydetail/:groupStudyId"
            element={<StudyDetail />}
          />
          <Route
            path="/portfolio/study/:groupStudyId/lecture/register"
            element={<LectureRegister />}
          />
          <Route
            path="/portfolio/study/:groupStudyId/lecture/:lectureId/detail"
            element={<LectureDetail />}
          />
          <Route
            path="/portfolio/study/:groupStudyId/lecture/:lectureId/post/register"
            element={<PostRegister />}
          />
          <Route
            path="/portfolio/study/:groupStudyId/lecture/:lectureId/post/:groupStudyPostId"
            element={<PostDetail />}
          />
          <Route
            path="/portfolio/study/:groupStudyId/apply"
            element={<StudyApply />}
          />
          <Route
            path="/portfolio/study/apply"
            element={<StudyApplyHistory />}
          />
          <Route
            path="/portfolio/study/apply/:groupStudyApplyId"
            element={<ApplyDetail />}
          />

          <Route path="notification/" element={<Notification />}>
            <Route path="" element={<NotificationList />} />
            <Route
              path=":bootcampId/:notificationId"
              element={<NotificationDetail />}
            />
          </Route>

          <Route path="QNA/" element={<QNA />}>
            <Route path="" element={<QNAList />} />
            <Route path="insert/:bootcampId" element={<QNACreate />} />
            <Route path=":bootcampId/:notificationId" element={<QNADetail />} />
          </Route>
          <Route path="error/" element={<Error />}>
            <Route path="" element={<ErrorList />} />
            <Route path="insert/:bootcampId" element={<ErrorCreate />} />
            <Route
              path=":bootcampId/:notificationId"
              element={<ErrorDetail />}
            />
          </Route>
          <Route path="tip/" element={<Tips />}>
            <Route path="" element={<TipList />} />
            <Route path="insert/:bootcampId" element={<TipCreate />} />
            <Route path=":bootcampId/:notificationId" element={<TipDetail />} />
          </Route>
          <Route path="fighting/" element={<Fighting />}>
            <Route path="" element={<FightingList />} />
            <Route path="insert/:bootcampId" element={<FightingCreate />} />
            <Route
              path=":bootcampId/:notificationId"
              element={<FightingDetail />}
            />
          </Route>

          <Route path="/calendar" element={<MyCalendar />} />
          <Route
            path="/bootcamp/eatingtogether/:bootcampId"
            element={<EatingTogether />}
          />

          <Route
            path="/bootcamp/eatingtogether/postrestaurant"
            element={<PostRestaurant />}
          />
          <Route
            path="/bootcamp/eatingtogether/getrestaurant/:bootcampId"
            element={<GetRestaurant />}
          />
          <Route
            path="/bootcamp/eatingtogether/postwriting/:bootcampId"
            element={<PostWriting />}
          />
          <Route
            path="/bootcamp/eatingtogether/postdetail/:eatingTogetherId"
            element={<EatingTogetherPostDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
