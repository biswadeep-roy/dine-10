import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <section className="register-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card card-register">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">Sign up</h1>
                <form>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <input type="email" className="form-control" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fas fa-lock"></i>
                      </span>
                      <input type="password" className="form-control" placeholder="Password" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                      <input type="password" className="form-control" placeholder="Repeat Password" />
                    </div>
                  </div>
                  <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="agreeCheck" />
                    <label className="form-check-label" htmlFor="agreeCheck">
                      I agree to all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn btn-primary btn-register">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
