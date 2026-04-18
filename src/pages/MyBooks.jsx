import { useState } from "react";
import Sidebar from "../components/Sidebar";

function MyBooks() {
  const [myBooks, setMyBooks] = useState([
    { id: 1, title: "Маленькие женщины", author: "Луиза Мэй Олкотт", status: "borrowed", statusText: "Сейчас читаю" },
    { id: 2, title: "Евгений Онегин", author: "А.С. Пушкин", status: "returned", statusText: "Возвращено" },
    { id: 3, title: "Макс Фрай", author: "Светлана Мартынчик", status: "borrowed", statusText: "Сейчас читаю" },
    { id: 4, title: "Белая линия ночи", author: "Неизвестен", status: "overdue", statusText: "Просрочено!" },
  ]);

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <h2 style={{ color: "#000", marginBottom: "5px" }}>Мои книги</h2>
        <p style={{ color: "#888", marginBottom: "30px" }}>История ваших чтений и текущие задолженности</p>
        
        <div className="my-books-grid">
          {myBooks.map((book) => (
            <div key={book.id} className="bw-book-card">
              <div className="bw-book-cover">
                Нет обложки
              </div>
              
              <div className="bw-book-info">
                <div className="bw-book-title">{book.title}</div>
                <div className="bw-book-author">{book.author}</div>
    
                <div className={`bw-status-badge bw-status-${book.status}`}>
                  {book.statusText}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyBooks;