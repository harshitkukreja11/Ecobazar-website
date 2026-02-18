import { FaStar, FaShoppingBag } from "react-icons/fa";
import "./featuredProducts.css";

const featuredProducts = [
  {
    name: "Fresh Red Apple",
    price: 12,
    oldPrice: 24,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Fapple.png&w=640&q=75",
  },
  {
    name: "Fresh Orange",
    price: 15,
    oldPrice: 20,
    rating: 5,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Forange.png&w=640&q=75",
  },
  {
    name: "Green Cabbage",
    price: 8,
    oldPrice: 12,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Fcabbage.png&w=640&q=75",
  },
  {
    name: "Green Lettuce",
    price: 6,
    oldPrice: 10,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Flettuce.png&w=640&q=75",
  },
  {
    name: "Eggplant",
    price: 10,
    oldPrice: 18,
    rating: 3,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Feggplant.png&w=640&q=75",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="featured-products py-5">
      <div className="container">

        <div className="featured-header">
          <h3>Featured Products</h3>
          <span className="view-all">View All →</span>
        </div>

        <div className="featured-grid">
          {featuredProducts.map((item, index) => (
            <div key={index} className="product-card">

              <div className="product-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="product-info">
                <p className="product-name">{item.name}</p>

                <div className="price-row">
                  <span className="price">${item.price.toFixed(2)}</span>
                  <span className="old-price">${item.oldPrice.toFixed(2)}</span>
                </div>

                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < item.rating ? "star active" : "star"}
                    />
                  ))}
                </div>
              </div>

              <button className="cart-btn">
                <FaShoppingBag />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
