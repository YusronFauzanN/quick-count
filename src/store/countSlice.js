import { createSlice } from "@reduxjs/toolkit";
import { login } from "./countAction";

const initialState = {
  isLoading: null,
  error: null,
  movies: {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
  },
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
      state.movies.popularMovies = payload.results;
    });
  },
});

export const { favorite } = movieSlice.actions;
export default movieSlice.reducer;