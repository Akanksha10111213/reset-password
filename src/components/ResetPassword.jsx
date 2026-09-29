import { useState } from "react";
import "./ResetPassword.css";
import background from '../assets/image.png'

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [message, setMessage] = useState("");

  const getPasswordStrength = (value) => {
    if (!value) return { label: "Weak", level: 0 };

    let score = 0;

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    if (score <= 1) return { label: "Weak", level: 1 };
    if (score <= 2) return { label: "Medium", level: 2 };

    return { label: "Strong", level: 3 };
  };

  const strength = getPasswordStrength(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }

    setMessage("Password reset successfully! (Demo only)");
  };

  return (
    <main className="reset-page">
      {/* LEFT SIDE */}
      <section className="reset-left">
        <header className="brand-header">
          <div className="brand-logo">
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 9L12 4L21 9L12 14L3 9Z"
                fill="white"
              />
              <path
                d="M6 11V16L12 20L18 16V11L12 15L6 11Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="brand-details">
            <h3>Placement &amp; Recruitment Platform</h3>
            <p>Connect · Discover · Succeed</p>
          </div>
        </header>

        <div className="left-content">
          <p className="eyebrow">RESET YOUR PASSWORD</p>

          <h1>
            Reset your password?
            <br />
            Get Back on Track.
          </h1>

          <p className="left-description">
            Enter your registered email address and we'll send you a link
            to reset your password.
          </p>

          <div className="illustration-wrapper">
            <img
              src={background}
              alt="Reset password illustration"
              className="reset-illustration"
            />
          </div>
        </div>

        <div className="left-footer">
          <div className="footer-shield">✓</div>
          <div>
            <p>
              A unified platform that simplifies training, placements, and
              recruitment management.
            </p>
            <span>
              Dr. Elena Vance — Dean of Experiential Education, Northeastern
              Consortium
            </span>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="reset-right">
        <a href="/login" className="back-login">
          <span>←</span> Back to Login
        </a>

        <div className="reset-form-container">
          <div className="form-heading">
            <h2>Reset Password</h2>
            <p>Choose a strong password to keep your account secure</p>
          </div>

          <form >
            {/* NEW PASSWORD */}
            <div className="form-group">
              <label htmlFor="password">New Password</label>

              <div className="input-wrapper">
                <span className="input-lock"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setMessage("");
                  }}
                  required
                />

                <button
                  type="button"
                  className="visibility-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
  <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
</svg>}
                </button>
              </div>

              <div className="password-strength">
                <div className="strength-track">
                  <div
                    className={`strength-fill strength-${strength.level}`}
                  />
                </div>

                <span>
                  Password strength:{" "}
                  <strong className={`strength-text-${strength.level}`}>
                    {strength.label}
                  </strong>
                </span>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="form-group confirm-group">
              <label htmlFor="confirmPassword">Confirm Password</label>

              <div className="input-wrapper">
                <span className="input-lock"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></span>

                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setMessage("");
                  }}
                  required
                />

                <button
                  type="button"
                  className="visibility-btn"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" style={{color:'#000'}} viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172_8z"/>
                      <path d="M8_5.5a2.5_2.5_0_1_0_0_5_2.5_2.5_0_0_0_0-5M4.5_8a3.5_3.5_0_１_１_7_0_3.5_3.5_0_０_１-7_0"/>
                    </svg>
                   : 
                    <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#000'}}  width="₁₆" height="₁₆" fill="currentColor" class="bi bi-eye-slash" viewBox="₀ ₋ ₋ ₋">
                      <path d="M₁₃.₃₅₉₁₁.₂₃₈C₁₅.₀₆₉₉₂₂C₁₆₂₂C₁₆₂₂S₋₃₋₅."/>
                    </svg>
                  }
                </button>
              </div>
            </div>

            {/* KEEP SIGNED IN */}
            <label className="keep-signed-in">
              <input
                type="checkbox"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
              />
              <span>Keep me signed in</span>
            </label>

            {message && (
              <p
                className={
                  message.includes("successfully")
                    ? "form-message success-message"
                    : "form-message error-message"
                }
              >
                {message}
              </p>
            )}

            <button type="submit" className="reset-submit">
              Reset Password <span>→</span>
            </button>
          </form>

          {/* DIVIDER */}
          <div className="or-divider">
            <span />
            <p>OR CONTINUE WITH</p>
            <span />
          </div>

          {/* GOOGLE BUTTON */}
          <button
            type="button"
            className="google-button"
            onClick={() => alert("Google sign-in is a demo.")}
          >
            <span className="google-icon">G</span>
            Google
          </button>

          {/* CREATE ACCOUNT */}
          <p className="create-account">
            Don't have an account? <a href="/register">Create Account</a>
          </p>

          {/* BOTTOM LINKS */}
          <footer className="form-footer">
            <a href="/help">Help</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default ResetPassword;