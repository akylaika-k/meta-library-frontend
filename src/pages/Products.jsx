import { useEffect, useState, useContext } from "react";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";

function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { role } = useContext(AuthContext);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Ошибка при загрузке продуктов", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    if (!name || !price) return;
    try {
      await API.post("/api/products", { name, price });
      setName("");
      setPrice("");
      fetchProducts();
    } catch (error) {
      console.error("Ошибка при добавлении", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await API.delete(`/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Ошибка при удалении", error);
    }
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h2 className="products-title">Список продуктов</h2>
      </div>

      {role && (
        <div className="add-product-form">
          <input 
            className="input-field" 
            placeholder="Название товара" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            className="input-field" 
            type="number"
            placeholder="Цена ($)" 
            value={price}
            onChange={(e) => setPrice(e.target.value)} 
          />
          <button className="btn-success" onClick={addProduct}>
            Добавить товар
          </button>
        </div>
      )}

      <div className="products-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <div className="product-info">
              <span className="product-name">{p.name}</span>
              <span className="product-price">${p.price}</span>
            </div>
            
            {role === "admin" && (
              <button className="btn-danger" onClick={() => deleteProduct(p.id)}>
                Удалить
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;