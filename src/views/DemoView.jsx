import React from "react";
import { useState, useEffect } from "react";

// Dashboard wide Components
import Navbar from "../components/layouts/navigator/Navbar";
import BreadCrumbBar from "../components/layouts/breadcrumb/BreadCrumbBar";

function DemoView() {
  const page_title = "Demo";
  document.title = `Figpi - ${page_title}`;

  return (
    <>
      <Navbar />
      <BreadCrumbBar />
      <h2>Hello</h2>
    </>
  );
}

export default DemoView;
