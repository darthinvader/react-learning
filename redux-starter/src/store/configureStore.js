import { configureStore } from "@reduxjs/toolkit";
import reducer from "./project";

export default () =>
  configureStore({
    reducer,
  });
