import { Link } from "react-router-dom";
import "./hero.css";

export default function HeroSection() {
  return (
    <section className="hero-section py-4">
      <div className="container">
        <div className="row g-4">

          {/* LEFT BIG IMAGE */}
          <div className="col-lg-8">
            <div className="hero-card large-hero">
              <img
                src="https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2FBannar.png&w=1920&q=75"
                alt="Main Banner"
                className="img-fluid"
              />
              <div className="hero-content text-light">
                <h2 >Fresh & Healthy<br></br> Organic Food</h2>
                <p>Free shipping on all your orders</p>
                <p>
  Sale up to <span className="bg-warning px-2 rounded">30% off</span>
</p>
                <Link to="/shop" className="btn btn-light text-success hero-btn">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE TWO IMAGES */}
          <div className="col-lg-4">
            <div className="row g-4">

              <div className="col-12">
                <div className="hero-card small-hero">
                  <img
                    src="https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2FBG1.png&w=1920&q=75"
                    alt="Side Banner 1"
                    className="img-fluid"
                  />
                  <div className="hero-content small-content">
                    <h5>Summer Sale<br></br>75% OFF</h5>
                    <p>Only Fruit & Vegetable</p>
                    <Link to="/shop" className="btn btn-success btn-sm">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="hero-card small-hero">
                  <img
                    src="https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2FBG.png&w=1920&q=75"
                    alt="Side Banner 2"
                    className="img-fluid"
                  />
                  <div className="hero-content small-content">
                    <p className="text-light">BEST DEAL</p>
                    <h5 className="text-light">Special Products<br></br>Deal of the month</h5>
                    <Link to="/shop" className="btn btn-success btn-sm">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
