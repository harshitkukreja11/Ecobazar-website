import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import "./cart.css";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page container py-5">
      <h3 className="mb-4">Shopping Cart</h3>

      {items.length === 0 ? (
        <div className="text-center py-5">
          <h5>Your cart is empty 🛒</h5>
          <Link to="/" className="btn btn-success mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="row">
          {/* LEFT SIDE - CART TABLE */}
          <div className="col-lg-8">
            <div className="cart-table">

              <div className="cart-header d-flex justify-content-between fw-bold border-bottom pb-2 mb-3">
                <div className="w-50">Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
              </div>

              {items.map((item) => (
                <div
                  key={item.id}
                  className="cart-item d-flex justify-content-between align-items-center border-bottom py-3"
                >
                  {/* Product Info */}
                  <div className="cart-product d-flex align-items-center w-50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-image me-3"
                    />
                    <span>{item.title}</span>
                  </div>

                  {/* Price */}
                  <div>${item.price.toFixed(2)}</div>

                  {/* Quantity */}
                  <div className="cart-qty d-flex align-items-center">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>

                    <span className="mx-2">{item.quantity}</span>

                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  {/* Remove */}
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - CART TOTAL */}
          <div className="col-lg-4">
            <div className="cart-summary p-4 shadow-sm">
              <h5>Cart Total</h5>

              <div className="d-flex justify-content-between mt-3">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="btn btn-success w-100 mt-3">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
