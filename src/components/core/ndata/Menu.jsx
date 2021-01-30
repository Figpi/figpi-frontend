import React, { useState } from "react";
import {
  BsArrowRepeat,
  BsCloudDownload,
  BsCloudUpload,
  BsTrash,
} from "react-icons/bs";
import { GoSettings } from "react-icons/go";

export default function Menu(props) {
  const [Uvisible, setUvisible] = useState(false); // upload visibility
  const [Svisible, setSvisible] = useState(false); // settings visibility

  const ucollapse = () => {
    setSvisible(false); // collapse other bodies
    if (Uvisible === true) {
      setUvisible(false);
    } else {
      setUvisible(true);
    }
  };

  const scollapse = () => {
    setUvisible(false); // collapse other bodies
    if (Svisible === true) {
      setSvisible(false);
    } else {
      setSvisible(true);
    }
  };

  // if number of items in results != 0;
  let count_check = false;
  if (props.res.count !== undefined) {
    count_check = true;
  }

  // Set callbakc for r
  const setCallback = () => {
    props.updateRequest();
  };

  console.log(props.res);

  return (
    <>
      <div className="card-header py-0 data--header">
        <div className="control-left d-inline-flex">
          <p className="my-0 mr-3 font-weight-bold dt-title-text">
            {props.menu_title}
          </p>
          <div>
            {count_check ? (
              <>
                {props.res.count} of {props.res.count} rows.
              </>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="control-right">
          <div
            className="btn-group btn-group-lg"
            role="group"
            aria-label="Control command group"
          >
            <button
              type="button"
              onClick={setCallback}
              className="btn btn-outline-theme"
            >
              <BsArrowRepeat />
            </button>
            <button type="button" className="btn btn-outline-theme">
              <BsCloudDownload />
            </button>
            <button
              type="button"
              className="btn btn-outline-theme"
              onClick={ucollapse}
            >
              <BsCloudUpload />
            </button>
            <button
              type="button"
              className="btn btn-outline-theme"
              onClick={scollapse}
            >
              <GoSettings />
            </button>

            {/*             <button type="button" className="btn btn-outline-theme">
                <BsTrash />
              </button> */}
          </div>
        </div>
      </div>

      {Uvisible ? <FileUploader {...props} /> : <></>}
      {Svisible ? <DtSettings /> : <></>}
    </>
  );
}

// Datatable Settings Component
const DtSettings = () => {
  return (
    <div className="data--settings">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
    </div>
  );
};

// File uploader
const FileUploader = (props) => {
  const uploadFile = (e) => {
    e.preventDefault(); // Prevent Page reload

    // Get the form data
    const formData = new FormData();
    const selectedFile = document.getElementById("inputGroupFile02").files[0];
    formData.append("file", selectedFile);

    // Set options for Request
    var requestOptions = {
      method: "PUT",
      body: formData,
      mode: "cors",
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
    };

    // Define Values in rquest header
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 37ba188c2184d0009fd814a17ec696c39de9644e"
    );

    // Send HTTP request
    fetch(props.upload_ep, requestOptions).then((response) =>
      checkStatus(response)
    );
  };

  // Execute is HTTP request is succesful.
  const checkStatus = (response) => {
    console.log(response);

    if (response.status === 200) {
      console.log("Det virker");
    }
  };

  return (
    <form onSubmit={uploadFile}>
      <div className="input-group">
        <input
          type="file"
          name="input_file"
          className="form-control br-0"
          id="inputGroupFile02"
          accept=".csv"
        />
        <button type="submit" className="btn btn-auth br-0">
          Upload
        </button>
      </div>
    </form>
  );
};
