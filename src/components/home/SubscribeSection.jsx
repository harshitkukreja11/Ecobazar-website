import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./subscribeSection.css";

export default function SubscribeSection() {
  return (
    <section className="subscribe-section py-5">
      <div className="container">

        <div className="subscribe-wrapper">

          {/* Left Content */}
          <div className="subscribe-text">
            <h3>Subscribe to our Newsletter</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, laboriosam.
            </p>
          </div>

          {/* Center Input */}
          <div className="subscribe-form">
            <input
              type="email"
              placeholder="Your email address"
            />
            <button>Subscribe</button>
          </div>

          {/* Social Icons */}
          <div className="subscribe-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>

        </div>

      </div>
    </section>
  );
}
