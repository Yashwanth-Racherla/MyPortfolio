import React, { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);

  const toggleIcon = () => {
    setToggle(!toggle);
    document.querySelector(".nav-links-mobile").classList.toggle("active");
  };

  return (
    <header className="nav-menu">
      <div className="portfolio-name">YASHWANTH RACHERLA</div>

      <button className="toggle-button" onClick={() => toggleIcon()}>
        {toggle ? (
          <img src="./menu.png" alt="toggle-icon" />
        ) : (
          <img src="./close.png" alt="close-icon" />
        )}
      </button>

      <ul className="nav-links">
        <li className="nav-link">Home</li>
        <li className="nav-link">About</li>
        <li className="nav-link">Services</li>
        <li className="nav-link">Portfolio</li>
        <li className="nav-link">Contact</li>
      </ul>

      <ul className="nav-links-mobile">
        <li className="nav-link-mobile">Home</li>
        <li className="nav-link-mobile">About</li>
        <li className="nav-link-mobile">Services</li>
        <li className="nav-link-mobile">Portfolio</li>
        <li className="nav-link-mobile">Contact</li>
      </ul>
    </header>
  );
};

export default NavBar;
