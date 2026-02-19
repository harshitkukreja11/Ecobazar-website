import { useState } from "react";

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
    <div className="container py-5">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted">
          We’d love to hear from you. Send us a message!
        </p>
      </div>

      <div className="row g-5">

        {/* ================= CONTACT INFO ================= */}
        <div className="col-md-4">
          <div className="mb-4">
            <h5>📍 Address</h5>
            <p className="text-muted">
              2715 Ash Dr. San Jose, South Dakota 83475

            </p>
          </div>

          <div className="mb-4">
            <h5>📞 Phone</h5>
            <p className="text-muted">+1 234 567 890</p>
          </div>

          <div className="mb-4">
            <h5>📧 Email</h5>
            <p className="text-muted">support@ecobazar.com</p>
          </div>

          <div>
            <h5>⏰ Opening Hours</h5>
            <p className="text-muted">
              Mon - Sat: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* ================= CONTACT FORM ================= */}
        <div className="col-md-8">
          <form onSubmit={handleSubmit} className="row g-3">

            <div className="col-md-6">
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

            <div className="col-md-6">
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
              <button className="btn btn-success px-4">
                Send Message
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* ================= GOOGLE MAP ================= */}
      <div className="mt-5">
  <div className="ratio ratio-16x9">
    <iframe
      src="https://maps.google.com/maps?q=120%20W%20Sioux%20Ave%2C%20Pierre%2C%20SD%2057501%2C%20United%20States&t=k&z=17&output=embed"
      width="100%"
      height="400"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
      style={{ border: 0 }}
    ></iframe>
  </div>
</div>


    </div>
  );
}
