import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import StudentSignUpSlice from "./student/studentSignUpSlice";
import productSlice from "./product/productSlice";
import dayOffSlice from "./dayoff/dayOffSlice";
import bootcampSlice from "./bootcamp/bootcampSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    StudentSignUp: StudentSignUpSlice,
    product: productSlice,
    StudentSignUp: StudentSignUpSlice,
    dayOff: dayOffSlice,
    bootcamp: bootcampSlice,
  },
});
