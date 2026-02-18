import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const isInWishlist = wishlistItems.find(
    (item) => item.id === product.id
  );

  return (
    <div className="card p-3 position-relative">

      {/* ❤️ Wishlist Button */}
      <button
        className="btn position-absolute top-0 end-0 m-2"
        onClick={() =>
          isInWishlist
            ? dispatch(removeFromWishlist(product.id))
            : dispatch(addToWishlist(product))
        }
      >
        {isInWishlist ? "❤️" : "🤍"}
      </button>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ cursor: "pointer" }}
        className="img-fluid"
      />

      {/* Product Title */}
      <h6
        className="mt-3"
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ cursor: "pointer" }}
      >
        {product.title}
      </h6>

      <p className="text-success fw-semibold">
        ${product.price}
      </p>

      {/* Add To Cart */}
      <button
        className="btn btn-success"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
}
