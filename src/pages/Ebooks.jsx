import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Ebooks() {
  const [ebooks] = useState([
    { id: "4001/1301", title: "PYTHON TRICKS THE BOOK", author: "DAN BADER", format: "PDF" },
    { id: "4001/3301", title: "Linux basics for hackers", author: "Occupy TheWeb", format: "EPUB" },
    { id: "4001/2801", title: "Fluent Python", author: "Luciano Ramalho", format: "PDF" }
  ]);

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <h2 style={{ color: "#000", marginBottom: "5px" }}>Электронные книги</h2>
        <p style={{ color: "#888", marginBottom: "30px" }}>Доступны для чтения прямо сейчас в любом месте</p>

        <div className="my-books-grid">
          {ebooks.map(book => (
            <div key={book.id} className="bw-book-card">
              <div className="bw-book-cover" style={{ background: "#111", color: "#fff" }}>
                {book.format}
              </div>
              
              <div className="bw-book-info">
                <div className="bw-book-title">{book.title}</div>
                <div className="bw-book-author">{book.author}</div>
                
                <div style={{ marginTop: 'auto' }}>
                  <button style={{ width: "100%", padding: "10px", background: "#000", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
                    Читать онлайн
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

export default Ebooks;