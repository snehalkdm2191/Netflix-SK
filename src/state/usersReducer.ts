//@ts-nocheck
export default function usersReducer(state, action) {
  switch (action.type) {
    case "UPDATE_USER":
      return updateUser(state, action);
    case "SET_DATA":
      return setUsers(state, action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function updateUser(state, action) {
  const { payload } = action;
  const newState = [...state];
  const index = newState.findIndex((item) => item.id === payload.id);

  newState[index] = { ...payload };
  return newState;
}

function setUsers(state, action) {
  const { payload } = action;
  return payload;
}
