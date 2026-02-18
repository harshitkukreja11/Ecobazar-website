import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./testimonials.css";

const testimonials = [
  {
    name: "Jenny Wilson",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae delectus voluptate.",
  },
  {
    name: "Robert Fox",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, suscipit!",
  },
  {
    name: "Kristin Watson",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum maiores.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials py-5">
      <div className="container">

        {/* Header */}
        <div className="testimonials-header">
          <h3>Client Testimonials</h3>

          <div className="testimonial-arrows">
            <button className="arrow-btn">
              <FaArrowLeft />
            </button>
            <button className="arrow-btn">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">

              <p className="testimonial-text">“{item.review}”</p>

              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < item.rating ? "star active" : "star"}
                  />
                ))}
              </div>

              <div className="testimonial-user">
                <img src={item.image} alt={item.name} />
                <div>
                  <h6>{item.name}</h6>
                  <span>{item.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
