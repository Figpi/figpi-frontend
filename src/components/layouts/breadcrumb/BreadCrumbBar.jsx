import React from "react";
import { Link } from "react-router-dom";

function BreadCrumbBar() {
  let path = [
    {
      url: "/",
      name: "dashboard",
      status: false,
    },
    {
      url: "/analytics",
      name: "analytics",
      status: false,
    },
    {
      url: "/counted",
      name: "counted",
      status: true,
    },
  ];

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-light">
                <li className="breadcrumb-item">
                  <Link to={path[0].url}>{path[0].name}</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={path[1].url}>{path[1].name}</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to={path[2].url}>{path[2].name}</Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default BreadCrumbBar;
