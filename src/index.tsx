import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ItemsProvider } from "./state/ItemsProvider";
import { UserProvider } from "./state/UsersProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ItemsProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ItemsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
