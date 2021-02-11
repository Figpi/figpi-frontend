import React, { useState, useEffect } from "react";

// Layout components
import Navbar from "../components/layouts/navigator/Navbar";
import BreadCrumbBar from "../components/layouts/breadcrumb/BreadCrumbBar";

// Core / Feature componets
import FileUploader from "../components/utils/FileUploader";
import Datatable from "../components/core/ndata/Datatable";

function Uncounted() {
  // REACT HELMET --------
  document.title = "Figpi - Uncounted";
  const page_title = "Uncounted Data";
  // REACT HELMET END ----

  // Path for BreadCrumbBar
  let path = [
    {
      url: "/",
      name: "Dashboard",
      status: false,
    },
    {
      url: "/analytics",
      name: "Analytics",
      status: false,
    },
    {
      url: "/uncounted",
      name: "Salling - Uncounted",
      status: false,
    },
  ];

  // Props to component: <FileUploader/>
  let uploader_props = {
    endpoint: "http://127.0.0.1:8000/api/upload/",
  };

  // Uncounted data
  const uc_props = {
    table_title: "Counted",
    api_endpoint: "http://127.0.0.1:8000/api/ucmaster/",
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
    await fetch(uc_props.api_endpoint, requestOptions)
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
      <BreadCrumbBar path={path} />
      <div className="dash--board">
        <div className="container content--area">
          <h3>{page_title}</h3>
          <Datatable {...uc_props} />
        </div>
      </div>
    </>
  );
}

export default Uncounted;
