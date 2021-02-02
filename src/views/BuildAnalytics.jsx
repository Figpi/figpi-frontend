import React from "react";

// Layout components
import Navbar from "../components/layouts/navigator/Navbar";
import BreadCrumbBar from "../components/layouts/breadcrumb/BreadCrumbBar";

// Core / Feature Nodes
import TestNode from "../components/core/builderNodes/testNode";

function BuildAnalytics() {
  // REACT HELMET
  document.title = "Figpi - Analytics Builder";
  const page_title = "Analytics Builder";

  // Path for BreadCrumbBar
  let path = [
    {
      url: "/",
      name: "Dashboard",
      status: false,
    },
    {
      url: "/analytics",
      name: "Analytics",
      status: false,
    },
    {
      url: "/build-analytics",
      name: "Analytics Builder",
      status: true,
    },
  ];

  // Builder functions
  const drop_area = document.querySelector(".d-canvas");
  const drag_blocks = document.querySelectorAll(".d-block");
  const drawer_refs = document.querySelectorAll(".drawer-toggler");
  const drag_components = document.querySelectorAll(".component");

  // BLOCKS
  drag_blocks.forEach((element) => {
    element.addEventListener("dragstart", function () {
      console.log("start drag");
    });

    element.addEventListener("dragend", function () {
      console.log("end drag");
    });

    element.addEventListener("dragover", function (e) {
      e.preventDefault();
      console.log("hovering");
    });

    element.addEventListener("drop", function () {
      console.log("drop drag");
      drop_area.appendChild(<TestNode />);
    });
  });

  // COMPONENTS
  drag_components.forEach((element) => {
    element.addEventListener("dragstart", function () {
      console.log("start drag - component");
    });

    element.addEventListener("dragend", function () {
      console.log("end drag - component");
    });

    element.addEventListener("dragover", function (e) {
      e.preventDefault();
      console.log("hovering");
    });

    element.addEventListener("drop", function () {
      console.log("drop drag");
      drop_area.appendChild(<p>hej</p>);
    });
  });

  // accordion effect for drawer
  drawer_refs.forEach((ref) => {
    ref.addEventListener("click", function () {
      let drawer = document.getElementById(`drawer-${ref.id}`);

      if (drawer.className.indexOf("visible") === -1) {
        drawer.className += " visible";
      } else {
        drawer.className = drawer.className.replace(" visible", "");
      }
    });
  });

  return (
    <>
      <Navbar />
      <BreadCrumbBar path={path} />
      <div className="dash--board">
        <div className="container content--area">
          <h3>{page_title}</h3>

          <div className="d-wrapper mt-4">
            <div className="d-canvas">
              <div className="d-block" draggable="true">
                {/* Item section*/}
                <div className="d-block-item">
                  <h3>Data from API</h3>
                  <span>
                    Pull from source:{" "}
                    <a href="https://randomuser.me/api/">
                      https://randomuser.me/api/
                    </a>
                  </span>
                </div>

                {/* Drawer section */}
                <a href="#" className="drawer-toggler" id="001">
                  show/hide
                </a>
                <div className="d-block-drawer" id="drawer-001">
                  datatable
                </div>
              </div>
            </div>

            <div class="d-aside">
              <div class="sidebar-header">
                <h3>Components</h3>
              </div>

              <div class="component-wrapper">
                <div class="component" draggable="true">
                  <p>API data</p>
                </div>

                <div class="component" draggable="true">
                  <p>Merge data-sources</p>
                </div>

                <div class="component" draggable="true">
                  <p>File data</p>
                </div>

                <div class="component" draggable="true">
                  <p>Filter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuildAnalytics;
