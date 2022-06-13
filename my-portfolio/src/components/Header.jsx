import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <header className="nav-bar">
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
          <li className="nav-link">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Services</li>
          <li className="nav-link">Portfolio</li>
          <li className="nav-link">Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
