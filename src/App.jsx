import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog"; 
import MyBooks from "./pages/MyBooks";
import Profile from "./pages/Profile";
import ManageBooks from "./pages/ManageBooks";
import Audiobooks from "./pages/Audiobooks";
import Bookmarks from "./pages/Bookmarks";
import MyReservations from "./pages/MyReservations";
import Ebooks from "./pages/Ebooks";
import NewBooks from "./pages/NewBooks";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} /> 
          <Route path="/my-books" element={<MyBooks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/manage" element={<ManageBooks />} />
          <Route path="/audiobooks" element={<Audiobooks />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/new" element={<NewBooks />} />
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;