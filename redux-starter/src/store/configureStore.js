import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import error from "./middleware/error";

export default () =>
  configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger("console"), error],
  });
