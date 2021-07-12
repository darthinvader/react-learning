// import store from "./store";
// import { bugAdded, bugResolved } from "./actions";
// const unsubscribe = store.subscribe(() => {
//   console.log("store changed!", store.getState());
// });

// store.dispatch(bugAdded("Bug1"));
// console.log(store.getState());
// store.dispatch(bugResolved(1));

// console.log(store.getState());
// // unsubscribe();

// store.dispatch({
//   type: "bugRemove",
//   payload: {
//     id: 1,
//   },
// });

// console.log(store.getState());

import store from "./customStore";
console.log(store);
