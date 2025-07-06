// src/pages/ProductDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} width="300" />
      <p><strong>Price:</strong> ₹ {product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
    </div>
  );
}

export default ProductDetail;
