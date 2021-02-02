import React from "react";

// Layout components
import Navbar from "../components/layouts/navigator/Navbar";
import BreadCrumbBar from "../components/layouts/breadcrumb/BreadCrumbBar";

// Core / Feature components
import Datatable from "../components/core/datatable/Datatable";

function GodView() {
  // Set page title
  document.title = "Figpi - God View";

  // Path for BreadCrumbBar
  let path = [
    {
      url: "/",
      name: "Dashboard",
      status: false,
    },
    {
      url: "/god_view",
      name: "God View",
      status: false,
    },
  ];

  let user_data = {
    count: 2,
    next: null,
    previous: null,
    results: [
      {
        url: "http://localhost:8000/api/users/2/",
        username: "BenjaBk",
        email: "benjamin@klerens.dk",
        groups: ["http://localhost:8000/api/groups/1/"],
        first_name: "Benjamin",
        date_joined: "2020-11-07T23:29:24.084244Z",
      },
      {
        url: "http://localhost:8000/api/users/1/",
        username: "fbt",
        email: "thorbensen@gmail.com",
        groups: ["http://localhost:8000/api/groups/1/"],
        first_name: "Frederik",
        date_joined: "2020-10-31T13:09:55Z",
      },
    ],
  };

  let group_data = {
    count: 2,
    next: null,
    previous: null,
    results: [
      {
        url: "http://localhost:8000/api/groups/1/",
        name: "developers",
      },
      {
        url: "http://localhost:8000/api/groups/2/",
        name: "manager",
      },
    ],
  };
  return (
    <>
      <Navbar />
      <BreadCrumbBar path={path} />
      <div className="god--view">
        <div className="container content--area">
          <Datatable data={group_data} />
          <Datatable data={user_data} />
          <Datatable data={user_data} />
        </div>
      </div>
    </>
  );
}

export default GodView;
