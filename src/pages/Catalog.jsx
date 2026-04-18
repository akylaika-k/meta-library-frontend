import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Catalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const mockBooks = [
      { id: "1001/601", title: "Введение в искусственный интеллект", author: "А.В. Остроухов", pages: 250, year: 2024 },
      { id: "1001/308", title: "Информатика и основы программирования С#", author: "М.М. Бузмакова", pages: 180, year: 2024 },
      { id: "1001/207", title: "Искусство программирования ИГР на С++", author: "Михаил Фленов", pages: 256, year: 2023 },
      { id: "1001/1003", title: "Основы программирования в среде UNITY", author: "А.Н. Пушкарев", pages: 165, year: 2023 }
    ];
    setBooks(mockBooks);
  }, []);

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <h2 style={{ marginBottom: "20px" }}>Каталог (BookWorm)</h2>
        
        <div style={{ display: "grid", gap: "15px" }}>
          {books.map((book) => (
            <div key={book.id} style={{ background: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
              <h3 style={{ margin: "0 0 10px 0" }}>{book.title}</h3>
              <p style={{ color: "#666", margin: "0 0 5px 0" }}>Автор: {book.author}</p>
              <p style={{ color: "#999", fontSize: "14px", margin: 0 }}>
                Код: {book.id} | {book.pages} стр. | Год: {book.year}
              </p>
              <button style={{ marginTop: "15px", padding: "8px 16px", background: "#000", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                Reserve Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;