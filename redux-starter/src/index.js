import configureStore from "./store/configureStore";
import * as actions from "./store/project";
import * as actions2 from "./store/bugs";
import { createStore } from "redux";

const store = configureStore();

// const unsubscribe = store.subscribe(() => {
//   console.log("store changed!", store.getState());
// });

store.dispatch(actions2.bugAdded({ description: "Bug1" }));
store.dispatch(actions2.bugAdded({ description: "Bug2" }));
store.dispatch(actions2.bugAdded({ description: "Bug3" }));
store.dispatch(actions2.bugResolved({ id: 3 }));
// console.log(store.getState());

// console.log(store.getState());

store.dispatch(actions.projectAdded({ name: "New Project" }));
console.log(store.getState());
