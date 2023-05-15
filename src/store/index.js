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

import studySlice from "./portfolio/study/studySlice";
import applySlice from "./portfolio/study/applySlice";

import notificationSlice from "./notification/notificationSlice";

import curriculumSlice from "./curriculum/curriculumSlice";
import pageSlice from "./portfolio/study/pageSlice";
import EatingTogetherSlice from "./eatingTogether/EatingTogetherSlice";
import homeStudySlice from "./home/homeStudySlice";
import homeProjectSlice from "./home/homeProjectSlice";

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
    study: studySlice,
    page: pageSlice,
    apply: applySlice,
    notification: notificationSlice,
    curriculum: curriculumSlice,
    eatingTogether: EatingTogetherSlice,
    homeStudy: homeStudySlice,
    homeProject: homeProjectSlice,
  },
});
