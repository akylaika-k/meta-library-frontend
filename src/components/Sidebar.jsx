import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Главная</div>
      <Link to="/catalog">Каталог</Link>
      <Link to="/ebooks">Электронные книги</Link>
      <Link to="/audiobooks">Аудиокниги</Link>
      <Link to="/new">Новинки</Link>
      <br />
      <Link to="/bookmarks">Мои закладки</Link>
      <Link to="/my-reservations">Мои брони</Link>
      <Link to="/my-books">Мои книги</Link>
      <br />
      <Link to="/profile">Мой профиль</Link>
      
      <br />
      <Link to="/manage" style={{ color: '#ffeb3b' }}>Управление книгами</Link>
    </div>
  );
}

export default Sidebar;