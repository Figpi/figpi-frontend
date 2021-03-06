import React from "react";
import { Link } from "react-router-dom";

// layout components
import Navbar from "../components/layouts/navigator/Navbar";
import BreadCrumbBar from "../components/layouts/breadcrumb/BreadCrumbBar";

// Sub-component imports
import AnalyticsNode from "../components/core/analyticsNode/AnalyticsNode";

// Icon-imports
import { IconContext } from "react-icons";
import { AiFillPlusCircle } from "react-icons/ai";

function StorageView() {
  document.title = "Figpi - Analytics";
  const page_title = "Analytics";

  // Path for BreadCrumbBar
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
  ];

  let counted_route = "/analytics/" + btoa("counted");
  let uncounted_route = "/analytics/" + btoa("uncounted");

  let node_1 = {
    name: "Salling - Counted Data",
    url: counted_route,
    uuid: "47e12eaa-5cf0-4f9b-b393-14c5b6ea0e9b",
    status: 0,
  };

  let node_2 = {
    name: "Salling - Uncounted Data",
    url: uncounted_route,
    uuid: "ab1da8d7-7928-4c3e-8d0a-792e78fe2b9b",
    status: 0,
  };

  let node_3 = {
    name: "Test Analytics",
    url: "/",
    uuid: "56a66964-5393-4e51-b025-df0c6643a5a9",
    status: 1,
  };

  return (
    <>
      <Navbar />
      <BreadCrumbBar path={path} />
      <div className="dash--board">
        <div className="container content--area">
          <div className="view-bar">
            <div className="title-wrapper">
              <h3>{page_title}</h3>
            </div>
            <div className="view-bar-features">
              <Link to="/build-analytics">
                <button className="btn">
                  <IconContext.Provider value={{ className: "view-bar-icon" }}>
                    <AiFillPlusCircle size={30} />
                  </IconContext.Provider>
                </button>
              </Link>
            </div>
          </div>

          <AnalyticsNode data={node_1} />
          <AnalyticsNode data={node_2} />
          <AnalyticsNode data={node_3} />
        </div>
      </div>
    </>
  );
}

export default StorageView;
