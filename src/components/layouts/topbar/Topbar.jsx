import React from "react";
import { Link, useLocation } from "react-router-dom";

function Topbar() {
  const location = useLocation();

  let pageTitle = "Figpi"; // Set Default Title
  if (location.pathname === "/god_view") {
    pageTitle = "Figpi - God View"; // Conditional Title update
  }

  console.log(location);

  return (
    <div className="top--bar">
      <header className="navbar navbar-theme fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to="/" className="navbar-brand col-md-3 col-lg-2 mr-0 px-3 upper">
          {pageTitle}
        </Link>
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
