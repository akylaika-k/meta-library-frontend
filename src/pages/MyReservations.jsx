import { useState } from "react";
import Sidebar from "../components/Sidebar";

function MyReservations() {
  const [reservations, setReservations] = useState([
    { id: "1001/207", title: "Искусство программирования ИГР на С++", date: "18.04.2026", status: "Ожидает выдачи" },
    { id: "1001/308", title: "Информатика и основы программирования С#", date: "10.04.2026", status: "Выдана на руки" }
  ]);

  return (
     <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <h2 style={{ color: "#000", marginBottom: "5px" }}>Мои брони</h2>
        <p style={{ color: "#888", marginBottom: "20px" }}>Отслеживайте статус забронированных книг</p>

        <div className="bw-admin-table-container">
          <table className="bw-admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Название книги</th>
                <th>Дата бронирования</th>
                <th>Статус</th>
                <th>Действие</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map(res => (
                <tr key={res.id}>
                   <td style={{ fontWeight: "bold" }}>{res.id}</td>
                   <td>{res.title}</td>
                   <td>{res.date}</td>
                   <td>
                     <span style={{ 
                       fontWeight: "bold", 
                       color: res.status === 'Выдана на руки' ? '#15803d' : '#d97706',
                       background: res.status === 'Выдана на руки' ? '#dcfce7' : '#fef3c7',
                       padding: '4px 10px',
                       borderRadius: '20px',
                       fontSize: '12px'
                     }}>
                       {res.status}
                     </span>
                   </td>
                   <td>
                     {res.status === "Ожидает выдачи" && (
                       <button className="bw-action-btn delete">Отменить бронь</button>
                     )}
                   </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyReservations;