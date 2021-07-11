import store from "./store";
import { bugAdded } from "./actions";
// const unsubscribe = store.subscribe(() => {
//   console.log("store changed!", store.getState());
// });

store.dispatch(bugAdded("Bug1"));

// unsubscribe();

// store.dispatch({
//   type: "bugRemove",
//   payload: {
//     id: 1,
//   },
// });

// console.log(store.getState());
