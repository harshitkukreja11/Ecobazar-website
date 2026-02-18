import "./advertisements.css";

export default function Advertisements() {
  return (
    <section className="advertisements py-5">
      <div className="container">
        <div className="row g-4">

          {/* Banner 1 */}
          <div className="col-lg-4">
            <div
              className="ad-card"
              style={{
                backgroundImage:
                  "url(https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fadvertisment%2F1.png&w=1080&q=75)",
              }}
            >
              <div className="ad-content text-white">
                <span className="ad-small">BEST DEALS</span>
                <h4>Sale of the Month</h4>

                <div className="countdown">
                  <div><strong>00</strong><span>DAYS</span></div>
                  <div><strong>23</strong><span>HOURS</span></div>
                  <div><strong>56</strong><span>MINS</span></div>
                  <div><strong>05</strong><span>SECS</span></div>
                </div>

                <button className="shop-btn">Shop Now →</button>
              </div>
            </div>
          </div>

          {/* Banner 2 */}
          <div className="col-lg-4">
            <div
              className="ad-card"
              style={{
                backgroundImage:
                  "url(https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fadvertisment%2F2.png&w=1080&q=75)",
              }}
            >
              <div className="ad-content text-light">
                <span className="ad-small">85% FAT FREE</span>
                <h4>Low-Fat Meat</h4>
                <p className="ad-price">Started at $79.99</p>
                <button className="shop-btn green">Shop Now →</button>
              </div>
            </div>
          </div>

          {/* Banner 3 */}
          <div className="col-lg-4">
            <div
              className="ad-card"
              style={{
                backgroundImage:
                  "url(https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fadvertisment%2F3.png&w=1080&q=75)",
              }}
            >
              <div className="ad-content">
                <span className="ad-small">SUMMER SALE</span>
                <h4>100% Fresh Fruit</h4>
                <p className="ad-price">Up to 64% OFF</p>
                <button className="shop-btn green">Shop Now →</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
