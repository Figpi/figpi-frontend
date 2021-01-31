import React from "react";
import { Link } from "react-router-dom";

function BreadCrumbBar() {
  let path = [
    {
      url: "/",
      name: "Dashboard",
      status: false,
    },
    {
      url: "/analytics",
      name: "Analytics",
      status: false,
    },
    {
      url: "/counted",
      name: "Counted",
      status: true,
    },
  ];

  console.log(path.length);

  return (
    <>
      <div className="bc-wrapper mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb py-3 bg-light">
            {path.map((item, keys) => {
              if (path.indexOf(item) === path.length) {
                return (
                  <li key={keys} className="breadcrumb-item">
                    <Link className="figpi-green-active" to={item.url}>
                      {item.name}
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={keys} className="breadcrumb-item">
                    <Link className="figpi-green" to={item.url}>
                      {item.name}
                    </Link>
                  </li>
                );
              }
            })}
          </ol>
        </nav>
      </div>
    </>
  );
}

export default BreadCrumbBar;
