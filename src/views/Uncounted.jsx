import React, { useState, useEffect } from "react";

// Layout components
import Sidebar from "../components/layouts/sidebar/Sidebar";
import Topbar from "../components/layouts/topbar/Topbar";

// Core / Feature componets
//import DataTable from "../components/core/datatable/Datatable";
import FileUploader from "../components/utils/FileUploader";
import Datatable from "../components/core/ndata/Datatable";

function Uncounted() {
  // REACT HELMET --------
  document.title = "Figpi - Uncounted";
  const page_title = "Uncounted Data";
  // REACT HELMET END ----

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
    <div className="dash--board">
      <Topbar />
      <div className="container-fluid content--area">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 px-lg-5 mt-5">
            <h3>{page_title}</h3>
            <Datatable {...uc_props} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Uncounted;
