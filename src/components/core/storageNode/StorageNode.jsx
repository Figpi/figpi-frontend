import React from "react";
import { Link } from "react-router-dom";

// Icon imports
import { IconContext } from "react-icons";
import { AiFillApi } from "react-icons/ai";
import { FaFile, FaFileCsv, FaFileExcel, FaFileCode } from "react-icons/fa";

function StorageNode(props) {
  // Standard
  const icon_size = 50;
  let icon = <FaFile size={icon_size} />;
  switch (props.data.icon) {
    case "AiFillApi":
      icon = <AiFillApi size={icon_size} />;
      break;

    case "FaFileCode":
      icon = <FaFileCode size={icon_size} />;
      break;

    case "FaFileCsv":
      icon = <FaFileCsv size={icon_size} />;
      break;

    case "FaFileExcel":
      icon = <FaFileExcel size={icon_size} />;
      break;

    default:
      icon = <FaFile size={icon_size} />;
      break;
  }
  return (
    <>
      <Link to={props.data.url}>
        <div className="node-wrapper">
          <div className="card">
            <div className="card-body node-content">
              <IconContext.Provider value={{ className: "node-icon" }}>
                {icon}
              </IconContext.Provider>
            </div>
          </div>
          <div className="node-info">{props.data.name}</div>
        </div>
      </Link>
    </>
  );
}

export default StorageNode;
