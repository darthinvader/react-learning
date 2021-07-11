import store from "./store";

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "BUG1",
  },
});

store.dispatch({
  type: "bugRemove",
  payload: {
    id: 1,
  },
});

console.log(store.getState());
