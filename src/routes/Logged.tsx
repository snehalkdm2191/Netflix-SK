// NPM packages
import { Route } from "react-router-dom";
import { useUsers } from "../state/UsersProvider";

// Project files
import Member from "../pages/user/Home";
import Admin from "../pages/admin/AdminHome";
import Items from "../pages/admin/Items";
import Series from "../components/user/Series";
import Movies from "../components/user/Movies";
import VideoFrame from "../components/user/VideoFrame";
import LoginPage from "../pages/auth/login";
import LogoutPage from "../pages/auth/logout";

export default function Logged() {
  const { user }: any = useUsers();

  const MainComponent = user.role === "admin" ? Admin : Member; // And here we would have detected the problem with names.
  // We mentioned before Admin and Member are names for objects not pages, so this should be called AdminPage and MemberPage -1

  return (
    <>
      <Route component={LoginPage} exact path="/" />
      {/* Refactoring -1 */}
      {/* If both Admin and Member go to /main then you could have made the code like this */}
      {/* <Route component={MainComponent} exact path="/main" /> */}
      {user.role === "admin" ? (
        <Route component={Admin} exact path="/main" />
      ) : (
        <Route component={Member} exact path="/main" />
      )}
      <Route component={Items} path="/item/:id" />
      <Route component={Series} path="/series" />
      <Route component={Movies} path="/movies" />
      <Route component={VideoFrame} path="/video/:id" />
      <Route component={LoginPage} exact path="/login" />
      <Route component={LogoutPage} path="/logout" />
    </>
  );
}
