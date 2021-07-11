import * as actions from "./actionTypes";

export const bugAdded = (description) =>
  store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
      description,
    },
  });
