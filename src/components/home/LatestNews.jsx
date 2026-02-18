import { FaTag, FaUser, FaComments } from "react-icons/fa";
import "./latestNews.css";
import { Link } from "react-router-dom";


const newsData = [
  {
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Flatest-news%2Fnews1.png&w=828&q=75",
    date: "29",
    month: "JAN",
  },
  {
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Flatest-news%2Fnews2.png&w=828&q=75",
    date: "21",
    month: "FEB",
  },
  {
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Flatest-news%2Fnews3.png&w=828&q=75",
    date: "15",
    month: "MAR",
  },
];

export default function LatestNews() {
  return (
    <section className="latest-news py-5">
      <div className="container">

        <div className="section-header">
          <h3>Latest News</h3>
        </div>

        <div className="news-grid">
          {newsData.map((item, index) => (
            <div key={index} className="news-card">

              <div className="news-image">
                <img src={item.image} alt="news" />

                <div className="date-badge">
                  <span className="day">{item.date}</span>
                  <span className="month">{item.month}</span>
                </div>
              </div>

              <div className="news-content">
                <div className="news-meta">
  <span>
    <FaTag className="meta-icon" /> Food
  </span>

  <span>
    <FaUser className="meta-icon" /> By Admin
  </span>

  <span>
    <FaComments className="meta-icon" /> 65 Comments
  </span>
</div>


                <p className="news-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Id, quisquam?
                </p>

                <Link to="/blog-details" className="read-more">
  Read More →
</Link>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
