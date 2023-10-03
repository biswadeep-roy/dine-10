import React from 'react';
import './Login.css'; // Import your CSS file for styling if needed

const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form>
            <div className="mb-4">
              <label htmlFor="form2Example1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="form2Example1"
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="form2Example2" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="form2Example2"
                className="form-control"
              />
            </div>

            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="form2Example31"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <div className="col">
                <a href="#!" className="forgot-password-link">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-block mb-4"
            >
              Sign in
            </button>

            <div className="text-center">
              <p>
                Not a member? <a href="/Register">Register</a>
              </p>
              <p>or sign up with:</p>
              <button
                type="button"
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-facebook-f"></i>
              </button>

              <button
                type="button"
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-google"></i>
              </button>

              <button
                type="button"
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-twitter"></i>
              </button>

              <button
                type="button"
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
