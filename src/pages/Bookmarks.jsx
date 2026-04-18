import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([
    { id: "1001/601", title: "Введение в искусственный интеллект", author: "А.В. Остроухов" },
    { id: "1001/1003", title: "Основы программирования в среде UNITY", author: "А.Н. Пушкарев" }
  ]);

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter(b => b.id !== id));
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <h2 style={{ color: "#000", marginBottom: "5px" }}>Мои закладки</h2>
        <p style={{ color: "#888", marginBottom: "30px" }}>Книги, которые вы хотите прочитать позже</p>

        {/* Используем нашу крутую сетку карточек из MyBooks */}
        <div className="my-books-grid">
          {bookmarks.map(book => (
            <div key={book.id} className="bw-book-card">
              <div className="bw-book-cover">Обложка</div>
              
              <div className="bw-book-info">
                <div className="bw-book-title">{book.title}</div>
                <div className="bw-book-author">{book.author}</div>
                
                <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                  <button style={{ flex: 1, padding: "8px", background: "#000", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
                    Забронировать
                  </button>
                  <button 
                    onClick={() => removeBookmark(book.id)}
                    style={{ padding: "8px 12px", background: "#fee2e2", color: "#b91c1c", border: "none", borderRadius: "6px", cursor: "pointer" }}
                    title="Удалить из закладок"
                  >
                    🗑️
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

export default Bookmarks;