import React from "react";
import { useState, useEffect, useCallback } from "react";

// layout components
import Sidebar from "../components/layouts/sidebar/Sidebar";
import Topbar from "../components/layouts/topbar/Topbar";
import BreadCrumbBar from "../components/layouts/breadcrumb/BreadCrumbBar";

// Sub-component imports
import AnalyticsNode from "../components/core/analyticsNode/AnalyticsNode";

// Icon-imports
import { IconContext } from "react-icons";
import { AiFillPlusCircle } from "react-icons/ai";

function StorageView() {
  document.title = "Figpi - Analytics";
  const page_title = "Analytics";

  let node_1 = {
    name: "Salling - Counted Data",
    url: "/counted",
    uuid: "47e12eaa-5cf0-4f9b-b393-14c5b6ea0e9b",
    status: 0,
  };

  let node_2 = {
    name: "Salling - Uncounted Data",
    url: "/uncounted",
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
    <div className="dash--board">
      <Topbar />
      <div className="container-fluid content--area">
        <Sidebar />
        <div className="row">
          <main className="col-md-9 ml-sm-auto col-lg-10 px-lg-5 px-md-4 mt-5">
            {/* <BreadCrumbBar /> */}
            <div className="view-bar">
              <div className="title-wrapper">
                <h3>{page_title}</h3>
              </div>
              <div className="view-bar-features">
                <button className="btn">
                  <IconContext.Provider value={{ className: "view-bar-icon" }}>
                    <AiFillPlusCircle size={30} />
                  </IconContext.Provider>
                </button>
              </div>
            </div>

            <AnalyticsNode data={node_1} />
            <AnalyticsNode data={node_2} />
            <AnalyticsNode data={node_3} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default StorageView;
