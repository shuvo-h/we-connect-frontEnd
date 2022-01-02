import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
	return (
		<div className="sign-form">
			<div className="signing-overlay d-flex justify-content-center align-items-center">
				<div className="form-box">
					<h2 className="text-uppercase fw-bolder">Register</h2>

					{/* error &&  */<Alert variant="danger">"This is Error msg."{/* {error} */}</Alert>}

					<form>
						<input type="text" placeholder="Your Name" required />
						<input type="email" placeholder="Your Email" required />
						<div className="d-flex gap-4">
							<input type="password" placeholder="Password" required />
							<input type="password" placeholder="Confirm Password" required />
						</div>

						<button className="my-2 registerBtn w-100" type="submit">Create Account</button>

						<p>Not a member? <Link to="/login" className="text-decoration-none theme-primary-text fw-bold">Login</Link></p>
					</form>

					<div className="or-sign-with">or</div>

					<button className="google-sign-btn my-2 py-1">
						<img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
						<span className="mx-5 h6 fw-bold">Sign in with google</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;