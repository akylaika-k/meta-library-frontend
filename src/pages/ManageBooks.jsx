import { useState } from "react";
import Sidebar from "../components/Sidebar";

function ManageBooks() {
  const [books, setBooks] = useState([
    { id: 1, title: "Название книги 1", desc: "Описание книги 1..." },
    { id: 2, title: "Название книги 2", desc: "Описание книги 2..." },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Вы уверены, что хотите удалить эту книгу?");
    if (confirmDelete) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Редактирование книги с ID: ${id}`);
  };

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <h2 className="page-title">Управление книгами</h2>
        
        <div className="admin-books-list">
          {books.map((book) => (
            <div key={book.id} className="admin-book-card">
              <div className="admin-book-cover"></div>
              
              <div className="admin-book-content">
                <div className="admin-book-header">
                  <span className="admin-book-title">{book.title}</span>
                  <button className="btn-edit" onClick={() => handleEdit(book.id)}>
                    редактировать
                  </button>
                </div>
                
                <div className="admin-book-desc">
                  {book.desc}
                </div>
                
                <button className="btn-delete" onClick={() => handleDelete(book.id)}>
                  удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageBooks;