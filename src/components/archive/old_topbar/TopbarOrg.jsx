import React from "react";

function Topbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand navbar-dark bg-dark"
        aria-label="Second navbar example"
      >
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">Session: 13013</li>
            </ul>

            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Topbar;
