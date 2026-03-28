import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Главная</div>
      <Link to="/catalog">Каталог</Link>
      <Link to="/ebooks">Электронные книги</Link>
      <Link to="/audiobooks">Аудиокниги</Link>
      <Link to="/journals">Журналы и статьи</Link>
      <Link to="/new">Новинки</Link>
      <Link to="/recommend">Рекомендации</Link>
      <Link to="/popular">Популярные</Link>
      <br />
      <Link to="/bookmarks">Мои закладки</Link>
      <Link to="/my-reservations">Мои брони</Link>
      <Link to="/my-books">Мои книги</Link>
      <Link to="/history">История</Link>
      <br />
      <Link to="/profile">Мой профиль</Link>
      
      {/* ССЫЛКА ДЛЯ АДМИНА */}
      <br />
      <Link to="/manage" style={{ color: '#ffeb3b' }}>Управление книгами</Link>
    </div>
  );
}

export default Sidebar;