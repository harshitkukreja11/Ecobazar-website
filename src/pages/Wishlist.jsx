import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice";

export default function Wishlist() {
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const dispatch = useDispatch();

  return (
    <div className="container py-5">
      <h3 className="mb-4">My Wishlist</h3>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-5">
          <h5>Your wishlist is empty 💔</h5>
        </div>
      ) : (
        <div className="row g-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="card p-3 text-center">

                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid mb-3"
                />

                <h6>{item.title}</h6>
                <p className="text-success">${item.price}</p>

                <div className="d-flex justify-content-center gap-2">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() =>
                      dispatch(addToCart(item))
                    }
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
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
