import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";
export default () =>
  (store = configureStore({
    reducer,
  }));
