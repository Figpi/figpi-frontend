import React from "react";

function testNode() {
  return (
    <>
      <div className="d-block" draggable="true">
        {/* Item section*/}
        <div className="d-block-item">
          <h3>Data from API</h3>
          <span>
            Pull from source:{" "}
            <a href="https://randomuser.me/api/">https://randomuser.me/api/</a>
          </span>
        </div>

        {/* Drawer section */}
        <a className="drawer-toggler" id="001">
          show/hide
        </a>
        <div className="d-block-drawer" id="drawer-001">
          datatable
        </div>
      </div>
    </>
  );
}

export default testNode;
