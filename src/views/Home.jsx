import React from "react";

// components
import Sidebar from "../components/layouts/sidebar/Sidebar";
import Topbar from "../components/layouts/topbar/Topbar";

import DataTable from "../components/core/datatable/Datatable";
import Datatable from "../components/core/ndata/Datatable";
import FileUploader from "../components/utils/FileUploader";

function Home() {
  // Set page title
  document.title = "Figpi - Dashboard";
  const page_title = "Dashboard";

  const uc_props = {
    table_title: "Uncounted",
    api_endpoint: "http://127.0.0.1:8000/api/uncounted/",
  };

  const co_props = {
    table_title: "Counted",
    api_endpoint: "http://127.0.0.1:8000/api/comaster/",
  };

  return (
    <div className="dash--board">
      <Topbar />
      <div className="container-fluid content--area">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ml-sm-auto col-lg-10 px-lg-5 px-md-4 mt-5">
            <h3>{page_title}</h3>
            <Datatable {...co_props} />
            <Datatable {...uc_props} />
            <Datatable {...co_props} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
