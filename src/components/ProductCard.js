// src/components/ProductCard.jsx
function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid gray", padding: "1rem" }}>
      <img src={product.thumbnail} alt={product.title} width="100%" height="150px" />
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductCard;
