import { configureStore } from "@reduxjs/toolkit";
import StudentSignUpSlice from "./student/studentSignUpSlice";

export default configureStore({
  reducer: {
    StudentSignUp : StudentSignUpSlice,
  },
});
