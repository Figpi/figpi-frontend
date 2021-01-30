import React from "react";

// Layout components
import Sidebar from "../components/layouts/sidebar/Sidebar";
import Topbar from "../components/layouts/topbar/Topbar";

function StatisticsView() {
  return (
    <div className="dash--board">
      <Topbar />
      <div className="container-fluid content--area">
        <div class="row">
          <Sidebar />
          <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <p>Statistics</p>
          </main>
        </div>
      </div>
    </div>
  );
}

export default StatisticsView;
