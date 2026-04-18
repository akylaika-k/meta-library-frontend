import { useContext } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { role } = useContext(AuthContext);

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <h2 style={{ color: "#000", marginBottom: "5px" }}>Мой профиль</h2>
        <p style={{ color: "#888", marginBottom: "30px" }}>Управление аккаунтом и ваша статистика</p>
        
        <div className="bw-profile-container">
          
          <div className="bw-profile-card">
            <div className="bw-profile-avatar">👤</div>
            <h3 style={{ margin: "0 0 10px 0", color: "#000" }}>Студент IT</h3>
            <p style={{ color: "#888", fontSize: "14px", margin: "0 0 5px 0" }}>Роль: {role || "user"}</p>
            <p style={{ color: "#888", fontSize: "14px", margin: "0 0 25px 0" }}>ID: 1029384</p>
            
            <button style={{ padding: "12px", background: "#000", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", width: "100%", fontWeight: "bold" }}>
              Change Credentials
            </button>
          </div>

          <div className="bw-profile-stats">
            <div className="bw-stat-box">
              <div className="bw-stat-number">12</div>
              <div className="bw-stat-label">Total Returned Books</div>
            </div>
            
            <div className="bw-stat-box">
              <div className="bw-stat-number">2</div>
              <div className="bw-stat-label">Total Borrowed Books</div>
            </div>
            
            <div className="bw-stat-box" style={{ gridColumn: "span 2", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ margin: "0 0 8px 0", color: "#000" }}>Let's browse available book inventory</h3>
                <p style={{ color: "#888", fontSize: "14px", margin: 0 }}>Откройте для себя новые знания в нашем каталоге.</p>
              </div>
              <Link to="/catalog" style={{ textDecoration: "none", padding: "12px 24px", background: "#f0f0f0", color: "#000", border: "1px solid #ddd", borderRadius: "6px", fontWeight: "bold" }}>
                В каталог
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;