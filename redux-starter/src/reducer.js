// []
import * as actions from "./actionTypes";
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVE:
      return [
        ...state.filter((bug) => {
          bug.id !== action.payload.id;
        }),
      ];
    case actions.BUG_RESOLVE:
      console.log("Hello");
      return [
        ...state.map((bug) => {
          bug.id === action.payload.id ? (bug.resolved = true) : bug;
          return bug;
        }),
      ];
    default:
      return state;
  }
  // if else if way
  // if (action.type === "bugAdded") {
  //   return [
  //     ...state,
  //     {
  //       id: ++lastId,
  //       description: action.payload.description,
  //       resolved: false,
  //     },
  //   ];
  // } else if (action.type === "bugRemoved") {
  //   return [
  //     ...state.filter((bug) => {
  //       bug.id !== action.payload.id;
  //     }),
  //   ];
  // }
  // return state;
}
