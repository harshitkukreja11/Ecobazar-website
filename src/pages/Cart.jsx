import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">
      <h3>Your Cart</h3>

      {items.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2"
        >
          <div>{item.title}</div>
          <div>
            <button
              className="btn btn-sm btn-secondary me-2"
              onClick={() => dispatch(decreaseQty(item.id))}
            >
              -
            </button>
            {item.quantity}
            <button
              className="btn btn-sm btn-secondary ms-2"
              onClick={() => dispatch(increaseQty(item.id))}
            >
              +
            </button>
          </div>
          <div>${(item.price * item.quantity).toFixed(2)}</div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      <h5 className="mt-4">Total: ${total.toFixed(2)}</h5>
    </div>
  );
}
