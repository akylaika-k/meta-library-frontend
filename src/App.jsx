import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog"; 
import MyBooks from "./pages/MyBooks";
import Profile from "./pages/Profile";
import ManageBooks from "./pages/ManageBooks";

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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;