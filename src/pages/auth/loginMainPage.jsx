import LoginForm from "./login";
import RegisterForm from "./register";
import logo from "../../assets/img/logo.png";

export default function loginMainPage() {
  return (
    <div className="row">
      <div className="login-container">
        <div className="card login-card">
          <div className="login-box">
            <img className="web-logo" src={logo} alt="logo" />
            <div className="login-snip">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked
              />
              <label htmlFor="tab-1" className="tab">
                Login
              </label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label htmlFor="tab-2" className="tab">
                Sign Up
              </label>
              <div className="login-space">
                <LoginForm />

                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
