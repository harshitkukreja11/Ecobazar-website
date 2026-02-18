import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card p-3">
      <img src={product.image} alt={product.title} />
      <h6>{product.title}</h6>
      <p>${product.price}</p>

      <button
        className="btn btn-success"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
}
