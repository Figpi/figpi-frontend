import React from "react";
import { IconContext } from "react-icons";
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import * as BiIcons from "react-icons/bi";
import { GiEyeTarget } from "react-icons/gi";
import { Link } from "react-router-dom";

function Sidebar2() {
  let isAdmin = true;

  return (
    <div>
      <div className="sidebar">
        <div className="brand py-3">
          <a href="#" className="brand-link">
            Figpi
          </a>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link">
              <BsIcons.BsColumnsGap />
              <Link to="/">Dashboard</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <BsIcons.BsBarChart />
              Statistics
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <VscIcons.VscAccount />
              Account
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <BiIcons.BiSliderAlt />
              Settings
            </a>
          </li>

          <li className="nav-item mt-4">
            <a className="nav-link">
              <Link to="/login">Login</Link>
            </a>
          </li>

          {isAdmin ? (
            <li className="nav-item">
              <a class="nav-link">
                <GiEyeTarget />
                <Link to="/god_view">God View</Link>
              </a>
            </li>
          ) : (
            <p></p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar2;
