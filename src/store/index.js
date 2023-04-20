import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import StudentSignUpSlice from "./student/studentSignUpSlice";
import dayOffSlice from "./dayoff/dayOffSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    StudentSignUp: StudentSignUpSlice,
    dayOff: dayOffSlice,
  },
});
