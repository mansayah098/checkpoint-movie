import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/MovieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
});
