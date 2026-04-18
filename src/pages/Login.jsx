import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/catalog");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        
        
        <div className="login-form-side">
          <h2>Welcome!</h2>
          <input className="login-input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input className="login-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button className="login-btn" onClick={handleLogin}>SIGN IN</button>
        </div>

      
        <div className="login-brand-side">
          <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>BookWorm</h1>
          <p style={{ letterSpacing: "2px" }}>LIBRARY</p>
          <p style={{ marginTop: "30px", fontSize: "14px", color: "#aaa" }}>
            New to our platform? Sign Up now.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;