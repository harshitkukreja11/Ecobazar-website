import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaSearch, FaMapMarkerAlt, FaChevronDown, FaBars, FaTimes, FaHeart } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";
import "./header.css";

export default function Header() {
  const { items } = useSelector((state) => state.cart);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  const totalAmount = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items]
  );

  const totalItems = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items]
  );

  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

const closeMenu = () => {
  setMobileMenu(false);
};

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-left">
            <FaMapMarkerAlt className="location-icon" />
            <span>Store Location: Lincoln - 344, Illinois, Chicago, USA</span>
          </div>

          <div className="top-right">
            <div className="top-dropdown">
              Eng <FaChevronDown size={10} />
            </div>
            <div className="top-dropdown">
              USD <FaChevronDown size={10} />
            </div>

            <div className="auth-links">
              <Link to="/login" className="top-link">Sign in</Link>
              <span className="divider">/</span>
              <Link to="/register" className="top-link">Sign up</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <div className="main-header">
        <div className="container d-flex align-items-center justify-content-between">

          <div className="d-flex align-items-center gap-2">
            <img
              src="https://ecobazar-ecommerce.vercel.app/images/logo.png"
              alt="Ecobazar Logo"
              className="eco-logo"
            />
            <h1 className="mb-0 fs-4 fw-bold">Ecobazar</h1>
          </div>

          <div className="search-box">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" />
              <button className="btn btn-success">
                <FaSearch />
              </button>
            </div>
          </div>

          <div className="d-flex align-items-center gap-4">

            {/* Wishlist */}
            <Link to="/wishlist" className="position-relative text-dark">
              <FaHeart size={20} />
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
                <div className="fw-bold">${totalAmount.toFixed(2)}</div>
              </div>

              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>

          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="eco-navbar">
        <div className="container eco-nav-wrapper">

          <button
            className="mobile-menu-icon d-lg-none"
            onClick={() => setMobileMenu(true)}
            aria-label="Open menu"
          >
            <FaBars size={22} />
          </button>

          <ul className={`eco-nav-links ${mobileMenu ? "active" : ""}`}>

            <li className="mobile-close d-lg-none">
              <button onClick={closeMenu} aria-label="Close menu">
                <FaTimes size={22} />
              </button>
            </li>

            <li><NavLink to="/" className="eco-link">Home</NavLink></li>
            <li><NavLink to="/shop" className="eco-link">Shop</NavLink></li>
            <li><NavLink to="/pages" className="eco-link">Pages</NavLink></li>
            <li><NavLink to="/blog" className="eco-link">Blog</NavLink></li>
            <li><NavLink to="/about" className="eco-link">About Us</NavLink></li>
            <li><NavLink to="/contact" className="eco-link">Contact Us</NavLink></li>
          </ul>

          <div className="eco-phone d-none d-lg-block">
            +6396-1336-3109
          </div>

        </div>

        {mobileMenu && (
          <div className="menu-overlay" onClick={closeMenu}></div>
        )}
      </nav>
    </>
  );
}