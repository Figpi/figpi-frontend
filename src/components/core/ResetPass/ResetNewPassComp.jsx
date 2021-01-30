import React from "react";

function ResetNewPassComp() {
  return (
    <>
      <div class="col-6 d-flex align-items-center">
        <div class="w-75 pl-4 mx-auto">
          <div class="mb-4">
            <h1 class="form-title">Update your Password</h1>
            <small class="text-muted">
              Now to the last step! We've confirmed you are the owner of the
              e-mail associated to the requested account. Now you can update
              your password.
            </small>
          </div>
          <form>
            <div class="mb-4">
              <label class="mb-2" for="exampleInputEmail">
                Password
              </label>
              <input
                type="password"
                class="form-control is-valid"
                placeholder="password"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <label class="mb-2" for="Password">
              Confirm Password
            </label>
            <div class="mb-4">
              <input
                type="password"
                class="form-control is-invalid"
                placeholder="Password"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" class="btn btn-block btn-schema mt-4">
              Update Password
            </button>
          </form>
          <div class="text-center mt-3">
            Remember Password? <a href="#">Login</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetNewPassComp;
