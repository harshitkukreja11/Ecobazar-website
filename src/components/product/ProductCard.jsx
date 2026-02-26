import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaStar,
  FaEye,
  FaHeart,
} from "react-icons/fa";
import { useState } from "react";
import "./product.css";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [clickedId, setClickedId] = useState(null);

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  if (!product) return null;

  const isInWishlist = wishlistItems.find(
    (item) => item.id === product.id
  );

  const discount =
    product.oldPrice &&
    Math.round(
      ((product.oldPrice - product.price) /
        product.oldPrice) *
        100
    );

  return (
    <div className="product-card">
      
      {/* Badges */}
      {product.isNew && (
        <span className="badge new">New</span>
      )}

      {product.oldPrice && (
        <span className="badge sale">
          -{discount}%
        </span>
      )}

      {/* Hover Icons */}
      <div className="hover-icons">
        <button
          className="icon-btn"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/product/${product.id}`);
          }}
        >
          <FaEye />
        </button>

        <button
          className="icon-btn"
          onClick={(e) => {
            e.stopPropagation();
            isInWishlist
              ? dispatch(removeFromWishlist(product.id))
              : dispatch(addToWishlist(product));
          }}
        >
          <FaHeart
            className={isInWishlist ? "wishlist-active" : ""}
          />
        </button>
      </div>

      {/* Image */}
      <div
        className="product-image"
        onClick={() =>
          navigate(`/product/${product.id}`)
        }
      >
        <img
          src={product.image}
          alt={product.title}
        />
        <div className="overlay"></div>
      </div>

      <div className="product-content">
        <h6
          className="product-title"
          onClick={() =>
            navigate(`/product/${product.id}`)
          }
        >
          {product.title}
        </h6>

        {/* Rating */}
        <div className="product-rating">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={
                index < product.rating
                  ? "star filled"
                  : "star"
              }
            />
          ))}
        </div>

        {/* Price + Cart */}
        <div className="product-bottom">
          <div className="price-wrapper">
            {product.oldPrice && (
              <span className="old-price">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}

            <span className="product-price">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <button
            className={`cart-btn ${
              clickedId === product.id
                ? "clicked"
                : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addToCart(product));
              setClickedId(product.id);

              setTimeout(() => {
                setClickedId(null);
              }, 300);
            }}
          >
            <FaShoppingCart className="cart-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}