import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useFirebase from '../../hooks/useFirebase';
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState([]);
  const location = useLocation()
  let locationHistory = location.state?.from?.pathname || "/home";
  const {
    user,
    loginUser,
    isLoading,
    signInWithGoogle,
    authLoginError,
    setAuthLoginError,
    authGoogleError,
    authSuccess,
    setAuthSuccess,
  } = useAuth();
  const [isVisible, setIsVisible] = React.useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // message is empty (meaning no errors). Adjust as needed
    if (!authLoginError && !authSuccess && !isLoading) {
      setIsVisible(false);
      return;
    }
    // error exists. Display the message and hide after 5 secs
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [authLoginError, authSuccess]); // executes every time `message` changes. Adjust as needed

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setAuthLoginError("");
    setAuthSuccess("Login Successfully!");
    loginUser(loginData.email, loginData.password, navigate,locationHistory);

    e.target.reset();
  };

  // Google SignIn
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };

  return (
    <div className="sign-form">
      <div className="signing-overlay d-flex justify-content-center align-items-center">
        <div className="form-box">
          <h2 className="text-uppercase fw-bolder">Login</h2>

          <form onSubmit={handleLoginSubmit}>
            {/* 
						{error && <Alert variant="danger">{error}</Alert>}
						{success && <Alert variant="success">{success}</Alert>} */}

            <input
              onBlur={handleOnBlur}
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              onBlur={handleOnBlur}
              type="password"
              name="password"
              placeholder="Password"
            />

            <button className="my-2 loginBtn w-100" type="submit">
              Login
            </button>

            <div className="d-flex gap-5 justify-content-center align-items-center">
              <p>
                Not a member?{" "}
                <Link
                  to="/register"
                  className="text-decoration-none theme-primary-text fw-bold"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>

          <div className="or-sign-with"> or </div>

          <button
            className="google-sign-btn my-2 py-1"
            onClick={handleGoogleSignIn}
          >
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt=""
            />
            <span className="mx-5 h6 fw-bold">Sign in with google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
