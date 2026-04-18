import { useState } from "react";
import Sidebar from "../components/Sidebar";

function NewBooks() {
  const [newBooks] = useState([
    { id: "1001/601", title: "Введение в искусственный интеллект", author: "А.В. Остроухов", year: 2024 },
    { id: "1001/308", title: "Информатика и основы программирования С#", author: "М.М. Бузмакова", year: 2024 }
  ]);

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <h2 style={{ color: "#000", marginBottom: "5px" }}>Новинки</h2>
        <p style={{ color: "#888", marginBottom: "30px" }}>Самые свежие поступления нашей библиотеки</p>

        <div className="my-books-grid">
          {newBooks.map(book => (
            <div key={book.id} className="bw-book-card">
              <div className="bw-book-cover" style={{ position: "relative" }}>
                <span style={{ position: "absolute", top: "10px", right: "10px", background: "#dc2626", color: "white", padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" }}>
                  NEW
                </span>
                Обложка
              </div>
              
              <div className="bw-book-info">
                <div className="bw-book-title">{book.title}</div>
                <div className="bw-book-author">{book.author}</div>
                <div style={{ fontSize: "12px", color: "#888", marginBottom: "15px" }}>Год издания: {book.year}</div>
                
                <div style={{ marginTop: 'auto' }}>
                  <button style={{ width: "100%", padding: "10px", background: "#f4f6f9", color: "#000", border: "1px solid #ddd", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewBooks;