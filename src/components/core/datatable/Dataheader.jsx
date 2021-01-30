import React from "react";

function Dataheader(props) {
  return (
    <>
      <thead className="py-4">
        <tr>
          {props.values.map((value, keys) => {
            return <th key={keys}>{value}</th>;
          })}

          <th className="comment">Comment</th>
          <th className="actions">Actions</th>
        </tr>
      </thead>
    </>
  );
}

export default Dataheader;
