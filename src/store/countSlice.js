import { createSlice } from "@reduxjs/toolkit";
import { login } from "./countAction";

const initialState = {
  isLoading: null,
  error: null,
  user: {
    user_id: null,
    token: null
  },
  count: null
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    favorite: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.user.user_id = payload.user.id;
      state.user.token = payload.token;
    });
    // builder.addCase(getCount.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(getCount.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // });
    // builder.addCase(getCount.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.count = payload.message;
    // });
  },
});

export const { favorite } = movieSlice.actions;
export default movieSlice.reducer;