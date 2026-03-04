import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Parcel Login</h1>
        
        <div className="input-field">
          <label>Email address</label>
          <input type="email" placeholder="Email address" />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>

        <button className="login-btn">LOGIN</button>

        <p className="register-text">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;