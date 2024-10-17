import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
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
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
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
              <button className="vault-btn" type="button" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
