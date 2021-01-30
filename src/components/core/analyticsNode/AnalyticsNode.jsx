import React from "react";
import { Link } from "react-router-dom";

// Icons
import { IconContext } from "react-icons";
import { BsThreeDots, BsCircleFill } from "react-icons/bs";
import { BiBarChartSquare } from "react-icons/bi";

function AnalyticsNode(props) {
  return (
    <>
      <div className="anode-wrapper mt-4 card">
        <div className="anode-icon-container bg-success">
          <IconContext.Provider value={{ className: "anode-icon" }}>
            <BiBarChartSquare size={75} />
          </IconContext.Provider>
        </div>
        <div className="anode-body">
          <b className="anode-title">{props.data.name}</b>
          <div className="anode-desc">
            <div>
              <Link to={props.data.url} className="anode-link">
                Open
              </Link>
            </div>
            <div>Status: {props.data.status}</div>
            <div>ID: {props.data.uuid}</div>
          </div>
        </div>
        <div className="anode-cta">
          <IconContext.Provider value={{ className: "anode-cta-icon" }}>
            <BsThreeDots size={30} />
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
}

export default AnalyticsNode;
