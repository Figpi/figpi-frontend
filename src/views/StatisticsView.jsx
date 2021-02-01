import React from "react";

// Layout components
import Navbar from "../components/layouts/navigator/Navbar";
import BreadCrumbBar from "../components/layouts/breadcrumb/BreadCrumbBar";

function StatisticsView() {
  const page_title = "Statistics";
  document.title = `Figpi - ${page_title}`;

  return (
    <>
      <Navbar />
      <BreadCrumbBar />
      <div className="dash--board">
        <div className="container content--area">
          <h3>{page_title}</h3>
        </div>
      </div>
    </>
  );
}

export default StatisticsView;
