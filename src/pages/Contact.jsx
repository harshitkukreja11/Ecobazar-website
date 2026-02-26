import { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully ✅");
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container contact-page py-4 py-md-5">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-4 mb-md-5">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted">
          We’d love to hear from you. Send us a message!
        </p>
      </div>

      <div className="row gy-4 gy-md-5">

        {/* ================= CONTACT INFO ================= */}
        <div className="col-12 col-md-4">
          <div className="contact-info">

            <div className="mb-4">
              <h6 className="fw-bold">📍 Address</h6>
              <p className="text-muted small mb-0">
                2715 Ash Dr. San Jose, South Dakota 83475
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold">📞 Phone</h6>
              <p className="text-muted small mb-0">+1 234 567 890</p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold">📧 Email</h6>
              <p className="text-muted small mb-0">
                support@ecobazar.com
              </p>
            </div>

            <div>
              <h6 className="fw-bold">⏰ Opening Hours</h6>
              <p className="text-muted small mb-0">
                Mon - Sat: 9:00 AM - 6:00 PM
              </p>
            </div>

          </div>
        </div>

        {/* ================= CONTACT FORM ================= */}
        <div className="col-12 col-md-8">
          <form onSubmit={handleSubmit} className="row g-3">

            <div className="col-12 col-md-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12 col-md-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-control"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="col-12">
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                className="form-control"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="col-12">
              <button className="btn btn-success w-100 w-md-auto px-4">
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>

      {/* ================= GOOGLE MAP ================= */}
      <div className="mt-4 mt-md-5">
        <div className="ratio ratio-16x9 rounded overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=120%20W%20Sioux%20Ave%2C%20Pierre%2C%20SD%2057501%2C%20United%20States&t=k&z=17&output=embed"
            allowFullScreen
            loading="lazy"
            title="Google Maps"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>

    </div>
  );
}