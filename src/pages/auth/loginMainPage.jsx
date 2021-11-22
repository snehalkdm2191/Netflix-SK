import LoginForm from "./login";
import RegisterForm from "./register";
import logo from "../../assets/img/logo.png";

// Another problem with nesting here, you have 6 clossing div tags on the bottom.
// At this point i will recommend studying about HTML semantic tags, and CSS to improve this particular area of your frontend skills
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
                {/* 6 closing div tags */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
