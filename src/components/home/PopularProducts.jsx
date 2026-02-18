import ProductCard from "../product/ProductCard";
import "./popularProducts.css";

const products = [
  {
    name: "Fresh Red Apple",
    price: 14.99,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Fapple.png&w=640&q=75",
  },
  {
    name: "Fresh Orange",
    price: 12.99,
    rating: 5,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Forange.png&w=640&q=75",
  },
  {
    name: "Green Cabbage",
    price: 8.99,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Fcabbage.png&w=640&q=75",
  },
  {
    name: "Green Lettuce",
    price: 6.99,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Flettuce.png&w=640&q=75",
  },
  {
    name: "Eggplant",
    price: 10.99,
    rating: 3,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Feggplant.png&w=640&q=75",
  },
  {
    name: "Fresh Potatoes",
    price: 9.99,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Fpotatoes.png&w=640&q=75",
  },
  {
    name: "Sweet Corn",
    price: 7.99,
    rating: 4,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Fcorn.png&w=640&q=75",
  },
  {
    name: "Cauliflower",
    price: 11.99,
    rating: 5,
    image:
      "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fpopular-products%2Fcauliflower.png&w=640&q=75",
  },
  
];

export default function PopularProducts() {
  return (
    <section className="popular-products py-5">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Popular Products</h3>
          <button className="view-all-btn">View All →</button>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
