import React from "react";

function Datarow(props) {
  return (
    <>
      <tr>
        <td>1302</td>
        <td>60cd704b-74e7-453a-adbc-3174800767b6</td>
        <td>GAVEPAPIR 4M X 70CM SØLV/GULD SUPL.</td>
        <td>151</td>
        <td>151</td>
        <td>5712873139002</td>
        <td className="comment">Comment</td>
        <td className="actions">
          <button className="btn btn-outline-theme btn-sm">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-three-dots"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
              />
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
}

export default Datarow;
