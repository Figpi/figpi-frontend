import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Icons
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";

// ICONS - CLEAN!
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import * as BiIcons from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";
import { GiEyeTarget } from "react-icons/gi";
import { VscKey } from "react-icons/vsc";
import { FaStoreAlt } from "react-icons/fa";
import { FiBox } from "react-icons/fi";

// Data
import { SidebarData, AdminSidebarData, DevSidebarData } from "./SidebarData";
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  let isAdmin = true;
  const location = useLocation();

  return (
    <>
      <div className="top--bar">
        <header className="navbar sticky-top navbar-theme bg-dark flex-md-nowrap px-2 py-2 shadow">
          <div className="menu-toggler">
            <button className="btn" onClick={showSidebar}>
              <IconContext.Provider value={{ className: "menu-toggler-icon" }}>
                <AiIcons.AiOutlineMenu size={25} />
              </IconContext.Provider>
            </button>
          </div>

          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <Link to="/" className="nav-link log-out">
                Sign out
              </Link>
            </li>
          </ul>
        </header>
      </div>

      {/* SIDEBAR  */}
      <div className="side--bar">
        <nav
          className={
            sidebar
              ? "d-md-block bg-light sidebar active"
              : "d-md-block bg-light sidebar"
          }
        >
          <div className="pt-3">
            <ul className="nav flex-column">
              {SidebarData.map((item, index) => {
                return (
                  <li className="nav-item">
                    {location.pathname === item.path ? (
                      <Link to={item.path} className="nav-link active">
                        {item.icon}
                        {item.title}
                      </Link>
                    ) : (
                      <Link to={item.path} className="nav-link">
                        {item.icon}
                        {item.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Admin tools</span>
            </h6>
            <ul className="nav flex-column mb-2">
              {AdminSidebarData.map((item, index) => {
                return (
                  <li className="nav-item">
                    {location.pathname === "/" ? (
                      <Link to={item.path} className="nav-link active">
                        {item.icon}
                        {item.title}
                      </Link>
                    ) : (
                      <Link to={item.path} className="nav-link">
                        {item.icon}
                        {item.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Built</span>
            </h6>
            <ul className="nav flex-column mb-2">
              {DevSidebarData.map((item, index) => {
                return (
                  <li className="nav-item">
                    {location.pathname === "/" ? (
                      <Link to={item.path} className="nav-link active">
                        {item.icon}
                        {item.title}
                      </Link>
                    ) : (
                      <Link to={item.path} className="nav-link">
                        {item.icon}
                        {item.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
