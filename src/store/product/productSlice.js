import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
  offerData: [],
  rentalData: [],
};

export const getOfferProduct = createAsyncThunk(
  "/product/offerproduct",
  async () => {
    const response = await api("GET", "/class/product/offerproduct");
    console.log(response.data);
    return response.data;
  }
);

export const getRentalProduct = createAsyncThunk(
  "/product/rentalproduct",
  async () => {
    const response = await api("GET", "/class/product/rentalproduct");
    console.log(response.data);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getOfferProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getOfferProduct.fulfilled, (state, action) => {
        state.status = "successed";
        state.offerData = action.payload;
      })
      .addCase(getOfferProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getRentalProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRentalProduct.fulfilled, (state, action) => {
        state.status = "successed";
        state.rentalData = action.payload;
      })
      .addCase(getRentalProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default productSlice.reducer;
