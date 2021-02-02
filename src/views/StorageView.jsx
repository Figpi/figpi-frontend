import React from "react";
import { useState, useEffect, useCallback } from "react";

// layout components
import Navbar from "../components/layouts/navigator/Navbar";
import BreadCrumbBar from "../components/layouts/breadcrumb/BreadCrumbBar";

// Sub-component imports
import StorageNode from "../components/core/storageNode/StorageNode";

// Icon-imports
import { IconContext } from "react-icons";
import { AiFillPlusCircle } from "react-icons/ai";

// Util-component imports

function StorageView() {
  document.title = "Figpi - Storage";
  const page_title = "Storage";

  // Path for BreadCrumbBar
  let path = [
    {
      url: "/",
      name: "Dashboard",
      status: false,
    },
    {
      url: "/storage",
      name: "Storage",
      status: false,
    },
  ];

  let node1 = {
    type: "api",
    icon: "AiFillApi",
    name: "Salling Master",
    url: "/",
  };

  let node2 = {
    type: "xml",
    icon: "FaFileCode",
    name: "webdata-24/12",
    url: "/",
  };

  let node3 = {
    type: "csv",
    icon: "FaFileCsv",
    name: "Salling Uncounted",
    url: "/",
  };

  let node4 = {
    type: "xlsx",
    icon: "FaFileExcel",
    name: "Salling Counted",
    url: "/",
  };

  return (
    <>
      <Navbar />
      <BreadCrumbBar path={path} />
      <div className="dash--board">
        <div className="container content--area">
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

          <div className="node-container mt-4">
            <StorageNode data={node1} />
            <StorageNode data={node2} />
            <StorageNode data={node3} />
            <StorageNode data={node4} />
          </div>
        </div>
      </div>
    </>
  );
}

export default StorageView;
