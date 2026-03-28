import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";

function Catalog() {
  const [books, setBooks] = useState([]);
  const { role } = useContext(AuthContext);

  useEffect(() => {
    const mockBooks = [
      { id: 1, title: "EASY MANAGE STOCKS", desc: "Lorem ipsum dolor sit amet...", status: "reserve" },
      { id: 2, title: "РИЧАРД ФЕЙНМАН", desc: "Lorem ipsum dolor sit amet...", status: "reserved" }
    ];
    setBooks(mockBooks);

    // бэкенд
    // API.get("/api/products").then(res => setBooks(res.data));
  }, []);

  return (
    <div className="app-layout">
     <Sidebar /> 

      <div className="main-content">
        <input type="text" className="search-bar" placeholder="🔍 Поиск..." />

        <div className="books-container">
          {books.map((book) => (
            <div key={book.id} className="book-list-item">
        
              <div className="book-cover"></div> 
              
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-desc">{book.desc}</p>
                
                {book.status === "reserve" ? (
                  <button className="btn-reserve">Reserve</button>
                ) : (
                  <button className="btn-reserved">Reserved</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;