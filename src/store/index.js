import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import StudentSignUpSlice from "./student/studentSignUpSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    StudentSignUp : StudentSignUpSlice,
  },
});
