import { Link } from "react-router-dom";
import { useState } from "react";
import profileImg from "../../assets/img/profile.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link className="nav-link" to={"/main"}><span>Home</span></Link>
          <Link className="nav-link" to={"/series"}><span>Series</span></Link>
          <Link className="nav-link" to={"/movies"}><span>Movies</span></Link>
        </div>
        <div className="right">
          <img
            src={profileImg}
            alt=""
          />
          <div className="profile">
          <i class="fas fa-sort-down"></i>
            <div className="options">
              <span>Settings</span>
              <span>
                <Link to={"/logout"}>Logout</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
