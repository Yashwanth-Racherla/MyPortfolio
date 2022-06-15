import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <header className="header-section">
      <div className="nav-bar container">
        <div className="nav-bar-title">YASHWANTH RACHERLA</div>
        <div>
          <button className="toggle-button" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <img src="./menu.png" alt="toggle-icon" />
            ) : (
              <img src="./close.png" alt="close-icon" />
            )}
          </button>
        </div>
        <div className={`nav-menu ${!toggle && "mobile"}`}>
          <ul className="nav-links">
            <li className="nav-link" onClick={() => setToggle(!toggle)}>
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link" onClick={() => setToggle(!toggle)}>
              <Link to="/About">About</Link>
            </li>
            <li className="nav-link" onClick={() => setToggle(!toggle)}>
              <Link to="/Services">Services</Link>
            </li>
            <li className="nav-link" onClick={() => setToggle(!toggle)}>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li className="nav-link" onClick={() => setToggle(!toggle)}>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
