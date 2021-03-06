import React from "react";
import "./Nav.css";

function Nav() {

  return (
    <div className="nav">
        <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/NETFLIX_logo.svg"
            alt="Netflix Logo"
        />

        <img
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Logo"
        />
    </div>
  );
}

export default Nav;