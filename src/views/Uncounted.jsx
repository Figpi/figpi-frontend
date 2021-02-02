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
    table_title: "Uncounted",
    api_endpoint: "https://figpi-backend.herokuapp.com/api/uncounted/",
  };

  const [data, setData] = useState({});
  const [hasError, setErrors] = useState(false);

  // Define Values in request header
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Token 420c32eb73a6dd8b3dbbba3af819b63bc89c1061"
  );

  // Set options for Request
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

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
