import React from "react";

// Util-component imports
import ParticlesConfig from "../components/utils/ParticlesConfig";

function SelectStore() {
  // Set page title
  const page_title = "Select Store";
  document.title = `${page_title} | Figpi`;

  return (
    <>
      <div className="container-fluid pr-0">
        <div className="row min-vh-100 row-mr-fix">
          <div className="col-5 d-flex align-items-center">
            <div className="w-75 mx-auto">
              <div className="mb-4">
                <h1 className="display-4">Select store</h1>
                <small className="text-muted">
                  Select the store, you are going to be working with by entering
                  the store ID or selecting from the previous used store IDs.
                </small>
              </div>
              <form>
                <div className="mb-4">
                  <label className="mb-2" for="exampleInputEmail">
                    Store ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ex. 72013"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-4 pt-3 border-top">
                  <label className="mb-2" for="storeIDdropdown">
                    Store ID
                  </label>
                  <select
                    className="form-select"
                    id="storeIDdropdown"
                    aria-label="Default select example"
                  >
                    <option selected>None selected</option>
                    <option value="1">Bilka (71032)</option>
                    <option value="2">BR (72301)</option>
                    <option value="3">Føtex (42310)</option>
                    <option value="4">Netto (58151)</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-block btn-schema mt-4">
                  Start Session
                </button>
              </form>
              <div className="text-center mt-3">
                <a className="auth-link" href="link">
                  Go Back
                </a>
              </div>
            </div>
          </div>

          <div className="col-7 particles">
            <ParticlesConfig />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectStore;
