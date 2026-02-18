import { FaShippingFast, FaHeadset, FaLock, FaUndo } from "react-icons/fa";
import "./features.css";

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="row g-4">

          <div className="col-md-3 col-sm-6">
            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <FaShippingFast />
              </div>
              <div className="feature-content">
                <h6>Free Shipping on all your order</h6>
                <p>Free Shipping on all your order</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <FaHeadset />
              </div>
              <div className="feature-content">
                <h6>Customer Support 24/7</h6>
                <p>Instant access to Support</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <FaLock />
              </div>
              <div className="feature-content">
                <h6>100% Secure Payment</h6>
                <p>We ensure your money is safe</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <FaUndo />
              </div>
              <div className="feature-content">
                <h6>Money-Back Guarantee</h6>
                <p>30 Days Money-Back Guarantee</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
