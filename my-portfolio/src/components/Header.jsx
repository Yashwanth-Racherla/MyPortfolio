import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const setToggleFunc = (toggleValue) => {
    setToggle(toggleValue);
    if (!toggleValue) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  };

  return (
    <header className="header-section">
      <div className="nav-bar container">
        <div className="nav-bar-title">YASHWANTH RACHERLA</div>
        <div>
          <button
            className="toggle-button"
            onClick={() => setToggleFunc(!toggle)}
          >
            {toggle ? (
              <img src="./menu.png" alt="toggle-icon" />
            ) : (
              <img src="./close.png" alt="close-icon" />
            )}
          </button>
        </div>
        <div className={`nav-menu ${!toggle && "mobile"}`}>
          <ul className="nav-links">
            <li className="nav-link" onClick={() => setToggleFunc(true)}>
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link" onClick={() => setToggleFunc(true)}>
              <Link to="/About">About</Link>
            </li>
            <li className="nav-link" onClick={() => setToggleFunc(true)}>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li className="nav-link" onClick={() => setToggleFunc(true)}>
              <Link to="/Services">Services</Link>
            </li>
            <li className="nav-link" onClick={() => setToggleFunc(true)}>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
