
import React from "react";
import "./App.css";
import image from "../src/assets/amico.png"
import image1 from "../src/assets/arrow.png"
import image2 from "../src/assets/tick.png"
import image3 from "../src/assets/logo.png"
import image4 from "../src/assets/verified.png"
  
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
          <div>
            <img  className="brand-icon"src={image3} alt="image3" />
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

          <div >
            <img className="testimonial-icon"src={image4} alt="image4" />
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

          
            <div className="outer-circle">
              <div >
                <img className="inner-circle" src={image2} alt="image2" />
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
            className="login-button"
            onClick={handleLogin}
          >
            <span>Back to Login</span>
            <img className="arrow" src={image1} alt="image1" />
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