import configureStore from "./store/configureStore";
import { projectAdded } from "./store/project";
import { bugAdded, bugResolved, getUnresolvedBugs } from "./store/bugs";

const store = configureStore();

store.dispatch(bugAdded({ description: "Bug1" }));
store.dispatch(bugAdded({ description: "Bug2" }));
store.dispatch(bugAdded({ description: "Bug3" }));
store.dispatch(bugResolved({ id: 3 }));
store.dispatch(projectAdded({ name: "New Project" }));

const unresolvedBugs = getUnresolvedBugs(store.getState());

console.log(unresolvedBugs);
