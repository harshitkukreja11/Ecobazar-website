import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import "./header.css";


export default function Header() {
  const { items } = useSelector((state) => state.cart);

  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const wishlistCount = useSelector(
  (state) => state.wishlist.items.length
);


  return (
    <>
    
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div className="container d-flex justify-content-end">
          <div>
            <Link to="/login" className="text-dark text-decoration-none me-2">
              Sign in
            </Link>
            /
            <Link to="/register" className="text-dark text-decoration-none ms-2">
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <div className="main-header">
        <div className="container d-flex align-items-center justify-content-between">

         {/* Logo */}
<div className="d-flex align-items-center">
  <img
    src="https://ecobazar-ecommerce.vercel.app/images/logo.png"
    alt="Ecobazar Logo"
    className="eco-logo"
  />
  <h1 className="mb-0">Ecobazar</h1>
</div>



          {/* Search */}
          <div className="search-box">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <button className="btn btn-success">
                <FaSearch />
              </button>
            </div>
          </div>
          {/*Wishlist*/}
 <Link to="/wishlist" className="position-relative">
  ❤️
  {wishlistCount > 0 && (
    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
      {wishlistCount}
    </span>
  )}
</Link>
          {/* Cart */}
          <Link to="/cart" className="cart-section text-decoration-none">
            <FaShoppingCart size={22} />
            <div className="ms-2">
              <small>Shopping cart:</small>
              <div className="fw-bold">
                ${totalAmount.toFixed(2)}
              </div>
            </div>

            {totalItems > 0 && (
              <span className="cart-badge">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
      


      {/* ================= NAVBAR ================= */}
      <nav className="eco-navbar navbar navbar-expand-lg">
        <div className="container">

          
<div className="eco-nav-wrapper">

<ul className="navbar-nav eco-nav-links">

              <li className="nav-item">
                <NavLink to="/" className="nav-link eco-link">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/shop" className="nav-link eco-link">
                  Shop
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/pages" className="nav-link eco-link">
                  Pages
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/blog" className="nav-link eco-link">
                  Blog
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className="nav-link eco-link">
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className="nav-link eco-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="eco-phone">
              +6396-1336-3109
            </div>
           
          </div>
        </div>
      </nav>
    </>
  );
}
