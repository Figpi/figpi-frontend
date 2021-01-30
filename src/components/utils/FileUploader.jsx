import React from "react";

function FileUploader(props) {
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
    fetch(props.endpoint, requestOptions).then((response) =>
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
}

export default FileUploader;
