// import ResetPassword from './components/ResetPassword'
// import './App.css'

// function App() {

//   return (
//     <>
//   <ResetPassword />;
//     </>
//   )
// }

// export default App
import React from "react";
import "./App.css";
import image from "../src/assets/amico.png"

const GraduationIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 9l9-5 9 5-9 5-9-5Z" />
    <path d="M7 11v5c2.8 2 7.2 2 10 0v-5" />
    <path d="M21 9v6" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M5 12.5L9.5 17L19 7.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3L20 6V11.5C20 16.4 16.6 19.5 12 21C7.4 19.5 4 16.4 4 11.5V6L12 3Z" />
    <path d="M8.5 12L10.8 14.3L15.5 9.5" />
  </svg>
);

function App() {
  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="success-page">

      {/* ================= LEFT SECTION ================= */}
      <section className="left-section">

        {/* Logo / Brand */}
        <div className="brand">
          <div className="brand-icon">
            <GraduationIcon />
          </div>

          <div className="brand-text">
            <h1>Placement &amp; Recruitment Platform</h1>
            <p>Connect • Discover • Succeed</p>
          </div>
        </div>

        {/* Heading */}
        <div className="left-content">
          <div className="eyebrow">
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

        {/* Dummy Illustration */}
        <div className="illustration-wrapper">
            <img
              src={image}
              alt="Reset password illustration"
              className="reset-illustration"
            />
          </div>


        {/* Bottom Quote */}
        <div className="testimonial">

          <div className="testimonial-icon">
            <ShieldIcon />
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
      <section className="right-section">

        <div className="success-content">

          {/* Success Icon */}
          <div className="success-icon">

            <span className="burst burst-one"></span>
            <span className="burst burst-two"></span>
            <span className="burst burst-three"></span>
            <span className="burst burst-four"></span>

            <div className="outer-circle">
              <div className="inner-circle">
                <CheckIcon />
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
            new password and continue exploring all the opportunities
            on EduHire.
          </p>


          {/* Login Button */}
          <button
            className="login-button"
            onClick={handleLogin}
          >
            <span>Back to Login</span>
            <span className="arrow">→</span>
          </button>


          {/* Support */}
          <div className="support">

            <span className="support-line"></span>

            <span>
              Need help?{" "}
              <a href="mailto:support@example.com">
                Contact Support
              </a>
            </span>

            <span className="support-line"></span>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;