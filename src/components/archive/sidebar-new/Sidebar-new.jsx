import React from "react";
import { useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import * as BiIcons from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";
import { GiEyeTarget } from "react-icons/gi";
import { VscKey } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaStoreAlt } from "react-icons/fa";
import { FiBox } from "react-icons/fi";

function Sidebar() {
  let isAdmin = true;
  const location = useLocation();

  const icon_size = 25;

  return (
    <div className="side--bar-new">
      <nav className="navbar bg-light">
        <ul className="navbar-nav">
          <li className="nav-link">
            {" "}
            <IconContext.Provider value={{ className: "view-bar-icon" }}>
              <BsIcons.BsColumnsGap size={icon_size} />
            </IconContext.Provider>
            <span className="nav-link-desc">Dashboard</span>
          </li>
          <li className="nav-link">
            {" "}
            <IconContext.Provider value={{ className: "view-bar-icon" }}>
              <BsIcons.BsClipboardData size={icon_size} />
            </IconContext.Provider>
            <span className="nav-link-desc">Analytics</span>
          </li>
          <li className="nav-link">
            <IconContext.Provider value={{ className: "view-bar-icon" }}>
              <FiBox size={icon_size} />
            </IconContext.Provider>
            <span className="nav-link-desc">Storage</span>
          </li>
          <li className="nav-link">
            {" "}
            <IconContext.Provider value={{ className: "view-bar-icon" }}>
              <VscIcons.VscAccount size={icon_size} />
            </IconContext.Provider>
            <span className="nav-link-desc">Account</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
