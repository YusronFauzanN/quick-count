import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";

const store = configureStore({
  reducer: countSlice,
});

store.subscribe(() => {
  console.log("Store changed! ", store.getState());
});

export default store;