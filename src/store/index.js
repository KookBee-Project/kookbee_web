import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import StudentSignUpSlice from "./student/studentSignUpSlice";
import productSlice from "./product/productSlice";
import dayOffSlice from "./dayoff/dayOffSlice";
import bootcampSlice from "./bootcamp/bootcampSlice";
import bootcampNameSlice from "./bootcamp/bootcampNameSlice";
import homeworkSlice from "./homework/HomeworkSlice";
import noteSlice from "./note/noteSlice";
import projectSlice from "./project/projectSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    StudentSignUp: StudentSignUpSlice,
    product: productSlice,
    StudentSignUp: StudentSignUpSlice,
    dayOff: dayOffSlice,
    bootcamp: bootcampSlice,
    bootcampName: bootcampNameSlice,
    homework: homeworkSlice,
    note: noteSlice,
    project: projectSlice,
  },
});
