//@ts-nocheck
export default function ItemsReducer(state, action) {
  switch (action.type) {
    case "CREATE_ITEM":
      return createItem(state, action);
    case "UPDATE_ITEM":
      return updateItem(state, action);
    case "SET_DATA":
      return setItem(action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}
function createItem(state, action) {
  const { payload } = action;
  return [...state, payload];
}

function updateItem(state, action) {
  const { payload } = action;
  const newState = [...state];
  const index = newState.findIndex((item) => item.id === payload.id);

  newState[index] = { ...payload };
  return newState;
}

function setItem(action) {
  const { payload } = action;
  return payload;
}
