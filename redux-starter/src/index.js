import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { createStore } from "redux";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch(actions.bugAdded("Bug1"));
store.dispatch(actions.bugAdded("Bug2"));
store.dispatch(actions.bugAdded("Bug3"));
store.dispatch(actions.bugResolved(3));
console.log(store.getState());

console.log(store.getState());
