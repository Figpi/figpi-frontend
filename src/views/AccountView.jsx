import React from "react";

// Dashboard wide Components
import Navbar from "../components/layouts/navigator/Navbar";
import BreadCrumbBar from "../components/layouts/breadcrumb/BreadCrumbBar";

// Icon-imports
import { IconContext } from "react-icons";
import { AiFillPlusCircle } from "react-icons/ai";

function AccountView() {
  const page_title = "Account";
  document.title = `Figpi - ${page_title}`;

  // Path for BreadCrumbBar
  let path = [
    {
      url: "/",
      name: "Dashboard",
      status: false,
    },
    {
      url: "/account",
      name: "Account",
      status: false,
    },
  ];

  return (
    <>
      <Navbar />
      <BreadCrumbBar path={path} />
      <div className="dash--board">
        <div className="container content--area">
          <div className="view-bar">
            <div className="title-wrapper">
              <h3>
                {page_title}
                <span class="badge rounded-pill bg-warning ml-2">
                  Enterprise
                </span>
              </h3>
            </div>
            <div className="view-bar-features">
              <button className="btn">
                <IconContext.Provider value={{ className: "view-bar-icon" }}>
                  <AiFillPlusCircle size={30} />
                </IconContext.Provider>
              </button>
            </div>
          </div>

          <div className="account-area mt-3">
            <ul class="nav nav-pills mb-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Account Info
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Statistics
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Organization
                </a>
              </li>
            </ul>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="fbt@figpi.com"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleUsername"
                  placeholder="thorbensen-figpi"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="1234124"
                />
              </div>

              <div className="mb-3">
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="exampleFirstname" className="form-label">
                      First name
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleFirstname"
                      placeholder="Frederik"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="exampleLastname" className="form-label">
                      Last name
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleLastname"
                      placeholder="Bode Thorbensen"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="exampleAddress" className="form-label">
                      Address
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleAddress"
                      placeholder="Newel Road 223"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="exampleCity" className="form-label">
                      City
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleCity"
                      placeholder="Los Angles"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-theme">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountView;
