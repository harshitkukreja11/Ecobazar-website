import { FaStar } from "react-icons/fa";
import "./product.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="img-fluid product-img"
        />
      </div>

      <div className="product-content">
        <h6 className="product-name">{product.name}</h6>
        <p className="product-price">${product.price.toFixed(2)}</p>

        <div className="product-stars">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={index < product.rating ? "star filled" : "star"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
