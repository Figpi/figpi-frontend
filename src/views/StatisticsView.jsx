import React from "react";

// Layout components
import Navbar from "../components/layouts/navigator/Navbar";
import BreadCrumbBar from "../components/layouts/breadcrumb/BreadCrumbBar";

function StatisticsView() {
  const page_title = "Statistics";
  document.title = `${page_title} | Figpi`;

  // Path for BreadCrumbBar
  let path = [
    {
      url: "/",
      name: "Dashboard",
      status: false,
    },
    {
      url: "/statistics",
      name: "Statistics",
      status: true,
    },
  ];

  return (
    <>
      <Navbar />
      <BreadCrumbBar path={path} />
      <div className="dash--board">
        <div className="container content--area">
          <h3>{page_title}</h3>
        </div>
      </div>
    </>
  );
}

export default StatisticsView;
