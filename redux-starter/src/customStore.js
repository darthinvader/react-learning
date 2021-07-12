import reducer from "./reducer";

function createStore(reducer) {
  let state;

  function dispatch(action) {
    // Call the reducer to get the new state
    state = reducer(state, action);
    // Notify the subscribe
  }

  function getState() {
    return state;
  }

  return {
    getState,
    dispatch,
  };
}
export default createStore(reducer);
