// Action Types
const BUG_ADDED = "bugAdded";
const BUG_REMOVE = "bugRemove";
const BUG_RESOLVE = "bugResolve";

// Action creators
export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    description,
  },
});

export const bugResolved = (id) => ({
  type: BUG_RESOLVE,
  payload: {
    id,
  },
});

// Reducer
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVE:
      return [
        ...state.filter((bug) => {
          bug.id !== action.payload.id;
        }),
      ];
    case BUG_RESOLVE:
      console.log("Hello");
      return [
        ...state.map((bug) =>
          bug.id === action.payload.id ? { ...bug, resolved: true } : bug
        ),
      ];
    default:
      return state;
  }
}
