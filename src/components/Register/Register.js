import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useFirebase from '../../hooks/useFirebase';
import "./Register.css";

const Register = () => {
  const [loginData, setLoginData] = useState([]);
  
  const {
    registerUser,
    isLoading,
    signInWithGoogle,
    authSignUpError,
    setAuthSignUpError,
    authSuccess,
    setAuthSuccess,
  } = useAuth();

  // const { registerUser, isLoading, signInWithGoogle, authSignUpError, setAuthSignUpError, authSuccess, setAuthSuccess } = useFirebase();
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    // message is empty (meaning no errors). Adjust as needed
    if (!authSignUpError && !authSuccess) {
      setIsVisible(false);
      return;
    }
    // error exists. Display the message and hide after 5 secs
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [authSignUpError, authSuccess]); // executes every time `message` changes. Adjust as needed

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    const pass = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPassword").value;
    const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordValidation.test(pass)) {
      setAuthSuccess("");
      setAuthSignUpError(
        "Password must be 8 character with letter & number combination"
      );
      return;
    }
    if (pass !== confirmPass) {
      setAuthSuccess("");
      setAuthSignUpError("Password didn't match!");
      return;
    }

    setAuthSuccess("Sign Up Successfully!");
    setAuthSignUpError("");
    loginData.joined = new Date().toDateString();
    registerUser(
      loginData.email,
      loginData.password,
      loginData.name,
      navigate,
      loginData
    );
    e.target.reset();
  };

  // Handle Google Sign In
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };

  return (
    <div className="sign-form">
      <div className="signing-overlay d-flex justify-content-center align-items-center">
        <div className="form-box">
          <h2 className="text-uppercase fw-bolder">Register</h2>

          {/* Error Alert msg Start */}
          {isVisible && authSignUpError && (
            <div sx={{ width: "90%", mx: "auto" }}>
              <Alert variant="filled" severity="error" sx={{ my: 2 }}>
                {authSignUpError}
              </Alert>
            </div>
          )}
          {/* Error Alert msg END */}

          {/* Success Alert msg Start */}
          {isVisible && authSuccess && !isLoading && (
            <div sx={{ width: "90%", mx: "auto" }}>
              <Alert variant="filled" severity="success" sx={{ my: 2 }}>
                {authSuccess}
              </Alert>
            </div>
          )}
          {/* Success Alert msg END */}

          <form onSubmit={handleRegisterSubmit}>
            <div className="d-flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onBlur={handleOnBlur}
              />
              <input
                type="text"
                name="img"
                placeholder="Image URL"
                required
                onBlur={handleOnBlur}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onBlur={handleOnBlur}
            />
            <div className="d-flex gap-4">
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                required
                onBlur={handleOnBlur}
              />
              <input
                type="text"
                name="area"
                placeholder="Your Area"
                required
                onBlur={handleOnBlur}
              />
            </div>
            <div className="d-flex gap-4">
              <input
                type="text"
                name="category"
                placeholder="Category"
                required
                onBlur={handleOnBlur}
              />
              <input
                type="text"
                name="bio"
                placeholder="Bio"
                required
                onBlur={handleOnBlur}
              />
            </div>
            <div className="d-flex gap-4">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                onBlur={handleOnBlur}
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
                onBlur={handleOnBlur}
              />
            </div>

            <button className="my-2 registerBtn w-100" type="submit">
              Create Account
            </button>

            <p>
              Not a member?{" "}
              <Link
                to="/login"
                className="text-decoration-none theme-primary-text fw-bold"
              >
                Login
              </Link>
            </p>
          </form>

          <div className="or-sign-with">or</div>

          <button
            onClick={handleGoogleSignIn}
            className="google-sign-btn my-2 py-1"
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

export default Register;
