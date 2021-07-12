import configureStore from "./store/configureStore";
import { projectAdded } from "./store/project";
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { userAdded } from "./store/users";

// const store = configureStore();

// store.dispatch(bugAdded({ description: "Bug1" }));
// store.dispatch(bugAdded({ description: "Bug2" }));
// store.dispatch(bugAdded({ description: "Bug3" }));
// store.dispatch(bugResolved({ id: 3 }));
// store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 2 }));
// store.dispatch(projectAdded({ name: "New Project" }));

// console.log(store.getState());
// console.log(getBugsByUser(2)(store.getState()));

// example without redux toolkit
// import { createStore, applyMiddleware } from "redux";
// import reducer from "./store/reducer";
// import logger from "./store/middleware/logger";

// const store = createStore(reducer, applyMiddleware(logger));

// Dispatching Functions
// const store = configureStore();

// store.dispatch((dispatch, getState) => {
//   // Call an API
//   // When promise is resolved => dispatch()
//   dispatch({ type: "bug", bugs: [1, 2, 3] });
//   console.log(getState());
//   // If promise is Rejected => dispatch()
// });

const store = configureStore();
store.dispatch({
  type: "error",
  payload: { message: "An error occured" },
});
