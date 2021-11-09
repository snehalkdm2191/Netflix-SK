//@ts-nocheck
import { createContext, useReducer, useContext } from "react";
//Project files
import ItemsReducer from "./ItemsReducer";

const ItemsContext = createContext(null);

export function ItemsProvider({ children }) {
  // Local state
  const [Items, dispatchItems] = useReducer(ItemsReducer, []);

  return (
    <ItemsContext.Provider value={{ Items, dispatchItems }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  return useContext(ItemsContext);
}
