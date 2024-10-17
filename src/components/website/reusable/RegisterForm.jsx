import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();

  // To handle navigation
  const handleSubmit = (e) => {
    navigate("/dashboard");
  };
  return (
    <section id="contact" className="section-bg">
      <div className="container" data-aos="fade-up">
        <div className="form">
          <form role="form" className="php-email-form">
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="number"
                  name="phone_num"
                  className="form-control"
                  id="phone_num"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  placeholder="Address"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Type your password"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="password"
                  name="password_confirm"
                  className="form-control"
                  id="password_confirm"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="button" className="vault-btn" onClick={handleSubmit}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;
