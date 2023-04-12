import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../component/main";
import StudentSignUp from "../component/student/StudentSignUp";

const CustomRoute = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/signup" element={<StudentSignUp/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
export default CustomRoute;