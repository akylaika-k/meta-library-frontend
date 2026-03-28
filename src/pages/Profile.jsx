import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { role } = useContext(AuthContext);

  const activities = [
    { id: 1, status: "yellow" },
    { id: 2, status: "green" },
    { id: 3, status: "green" },
    { id: 4, status: "red" },
  ];

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <div className="profile-wrapper">
          
          <div className="profile-left-panel">
            {activities.map((item) => (
              <div key={item.id} className="profile-list-item">
                <div className="item-square"></div>
                <div className="item-line"></div>
                <div className={`item-badge badge-${item.status}`}></div>
              </div>
            ))}
          </div>

          <div className="profile-right-panel">
            <div className="profile-avatar"></div>
            
            <div className="profile-info-line">
              Студент (Роль: {role || "user"})
            </div>
            <div className="profile-info-line">ID: 1029384</div>
            <div className="profile-info-line">Факультет: IT</div>
            <div className="profile-info-line">Курс: 3</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;