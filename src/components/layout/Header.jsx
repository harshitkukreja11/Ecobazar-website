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
<Link to="/" className="logo-wrapper">
  <img
    src="https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=96&q=75"
    alt="Ecobazar Logo"
    className="eco-logo"
  />
</Link>
<h1>Ecobazar</h1>


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

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#ecoNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="ecoNav">
            <ul className="navbar-nav me-auto">

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
