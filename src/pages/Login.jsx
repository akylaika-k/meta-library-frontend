import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    navigate("/catalog"); 
    
    /* 
    try {
      const res = await API.post("/auth/login", { username, password });
      const token = res.data.token;
      const payload = JSON.parse(atob(token.split(".")[1]));
      login(token, payload.role);
      navigate("/catalog");
    } catch (error) {
      alert("Ошибка входа!");
    }
    */
  };
return (
    <div className="login-page">
      <div className="login-box">
        <input 
          placeholder="Логин" 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Пароль" 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>Войти</button>
      </div>
    </div>
  );
}

export default Login;