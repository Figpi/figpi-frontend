import React from "react";
import { Link } from "react-router-dom";

function ResetPass() {
  return (
    <>
      <div className="col-6 d-flex align-items-center">
        <div className="w-75 pl-4 mx-auto">
          <div className="mb-4">
            <h1 className="form-title">Forgot your? Password?</h1>
            <small className="text-muted">
              Don't worry the IT-rescue team is here to help! Just enter the
              email associated with your accound and we'll work our magic.
            </small>
          </div>
          <form>
            <div className="mb-4">
              <label className="mb-2" for="exampleInputEmail">
                Your e-mail
              </label>
              <input
                type="email"
                className="form-control is-valid"
                placeholder="Email address"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <button type="submit" className="btn btn-block btn-schema mt-4">
              Log in
            </button>
          </form>
          <div className="text-center mt-3">
            Remember Password? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPass;
