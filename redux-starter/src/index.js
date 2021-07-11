import store from "./store";
import * as actions from "./actionTypes";
import { bindActionCreators } from "redux";
// const unsubscribe = store.subscribe(() => {
//   console.log("store changed!", store.getState());
// });

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "BUG1",
  },
});

// unsubscribe();

// store.dispatch({
//   type: "bugRemove",
//   payload: {
//     id: 1,
//   },
// });

// console.log(store.getState());
