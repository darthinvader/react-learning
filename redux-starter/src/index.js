import configureStore from "./store/configureStore";
import { projectAdded } from "./store/project";
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { userAdded } from "./store/users";

const store = configureStore();

store.dispatch(bugAdded({ description: "Bug1" }));
store.dispatch(bugAdded({ description: "Bug2" }));
store.dispatch(bugAdded({ description: "Bug3" }));
store.dispatch(bugResolved({ id: 3 }));
store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 2 }));
store.dispatch(projectAdded({ name: "New Project" }));

console.log(store.getState());
console.log(getBugsByUser(2)(store.getState()));
