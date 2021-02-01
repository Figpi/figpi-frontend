import React, { useState, useEffect } from "react";

// Layout components
import Navbar from "../components/layouts/navigator/Navbar";
import BreadCrumbBar from "../components/layouts/breadcrumb/BreadCrumbBar";

// Core / Feature components
//import DataTable from "../components/datatable/Datatable";
import Datatable from "../components/core/ndata/Datatable";
import FileUploader from "../components/utils/FileUploader";

function Counted() {
  // REACT HELMET --------
  document.title = "Figpi - Counted";
  const page_title = "Counted Data";
  // REACT HELMET END ----

  // Uncounted data
  const co_props = {
    table_title: "Counted",
    api_endpoint: "http://127.0.0.1:8000/api/comaster/",
  };

  const [data, setData] = useState({});
  const [hasError, setErrors] = useState(false);

  // Define Values in rquest header
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Token 37ba188c2184d0009fd814a17ec696c39de9644e"
  );

  // Set options for Request
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  // Send HTTP Request
  async function fetchData() {
    await fetch(co_props.api_endpoint, requestOptions)
      .then((response) => response.text())
      .then((result) => setData(result))
      .catch((error) => setErrors(error));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <Navbar />
      <BreadCrumbBar />
      <div className="dash--board">
        <div className="container content--area">
          <h3>{page_title}</h3>
          <Datatable {...co_props} />
        </div>
      </div>
    </>
  );
}

export default Counted;
