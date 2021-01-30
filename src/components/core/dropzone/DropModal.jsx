import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ImUpload } from "react-icons/im";
import { IconContext } from "react-icons";

function DropHook() {
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: ".csv, .xlsx",
    maxFiles: 1,
    noKeyboard: true,
  });

  // Debugging
  let files_len = acceptedFiles.length;
  console.log(files_len);
  console.log(acceptedFiles);

  // Mapping of all Accepted files
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li className="list-group-item" key={file.path}>
      {file.path} - {Math.floor(file.size / 1000)} KB
    </li>
  ));

  // Clear acccepted files - Not working
  function clearFiles() {
    console.log("Files before:" + files_len);
    if (acceptedFiles.length !== 0) {
      delete acceptedFiles[0];
    }
    console.log("Files after:" + files_len);
  }

  return (
    <>
      <div
        className="modal fade drop--modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Upload Dataset
              </h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* modal body containing dropzone */}
            <div className="modal-body p-0">
              {/* dropzone area */}
              <div className="drop--zone text-center" {...getRootProps()}>
                <form>
                  <input {...getInputProps()} />
                  <button type="submit">Upload</button>
                </form>
                <>
                  <IconContext.Provider value={{ className: "drop-zone-icon" }}>
                    <p>Drag files here, or click to select file</p>
                    <ImUpload />
                  </IconContext.Provider>
                </>
              </div>

              {/* Dropzone files displayer */}
              {files_len !== 0 ? (
                <div className="drop--zone_files">
                  <ul className="list-group list-group-flush">
                    {acceptedFileItems}
                  </ul>
                </div>
              ) : (
                <div className="drop--zone_files"></div>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-sm btn-outline-theme"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-sm btn-primary">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropHook;
