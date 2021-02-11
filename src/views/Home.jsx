import React from "react";

// layout components
import Navbar from "../components/layouts/navigator/Navbar";
import BreadCrumbBar from "../components/layouts/breadcrumb/BreadCrumbBar";

// Sub-component imports
import Datatable from "../components/core/ndata/Datatable";

function Home() {
  // Set page title
  const page_title = "Dashboard";
  document.title = `${page_title} | Figpi`;

  // Path for routing
  let path = [
    {
      url: "/",
      name: "Dashboard",
      status: false,
    },
  ];

  const uc_props = {
    table_title: "Uncounted",
    api_endpoint: "http://127.0.0.1:8000/api/uncounted/",
  };

  const co_props = {
    table_title: "Counted",
    api_endpoint: "http://127.0.0.1:8000/api/comaster/",
  };

  return (
    <>
      <Navbar />
      <BreadCrumbBar path={path} />
      <div className="dash--board">
        <div className="container content--area">
          <h3>{page_title}</h3>
          <Datatable {...co_props} />
          <Datatable {...uc_props} />
          <Datatable {...co_props} />
        </div>
      </div>
    </>
  );
}

export default Home;
