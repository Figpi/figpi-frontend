import React from "react";

function ResetAuthComp() {
  return (
    <>
      <div className="col-6 d-flex align-items-center">
        <div className="w-75 pl-4 mx-auto">
          <div className="mb-4">
            <h1 className="form-title">Check you mail</h1>
            <small className="text-muted">
              We have sent you a 6-digit numeric code. Enter the code in the
              field below and you will be able to update your password
              <br />
              Hint: check you spam folder, if you cant find it.
            </small>
          </div>
          <form>
            <div className="mb-4">
              <label className="mb-2" for="exampleInputEmail">
                Your authentication code
              </label>
              <input
                type="input"
                className="form-control is-valid"
                placeholder="Ex: 642521"
                id="authcodeinput"
                aria-describedby="authenticationinput"
              />
            </div>

            <button type="submit" className="btn btn-block btn-schema mt-4">
              Reset Password
            </button>
          </form>
          <div className="text-center mt-3">
            Remember Password? <a href="#">Login</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetAuthComp;
