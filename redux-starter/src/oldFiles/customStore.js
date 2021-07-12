import reducer from "../reducer";

function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    // Call the reducer to get the new state
    state = reducer(state, action);
    // Notify the subscribe
    listeners.forEach((listener) => listener());
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    getState,
    dispatch,
  };
}
export default createStore(reducer);
