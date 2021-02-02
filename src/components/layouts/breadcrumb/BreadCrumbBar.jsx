import React from "react";
import { Link } from "react-router-dom";

function BreadCrumbBar(props) {
  return (
    <>
      <div className="bc-wrapper bg-light mb-4">
        <nav aria-label="breadcrumb">
          <div className="container">
            <ol className="breadcrumb bg-light px-0 py-3">
              {props.path.map((item, keys) => {
                if (item.staus) {
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
