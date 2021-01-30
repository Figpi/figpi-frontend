import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Pagination() {
  return (
    <>
      <div
        className="btn-group btn-group-lg"
        role="group"
        aria-label="Control command group"
      >
        <button type="button" className="btn btn-outline-theme">
          <BsArrowLeft />
        </button>
        <span className="btn btn-outline-theme">Page 2</span>
        <button type="button" className="btn btn-outline-theme">
          <BsArrowRight />
        </button>
      </div>
    </>
  );
}

export default Pagination;
