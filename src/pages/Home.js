import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  let filtered = [...products];
  if (categoryFilter) {
    filtered = filtered.filter(p => p.category === categoryFilter);
  }
  if (sortOrder === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Product Store</h2>
      <div>
        <label>Filter by Category: </label>
        <select onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">All</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>

        <label style={{ marginLeft: "1rem" }}>Sort by Price: </label>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">None</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginTop: "1rem" }}>
        {filtered.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
