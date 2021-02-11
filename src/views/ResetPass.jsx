import React from "react";

// components
import ResetPassComp from "../components/core/ResetPass/ResetPassComp";
import ResetAuthComp from "../components/core/ResetPass/ResetAuthComp";
import ResetNewPassComp from "../components/core/ResetPass/ResetNewPassComp";

// images
import Pass from "../assets/images/authentication.svg";
import Auth from "../assets/images/new_message.svg";
import NewPass from "../assets/images/online_protection_monochromatic.svg";

function ResetPass() {
  // Set page title
  const page_title = "Reset Password";
  document.title = `${page_title} | Figpi`;

  // change state
  var progress = {
    width: 33 + "%",
    infographic: Pass,
    alter: "Protect your password",
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100">
          <div className="col-md-12 row-progress">
            {/* PROGRESS BAR */}
            <div className="progress reset-progress">
              <div
                className="progress-bar bg-schema"
                role="progressbar"
                style={progress.widthwidth}
                aria-valuenow="66"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          {/* LEFT SIDE */}
          <ResetPassComp />

          {/* RIGHT SIDE */}
          <div className="col-6 d-flex align-items-center">
            <img
              className="reset-infographic mx-auto"
              src={progress.infographic}
              alt={progress.alter}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPass;
