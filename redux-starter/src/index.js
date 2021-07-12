import store from "./store";
import { bugAdded, bugResolved } from "./actions";
const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugAdded("Bug2"));
store.dispatch(bugAdded("Bug3"));
store.dispatch(bugResolved(3));
console.log(store.getState());

console.log(store.getState());

// store.dispatch(bugResolved(1));

// unsubscribe();

// store.dispatch({
//   type: "bugRemove",
//   payload: {
//     id: 1,
//   },
// });

// console.log(store.getState());

// import store from "./customStore";
// import * as actions from "./actions";
// store.subscribe(() => {
//   console.log("store changed");
// });
// store.dispatch(actions.bugAdded("Bug 1"));
// store.dispatch(actions.bugAdded("Bug 2"));

// console.log(store.getState());
