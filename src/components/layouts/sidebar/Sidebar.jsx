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

  return (
    <div className="side--bar">
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              {location.pathname === "/" ? (
                <Link to="/" className="nav-link active">
                  <BsIcons.BsColumnsGap />
                  Dashboard
                </Link>
              ) : (
                <Link to="/" className="nav-link">
                  <BsIcons.BsColumnsGap />
                  Dashboard
                </Link>
              )}
            </li>

            {/* ANALYTICS */}
            <li className="nav-item">
              {location.pathname === "/analytics" ? (
                <Link to="/analytics" className="nav-link active">
                  <BsIcons.BsClipboardData />
                  Analytics
                </Link>
              ) : (
                <Link to="/analytics" className="nav-link">
                  <BsIcons.BsClipboardData />
                  Analytics
                </Link>
              )}
            </li>

            {/* STORAGE */}
            <li className="nav-item">
              {location.pathname === "/storage" ? (
                <Link to="/storage" className="nav-link active">
                  <FiBox />
                  Storage
                </Link>
              ) : (
                <Link to="/storage" className="nav-link">
                  <FiBox />
                  Storage
                </Link>
              )}
            </li>

            <li className="nav-item">
              {location.pathname === "/account" ? (
                <Link to="/account" className="nav-link active">
                  <VscIcons.VscAccount />
                  Account
                </Link>
              ) : (
                <Link to="/account" className="nav-link">
                  <VscIcons.VscAccount />
                  Account
                </Link>
              )}
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Admin tools</span>
          </h6>
          <ul className="nav flex-column mb-2">
            {isAdmin ? (
              <li className="nav-item">
                {location.pathname === "/god_view" ? (
                  <Link to="/god_view" className="nav-link active">
                    <GiEyeTarget />
                    God View
                  </Link>
                ) : (
                  <Link to="/god_view" className="nav-link">
                    <GiEyeTarget />
                    God View
                  </Link>
                )}
              </li>
            ) : (
              <p></p>
            )}
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Built</span>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              {location.pathname === "/login" ? (
                <Link to="/login" className="nav-link active">
                  <AiOutlineLogin />
                  Login
                </Link>
              ) : (
                <Link to="/login" className="nav-link">
                  <AiOutlineLogin />
                  Login
                </Link>
              )}
            </li>
            <li className="nav-item">
              {location.pathname === "/select_store" ? (
                <Link to="/selet_store" className="nav-link active">
                  <FaStoreAlt />
                  Select Store
                </Link>
              ) : (
                <Link to="/select_store" className="nav-link">
                  <FaStoreAlt />
                  Select Store
                </Link>
              )}
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Under Dev</span>
          </h6>

          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              {location.pathname === "/reset" ? (
                <Link to="/reset" className="nav-link active">
                  <VscKey />
                  Reset
                </Link>
              ) : (
                <Link to="/reset" className="nav-link">
                  <VscKey />
                  Reset
                </Link>
              )}
            </li>

            <li className="nav-item">
              {location.pathname === "/build-analytics" ? (
                <Link to="/build-analytics" className="nav-link active">
                  <BsIcons.BsTools />
                  Build Analytics
                </Link>
              ) : (
                <Link to="/build-analytics" className="nav-link">
                  <BsIcons.BsTools />
                  Build Analytics
                </Link>
              )}
            </li>

            <li className="nav-item">
              {location.pathname === "/statistics" ? (
                <Link to="/statistics" className="nav-link active">
                  <BsIcons.BsBarChart />
                  Statistics
                </Link>
              ) : (
                <Link to="/statistics" className="nav-link">
                  <BsIcons.BsBarChart />
                  Statistics
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
