import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function MyBooks() {
  const [myBooks, setMyBooks] = useState([
    { id: 1, title: "Маленькие женщины", status: "red" },
    { id: 2, title: "Евгений Онегин", status: "green" },
    { id: 3, title: "Макс Фрай", status: "yellow" },
    { id: 4, title: "Обложка книг", status: "yellow" },
    { id: 5, title: "Invisible Man", status: "yellow" },
    { id: 6, title: "Белая линия ночи", status: "yellow" },
  ]);

  return (
    <div className="app-layout">
     <Sidebar /> 
     
      <div className="main-content">
        <h2 className="page-title">Мои книги</h2>
        
        <div className="books-grid">
          {myBooks.map((book) => (
            <div key={book.id} className="grid-book-card">
              <div className="grid-book-cover">
                {book.title}
              </div>
              <div className={`status-bar status-${book.status}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyBooks;