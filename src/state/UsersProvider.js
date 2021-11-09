/**
 * Note: This should be 2 Providers:
 * 1. UserProvier
 * 2. LoginStatusProvider
 */

// NPM packages
import { createContext, useContext, useState, useReducer } from "react";

//Project files
import usersReducer from "./usersReducer";

// Properties
const UserContext = createContext(null);

export function UserProvider({ children }) {
  // Local state
  const [user, setUser] = useState({
    name: "snehal",
    email: "snehal@mail.com",
    role: "student"
  });
  const [isLogged, setIsLogged] = useState(false);
  const [users, dispatchUsers] = useReducer(usersReducer, []);
  return (
    <UserContext.Provider value={{ user, setUser, isLogged, setIsLogged, users, dispatchUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UserContext);

  return context;
}
