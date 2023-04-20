import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import StudentSignUpSlice from "./student/studentSignUpSlice";
import productSlice from "./product/productSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    StudentSignUp : StudentSignUpSlice,
    product : productSlice,
  },
});
