import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ErrorText from "../../components/ErrorText";
import { auth, Providers } from "../../config/firebase";
import { createDocumentWithId } from "../../scripts/fireStore";
import logging from "../../config/logging";

export default function RegisterPage() {
  const [registering, setRegistering] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const history = useHistory();

  const signUpWithEmailAndPassword = () => {
    if (password !== confirm) {
      setError("Please make sure your passwords match.");
      return;
    }
    if (error !== "") setError("");

    setRegistering(true);

    Providers.createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        logging.info(result);
        const newUser = {
          name: name,
          email: email,
          role: "member"
        };
        createDocumentWithId("users", result.user.uid, newUser);
        history.push("/login");
      })
      .catch((error) => {
        logging.error(error);

        if (error.code.includes("auth/weak-password")) {
          setError("Please enter a stronger password.");
        } else if (error.code.includes("auth/email-already-in-use")) {
          setError("Email already in use.");
        } else {
          setError("Unable to register.  Please try again later.");
        }
        setRegistering(false);
      });
  };

  return (
    <div className="sign-up">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="sign-up-container">
        <div className="sign-up-form">
        <h1>Sign Up</h1>
          <input
            type="name"
            name="name"
            id="name"
            className="form-control"
            placeholder="Enter Name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email Address"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <input
            autoComplete="new-password"
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <input
            autoComplete="new-password"
            type="password"
            name="confirm"
            id="confirm"
            className="form-control"
            placeholder="Confirm Password"
            onChange={(event) => setConfirm(event.target.value)}
            value={confirm}
          />

          <button
            className="loginButton"
            disabled={registering}
            color="success"
            onClick={() => signUpWithEmailAndPassword()}
          >
            Sign Up
          </button>
          <small>
            <p className="m-1 text-center">
              Already have an account? <Link to="/login">Login.</Link>
            </p>
          </small>
          <ErrorText error={error} />
        </div>
      </div>
    </div>
  );
}
