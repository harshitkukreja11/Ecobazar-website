import "./summerBanner.css";

export default function SummerBanner() {
  return (
    <section
      className="summer-banner"
      style={{
        backgroundImage:
          "url(https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fvegetables.png&w=1920&q=75)",
      }}
    >
      <div className="summer-overlay">
        <div className="container text-center text-white">

          <span className="summer-small">SUMMER SALE</span>

          <h2 className="summer-off text-warning">37% OFF</h2>

          <p className="summer-desc">
            Free on all your order, Free Shipping and 30 days <br></br>money-back guarantee
          </p>

          <button className="summer-btn">
            Shop Now →
          </button>

        </div>
      </div>
    </section>
  );
}
