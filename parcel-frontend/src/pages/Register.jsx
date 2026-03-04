import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">
          Create Account <span>🚀</span>
        </h2>

        <div className="register-fields">
          <input
            type="text"
            placeholder="Full Name"
            className="register-input"
          />

          <input
            type="email"
            placeholder="Email"
            className="register-input"
          />

          <input
            type="password"
            placeholder="Password"
            className="register-input"
          />

          {/* Optional password strength indicator */}
          <div className="password-strength">
            <div className="password-strength-bar" style={{ width: '60%' }}></div>
          </div>

          <button className="register-btn">
            REGISTER
          </button>

          <p className="login-link-text">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;