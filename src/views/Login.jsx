import React from "react";
import { Link } from "react-router-dom";
import { ParticlesProps } from "react-tsparticles";

// Util-component imports
import ParticlesConfig from "../components/utils/ParticlesConfig";

function Login() {
  // Set page title
  document.title = "Figpi - Login";

  return (
    <div className="login--screen p-0">
      <div className="container-fluid pr-0">
        <div className="row min-vh-100 row-mr-fix">
          <div className="col-lg-5 col-md-7 d-flex align-items-center">
            <div className="w-75 mx-auto">
              <div className="mb-4">
                <h1 className="display-4">Log in</h1>
                <small className="text-muted">
                  Log in with your connected company e-mail to get access to the
                  inventory management platform.
                </small>
              </div>
              <form
                method="POST"
                action="https://www.cloud.figpi.com/api/accounts/login"
              >
                <div className="mb-4">
                  <label className="mb-2" for="exampleInputEmail">
                    Your e-mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <label className="mb-2" for="Password">
                  Password
                </label>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="exampleInputPassword1"
                  />
                </div>

                <button type="submit" className="btn btn-block btn-auth mt-4">
                  Log in
                </button>
              </form>
              <div className="text-center mt-3">
                <Link className="auth-link" to="/reset">
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-5 particles">
            <ParticlesConfig />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
