import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

// Util-component imports
import ParticlesConfig from "../components/utils/ParticlesConfig";

function Login() {
  // Set page title
  const page_title = "Login";
  document.title = `${page_title} | Figpi`;

  // POST Request to login
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authtoken, setAuthToken] = useState("");

  const onUsernameChange = (e) => setUsername(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  // Handle Submit of user credentials
  const handleSubmit = (e) => {
    e.preventDefault();

    const login_endpoint =
      "https://figpi-backend.herokuapp.com/api/accounts/login";

    const data = { username, password };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(login_endpoint, requestOptions)
      .then((response) => response.json())
      .then((res) => handleCookie(res.token));
  };

  // Handle cooke creation
  const handleCookie = (authtoken) => {
    if (authtoken !== undefined) {
      const cOptions = { path: "/", sameSite: "lax" };
      try {
        setCookie("auth", authtoken, cOptions);
        console.log("Cookie Set - value " + authtoken);
        return <Redirect to="/" />;
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Wrong");
    }
  };

  return (
    <div className="login--screen p-0">
      <div className="container-fluid pr-0">
        <div className="row min-vh-100 row-mr-fix">
          <div className="col-lg-5 col-md-7 d-flex align-items-center">
            <div className="w-75 mx-auto">
              <div className="mb-4">
                <h1 className="display-4">Log in</h1>
                <small className="text-muted">
                  Log in with your connected e-mail to get access to the
                  <span className="figpi-green"> Figpi</span> data-analytics
                  platform.
                </small>
              </div>
              <form>
                <div className="mb-4">
                  <label className="mb-2" htmlFor="exampleInputUsername">
                    Your Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername"
                    aria-describedby="UsernameHelp"
                    placeholder="Username"
                    value={username}
                    onChange={onUsernameChange}
                  />
                </div>
                <label className="mb-2" htmlFor="Password">
                  Password
                </label>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={onPasswordChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-block btn-auth mt-4"
                  onClick={handleSubmit}
                >
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
