import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import ErrorText from "../../components/ErrorText";
import { auth, Providers } from "../../config/firebase";
import logging from "../../config/logging";

export default function ChangePasswordPage() {
  const [changing, setChanging] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [old, setOld] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const history = useHistory();

  const passwordChangeRequest = () => {
    if (password !== confirm) {
      setError("Make sure your passwords are matching");
      return;
    }

    if (error !== "") setError("");

    setChanging(true);

    if (auth.currentUser !== null) {
        Providers.reset(auth.currentUser, password)
        .then(() => {
          logging.info("Password change successful.");
          history.push("/");
        })
        .catch((error) => {
          logging.error(error);
          setChanging(false);
          setError(error.message);
        });
    }
  };

  if (auth.currentUser?.providerData[0]?.providerId !== "password")
    return <Redirect to="/" />;

  return (
    <div id="ChangePassword">
      <div className="form-group">
        <input
          autoComplete="new-password"
          type="password"
          name="oldPassword"
          id="oldPassword"
          placeholder="Current Password"
          onChange={(event) => setOld(event.target.value)}
          value={old}
        />
      </div>
      <div className="form-group">
        <input
          autoComplete="new-password"
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </div>
      <div className="form-group">
        <input
          autoComplete="new-password"
          type="password"
          name="confirm"
          id="confirm"
          placeholder="Confirm Password"
          onChange={(event) => setConfirm(event.target.value)}
          value={confirm}
        />
      </div>
      <button
        disabled={changing}
        color="success"
        onClick={() => passwordChangeRequest()}
      >
        Change Password
      </button>
      <ErrorText error={error} />
    </div>
  );
};
