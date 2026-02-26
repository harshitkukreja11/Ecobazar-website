import ProductCard from "../product/ProductCard";
import "./hotDeals.css";

const products = [
  {
    title: "Green Apples",
    newPrice: 12.0,
    oldPrice: 24.0,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Fapple.png&w=640&q=75",
  },
  {
    title: "Fresh Orange",
    price: 12.99,
    rating: 5,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Forange.png&w=640&q=75",
  },
  {
    title: "Green Cabbage",
    price: 8.99,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Fcabbage.png&w=640&q=75",
  },
  {
    title: "Green Lettuce",
    price: 6.99,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Flettuce.png&w=640&q=75",
  },
  {
    title: "Eggplant",
    price: 10.99,
    rating: 3,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Feggplant.png&w=640&q=75",
  },
  {
    title: "Fresh Potatoes",
    price: 9.99,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/images/popular-products/potatoes.png",
  },
  {
    title: "Sweet Corn",
    price: 7.99,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/images/popular-products/corn.png",
  },
  {
    title: "Cauliflower",
    price: 11.99,
    oldPrice: 15.99,
    rating: 5,
    image:
      "https://ecobazar-ecommerce.vercel.app/images/popular-products/cauliflower.png",
  },
];

export default function HotDeals() {
  const bigProduct = products[0];
  const rightProducts = products.slice(1, 5);   // 4 on right
  const bottomProducts = products.slice(5, 8);  // 3 below big

  return (
    <section className="hot-deals py-5">
      <div className="container">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Hot Deals</h3>
          <button className="view-all-btn">View All →</button>
        </div>

        {/* Custom Layout */}
<div className="hot-grid">

  {/* BIG CARD */}
  <div className="big-card">
    <div className="hot-big-card">
      <div className="discount-badge">50% OFF</div>

      <img
        src={bigProduct.image}
        alt={bigProduct.title}
        className="hot-img"
      />

      <div className="hot-content">
        <h4>{bigProduct.title}</h4>

        <div className="price">
          <span className="new-price">
            ${bigProduct.newPrice.toFixed(2)}
          </span>
          <span className="old-price">
            ${bigProduct.oldPrice.toFixed(2)}
          </span>
        </div>
      </div>
      <p className="countdown-title"> Hurry up! Offer ends in: </p> <div className="countdown"> <div><strong>00</strong><span>DAYS</span></div> <div><strong>23</strong><span>HOURS</span></div> <div><strong>41</strong><span>MINS</span></div> <div><strong>31</strong><span>SECS</span></div> </div>
    </div>
  </div>
  

  {/* 4 RIGHT PRODUCTS */}
  {rightProducts.map((product, index) => (
    <div key={index} className="grid-item">
      <ProductCard product={product} />
    </div>
  ))}

  {/* 3 BOTTOM PRODUCTS */}
  {bottomProducts.map((product, index) => (
    <div key={index + 10} className="grid-item">
      <ProductCard product={product} />
    </div>
  ))}

</div>
      </div>
    </section>
  );
}