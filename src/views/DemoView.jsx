import React from "react";
import { useState, useEffect } from "react";

// Dashboard wide Components
import Sidebar from "../components/layouts/sidebar/Sidebar";
import Topbar from "../components/layouts/topbar-new/Topbar-new";

// Icon-imports
import { IconContext } from "react-icons";
import { AiFillPlusCircle } from "react-icons/ai";
import BreadCrumbBar from "../components/layouts/breadcrumb/BreadCrumbBar";

function DemoView() {
  const page_title = "Demo";
  document.title = `Figpi - ${page_title}`;

  return (
    <div className="dash--board">
      <Topbar />
      <BreadCrumbBar />
    </div>
  );
}

export default DemoView;
