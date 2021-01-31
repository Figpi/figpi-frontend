import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { IconContext } from "react-icons";

function Topbar(props) {
  const location = useLocation();

  let pageTitle = "Figpi"; // Set Default Title
  if (location.pathname === "/god_view") {
    pageTitle = "Figpi - God View"; // Conditional Title update
  }

  const toggleSidebar = () => {
    console.log("clicked");
  };

  return (
    <div className="top--bar">
      <header className="navbar navbar-theme bg-dark flex-md-nowrap px-2 py-2 shadow">
        <div className="menu-toggler">
          <button className="btn" onClick={toggleSidebar}>
            <IconContext.Provider value={{ className: "menu-toggler-icon" }}>
              <AiOutlineMenu size={25} />
            </IconContext.Provider>
          </button>
        </div>

        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <Link to="/" className="nav-link log-out">
              Sign out
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Topbar;
