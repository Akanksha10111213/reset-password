// import {link} from 'react-route-dom'
import React from "react";
import "./App.css";
import image from "../src/assets/amico.png";
import image1 from "../src/assets/arrow.png";
import image2 from "../src/assets/tick.png";
import image3 from "../src/assets/logo.png";
import image4 from "../src/assets/verified.png";
import { Link } from 'react-router-dom';

function App() {
  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="successPage-success-page">

      {/* ================= LEFT SECTION ================= */}
      <section className="successPage-left-section">

        {/* Logo / Brand */}
        <div className="successPage-brand">
          <div>
            <img
              className="successPage-brand-icon"
              src={image3}
              alt="image3"
            />
          </div>

          <div className="successPage-brand-text">
            <h1>Placement & Recruitment Platform</h1>
            <p>Connect • Discover • Succeed</p>
          </div>
        </div>

        {/* Heading */}
        <div className="successPage-left-content">
          <div className="successPage-eyebrow">
            NEW BEGINNING AWAIT
          </div>

          <h2>
            Your Password Has
            <br />
            Been Reset Successfully!
          </h2>

          <p>
            You’re all set. Your account is now secure.
            <br />
            Log in and continue your journey towards a brighter future.
          </p>
        </div>

        {/* Illustration */}
        <div className="successPage-illustration-wrapper">
          <img
            src={image}
            alt="Reset password illustration"
            className="successPage-reset-illustration"
          />
        </div>

        {/* Bottom Quote */}
        <div className="successPage-testimonial">

          <div>
            <img
              className="successPage-testimonial-icon"
              src={image4}
              alt="image4"
            />
          </div>

          <div>
            <strong>
              “A unified platform that simplifies training, placements,
              and recruitment management.”
            </strong>

            <span>
              Dr. Elena Vance — Dean of Experiential Education,
              Northeastern Consortium
            </span>
          </div>

        </div>

      </section>

      {/* ================= RIGHT SECTION ================= */}
      <section className="successPage-right-section">

        <div className="successPage-success-content">

          {/* Success Icon */}
          <div className="successPage-success-icon">

            <div className="successPage-outer-circle">
              <div>
                <img
                  className="successPage-inner-circle"
                  src={image2}
                  alt="image2"
                />
              </div>
            </div>

          </div>

          {/* Heading */}
          <h2>
            Password Reset Successfully!
          </h2>

          {/* Description */}
          <p>
            Your password has been reset. You can now log in with your
            new password and continue exploring all the opportunities on EduHire.
          </p>

          {/* Login Button */}
          <button
            className="successPage-login-button"
            onClick={handleLogin}
          >
            <span>Back to Login</span>
            <img
              className="successPage-arrow"
              src={image1}
              alt="image1"
            />
          </button>

          {/* Support */}
          <div className="successPage-support">

            <span className="successPage-support-line"></span>

            <span>
              Need help?{" "}
              <Link to="">
                Contact Support
              </Link>
            </span>

            <span className="successPage-support-line"></span>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;
