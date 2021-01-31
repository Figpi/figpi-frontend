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

  return (
    <>
      <div className="bc-wrapper  bg-light mb-4">
        <nav aria-label="breadcrumb">
          <div class="container">
            <ol className="breadcrumb bg-light py-3">
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
          </div>
        </nav>
      </div>
    </>
  );
}

export default BreadCrumbBar;
