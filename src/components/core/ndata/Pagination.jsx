import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Pagination(props) {
  //console.log(props)
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");

  let check_prev = false;
  let check_next = false;
  if (props.prev !== null) {
    check_prev = true;
  }

  if (props.next !== null) {
    check_next = true;
  }

  const fetchPrev = () => {
    props.prevRequest(props.prev);
  };

  const fetchNext = () => {
    props.nextRequest(props.next);
  };

  return (
    <div
      className="btn-group btn-group-lg"
      role="group"
      aria-label="Control command group"
    >
      {check_prev ? (
        <button
          type="button"
          className="btn btn-outline-theme"
          onClick={fetchPrev}
        >
          <BsArrowLeft />
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-outline-theme disabled"
          onClick={fetchPrev}
        >
          <BsArrowLeft />
        </button>
      )}
      <span className="btn btn-outline-theme">Page</span>

      {check_next ? (
        <button
          type="button"
          className="btn btn-outline-theme"
          onClick={fetchNext}
        >
          <BsArrowRight />
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-outline-theme disabled"
          onClick={fetchNext}
        >
          <BsArrowRight />
        </button>
      )}
    </div>
  );
}

export default Pagination;
