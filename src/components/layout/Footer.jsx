import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          {/* Column 1 */}
          <div className="footer-col">
            {/* Logo */}
<Link to="/" className="logo-wrapper">
  <img
    src="https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=96&q=75"
    alt="Ecobazar Logo"
    className="eco-logo"
  />
</Link>
            <h2 className="footer-logo">Ecobazar</h2>

            <p className="footer-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, repellat obcaecati quo quasi aperiam dolore tempore
              ratione nihil hic laudantium?
            </p>

            <p className="footer-contact">
              +639613363109 <br />
              or <br />
              ecobazar@gmail.com
            </p>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h5>My Account</h5>
            <ul>
              <li>My Account</li>
              <li>Order History</li>
              <li>Shopping Cart</li>
              <li>Wishlist</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h5>Helps</h5>
            <ul>
              <li>Contact</li>
              <li>Faqs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Proxy</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h5>About</h5>
            <ul>
              <li>Shop</li>
              <li>Product</li>
              <li>Track Order</li>
              <li>Categories</li>
              <li>Fruits & Vegetables</li>
              <li>Meats & Fish</li>
              <li>Bread & Bakery</li>
              <li>Beauty & Health</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
  <div className="footer-bottom-content">
    <p>Ecobazar eCommerce © 2026. All Rights Reserved</p>

    <div className="payment-logos">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N6rMgjRXFeA6S4_j1JdeHV90qmg8Q7d5uA&s"
        alt="Visa"
      />
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgSEhUPBxIVFhESFxIXGBUSGRsYFRYYFRoZFhoeFhkaJSgsGBonGxYVITIiJSkrLi4uGCIzOD8sNygtMCsBCgoKDg0OGxAQGzAiICUyLS8tNys3LjcyNzI1LTc1KzUuMy0tLTItNy0rLTUtLi0vLS0tKzUyLTctLS0tLS01Lf/AABEIAOkA2AMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcFCAIDBAH/xAA/EAABAwIDBAcGBQIEBwAAAAABAAIDBBEFEiEGEzFSFCJBUWFxkQcjMlOBkhUzQnKhYrEWJENkRFSCorLC0f/EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EACsRAQACAQMDAQcFAQAAAAAAAAABAhEDITEEEkGxIjJRYXGh8BRCkcHRE//aAAwDAQACEQMRAD8AqRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERLj1/nyQEUpwTYHHqhu9kYIIeJlqTkAHflOvrZZD/AAXs7+X+N0+94WydW/nmVc6tId7ZQZFKcb2Bx6nbvY2CeHiJaY5wR35Rr6XUWB/j+PNSraLcOTGBERSBERAREQEREBERAREQEREBERAREQEREBe3CsIxGpdkwqF8pvbqDQebuA9VLNksAwmOl/FNpGOla9+6p6Zt7zScBcD4tQbDhYXN9FY1Hgm0M7A2ulZQ09h/lqBoDwOV8xHH9oCzanURVOKZV1DsFS09nbY1kcN+FPB72d3hYD+wPmFMMBwudtjsjhrKcf8AN4jrKR3sjF3fyFKaPBdncPaZg2OPmnndeR37pJCSfIeijWPe1rCIrtwhjqh/N8EX3HUjyCyTq31Z9mM+iztivLNR7FQSkSbTTS1jxrllOWBv7YW6D63KynRdnvyN3SW4bvLF/wCNlRWO7ebR1d2zzGOM6bqAZG+RPxOPmV2/4Arfh39P03LvOi5vf2tm++2tuKn+nt++2Po53x4hbkuxUETjJszPLRvOuWI5oHfuhdpbysVgcewud1ztdhrKgD/i8O0l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"
        alt="Secure Payment"
      />
      <img
        src="data:image/png;base64,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"
        alt="Apple Pay"
      />
      <img
      src="data:image/png;base64,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"
      alt="Mastercard"
      />
      </div>
  </div>
</div>

      </div>
    </footer>
  );
}
