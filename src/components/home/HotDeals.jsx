import ProductCard from "../product/ProductCard";
import { FaStar } from "react-icons/fa";
import "./hotDeals.css";

const products = [
  {
    name: "Green Apples",
    newPrice: 12.0,
    oldPrice: 24.0,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Fapple.png&w=640&q=75",
  },
  {
    name: "Fresh Orange",
    price: 12.99,
    rating: 5,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Forange.png&w=640&q=75",
  },
  {
    name: "Green Cabbage",
    price: 8.99,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Fcabbage.png&w=640&q=75",
  },
  {
    name: "Green Lettuce",
    price: 6.99,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Flettuce.png&w=640&q=75",
  },
  {
    name: "Eggplant",
    price: 10.99,
    rating: 3,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Feggplant.png&w=640&q=75",
  },
  
];

export default function HotDeals() {
  return (
    <section className="hot-deals py-5">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Hot Deals</h3>
          <button className="view-all-btn">View All →</button>
        </div>

        <div className="row g-0">

          {/* BIG LEFT PRODUCT */}
          <div className="col-lg-6">
            <div className="hot-big-card">

              <div className="discount-badge">50% OFF</div>

              <img
                src={products[0].image}
                alt={products[0].name}
                className="hot-img"
              />

              <div className="hot-content">
                <h4>{products[0].name}</h4>

                <div className="price">
                  <span className="new-price">
                    ${products[0].newPrice.toFixed(2)}
                  </span>
                  <span className="old-price">
                    ${products[0].oldPrice.toFixed(2)}
                  </span>
                </div>

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < products[0].rating ? "filled" : ""}
                    />
                  ))}
                </div>

                <p className="countdown-title">
                  Hurry up! Offer ends in:
                </p>

                <div className="countdown">
                  <div><strong>00</strong><span>DAYS</span></div>
                  <div><strong>23</strong><span>HOURS</span></div>
                  <div><strong>41</strong><span>MINS</span></div>
                  <div><strong>31</strong><span>SECS</span></div>
                </div>

                <button className="cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* RIGHT 4 PRODUCTS */}
          <div className="col-lg-6">
            <div className="row g-0">
              {products.slice(1).map((product, index) => (
                <div key={index} className="col-md-6">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
