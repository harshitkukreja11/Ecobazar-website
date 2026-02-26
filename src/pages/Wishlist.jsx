import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice";
import "./Wishlist.css";

export default function Wishlist() {
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const dispatch = useDispatch();

  return (
    <div className="container py-5">
      <h3 className="mb-4 fw-bold text-center">My Wishlist</h3>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-5">
          <h5>Your wishlist is empty 💔</h5>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle wishlist-table">
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th className="text-center">Price</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>

            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item.id}>
                  
                  {/* Product */}
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="wishlist-img"
                      />
                      <span className="fw-semibold">
                        {item.title}
                      </span>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="text-center text-success fw-semibold">
                    ${item.price}
                  </td>

           

                  {/* Actions */}
                  <td className="text-end">
                    <button
                      className="btn btn-success btn-sm me-2"
                      disabled={item.stock === 0}
                      onClick={() => dispatch(addToCart(item))}
                    >
                      Add To Cart
                    </button>

                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() =>
                        dispatch(removeFromWishlist(item.id))
                      }
                    >
                      Remove
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}