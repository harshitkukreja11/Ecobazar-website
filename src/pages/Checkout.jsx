import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { useState } from "react";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 5;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    alert(`Order placed using ${paymentMethod.toUpperCase()} 🎉`);

    dispatch(clearCart());
    navigate("/");
  };

  if (!cartItems.length) {
    return (
      <div className="container py-5 text-center">
        <h4>Your cart is empty 🛒</h4>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row g-5">

        {/* ================= BILLING FORM ================= */}
        <div className="col-md-7">
          <h4 className="mb-4">Billing Details</h4>

          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="col-12">
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* ================= PAYMENT METHOD ================= */}
          <div className="mt-4">
            <h5>Payment Method</h5>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              <label className="form-check-label">
                Cash on Delivery
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              <label className="form-check-label">
                Credit / Debit Card
              </label>
            </div>

            {paymentMethod === "card" && (
              <div className="mt-3 border p-3 rounded">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Expiry Date"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="form-control"
                />
              </div>
            )}

            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              <label className="form-check-label">
                PayPal
              </label>
            </div>
          </div>

        </div>

        {/* ================= ORDER SUMMARY ================= */}
        <div className="col-md-5">
          <div className="card p-4">
            <h5 className="mb-3">Order Summary</h5>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between mb-3"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="60"
                    height="60"
                    className="rounded"
                  />
                  <div>
                    <div>{item.title}</div>
                    <small>
                      Qty: {item.quantity}
                    </small>
                  </div>
                </div>

                <div>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              className="btn btn-success w-100 mt-4"
              onClick={handleOrder}
            >
              Place Order
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
