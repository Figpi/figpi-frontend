import React from "react";
import {
  BsArrowRepeat,
  BsCloudDownload,
  BsCloudUpload,
  BsTrash,
} from "react-icons/bs";

function DatatableMenu(props) {
  return (
    <>
      <div className="card-header py-0 data--header">
        <div className="control-left">
          {props.count} of {props.count} rows.
        </div>

        <div className="control-right">
          <div
            className="btn-group btn-group-lg"
            role="group"
            aria-label="Control command group"
          >
            <button type="button" className="btn btn-outline-theme">
              <BsArrowRepeat />
            </button>
            <button
              type="button"
              className="btn btn-outline-theme disabled"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <BsCloudUpload />
            </button>
            <button type="button" className="btn btn-outline-theme">
              <BsCloudDownload />
            </button>
            <button type="button" className="btn btn-outline-theme">
              <BsTrash />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DatatableMenu;
