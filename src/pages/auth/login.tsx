import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ErrorText from "../../components/ErrorText";
import { auth, Providers } from "../../config/firebase";
import logging from "../../config/logging";
import { useUsers } from "../../state/UsersProvider";
import { getDocument } from "../../scripts/fireStore";

export default function LoginPage() {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { setUser, setIsLogged }: any = useUsers();

  const history = useHistory();

  async function signInWithEmailAndPassword() {
    if (error !== "") setError("");

    setAuthenticating(true);

    Providers.signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        logging.info(result);
        onSuccess(result.user.uid);
        history.push("/main");
      })
      .catch((error) => {
        logging.error(error);
        setAuthenticating(false);
        setError(error.message);
      });
  }

  async function onSuccess(uid: string) {
    const document = await getDocument("users", uid);
    setUser(document);
    console.log("document", document);
    setIsLogged(true);
  }

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="login-container">
        <div className="login-form">
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <input
            autoComplete="new-password"
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <button
            className="loginButton"
            disabled={authenticating}
            color="success"
            onClick={() => signInWithEmailAndPassword()}
          >
            Login
          </button>
          <span>
            New to Netflix?
            <b>
              <Link to="/signUp">Sign up now</Link>
            </b>
            <p className="m-1 text-center">
              <Link to="/forget">Forget your password?</Link>
            </p>
          </span>
          <ErrorText error={error} />
        </div>
      </div>
    </div>
  );
}
