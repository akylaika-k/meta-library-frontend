import { useState } from "react";
import Sidebar from "../components/Sidebar";

function ManageBooks() {
  const [books, setBooks] = useState([
    { id: "1001/601", title: "Введение в искусственный интеллект", author: "А.В. Остроухов", status: "Доступен" },
    { id: "1001/308", title: "Информатика и основы программирования С#", author: "М.М. Бузмакова", status: "Доступен" },
    { id: "1001/207", title: "Искусство программирования ИГР на С++", author: "Михаил Фленов", status: "Забронирован" },
    { id: "1001/1003", title: "Основы программирования в среде UNITY", author: "А.Н. Пушкарев", status: "Доступен" }
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Вы уверены, что хотите удалить эту книгу?")) {
      setBooks(books.filter((b) => b.id !== id));
    }
  };

  return (
    <div className="app-layout">
      <Sidebar />
      
      <div className="main-content">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <div>
            <h2 style={{ color: "#000", margin: 0 }}>Book Management</h2>
            <p style={{ color: "#888", margin: "5px 0 0 0" }}>Управление инвентарем библиотеки</p>
          </div>
          <button className="bw-add-btn">+ Add Book</button>
        </div>

        <div className="bw-admin-table-container">
          <table className="bw-admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Автор/Тип</th>
                <th>Доступность</th>
                <th>Действие</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td style={{ fontWeight: "bold", color: "#000" }}>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <span style={{ color: book.status === "Available" ? "#15803d" : "#0369a1", fontWeight: "bold" }}>
                      {book.status}
                    </span>
                  </td>
                  <td>
                    <button className="bw-action-btn edit" title="Редактировать">✏️</button>
                    <button className="bw-action-btn delete" onClick={() => handleDelete(book.id)} title="Удалить">🗑️</button>
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

export default ManageBooks;