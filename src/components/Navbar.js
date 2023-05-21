import React, { useRef } from "react";
import "../App.css";

const Navbar = () => {
  const ref = useRef(null);

  const handleClick = () => {
    const div = ref.current; // corresponding DOM node
    div.className = "nav-links-active";
  };
  const handleCross = () => {
    const div = ref.current; // corresponding DOM node
    div.className = "nav-links-inactive";
  };

  return (
    <div className="navbar">
      <div ref={ref} className="nav-links-inactive">
        <div className="cross-container">
          <div onClick={handleCross} className="cross">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#040de1"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
            </svg>
          </div>
        </div>

        <div className="nav-links">
          <ul>
            <li>About</li>
            <li>News</li>
          </ul>
        </div>
      </div>

      <div className="nav-container">
        <div className="nav-visible">
          <div className="logo"> LOGO</div>
          <div className="nav-collapsed">
            <svg className="bar-svg"
              onClick={handleClick}
              width="24"
              height="24"
              fill="#040de1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <rect x="4" y="7.5" width="16" height="1.5"></rect>
              <rect x="4" y="15" width="16" height="1.5"></rect>
            </svg>
          </div>
          <div className="empty-container">
            <div className="logo-hidden"> LOGO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
