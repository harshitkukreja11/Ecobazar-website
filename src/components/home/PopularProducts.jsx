import ProductCard from "../product/ProductCard";
import "./popularProducts.css";

const products = [
  {
    id: 1,
    title: "Fresh Red Apple",
    price: 14.99,
    oldPrice: 19.99,
    rating: 4,
    image: "https://ecobazar-ecommerce.vercel.app/images/popular-products/apple.png",
  },
  {
    id: 2,
    title: "Fresh Orange",
    price: 12.99,
    rating: 5,
    image: "https://ecobazar-ecommerce.vercel.app/images/popular-products/orange.png",
  },
  {
    id: 3,
    title: "Green Cabbage",
    price: 8.99,
    oldPrice: 11.99,
    rating: 4,
    image: "https://ecobazar-ecommerce.vercel.app/images/popular-products/cabbage.png",
  },
  {
    id: 4,
    title: "Green Lettuce",
    price: 6.99,
    rating: 4,
    image: "https://ecobazar-ecommerce.vercel.app/images/popular-products/lettuce.png",
  },
  {
    id: 5,
    title: "Eggplant",
    price: 10.99,
    oldPrice: 14.99,
    rating: 3,
    image: "https://ecobazar-ecommerce.vercel.app/images/popular-products/eggplant.png",
  },
  {
    id: 6,
    title: "Fresh Potatoes",
    price: 9.99,
    rating: 4,
    image: "https://ecobazar-ecommerce.vercel.app/images/popular-products/potatoes.png",
  },
  {
    id: 7,
    title: "Sweet Corn",
    price: 7.99,
    rating: 4,
    image: "https://ecobazar-ecommerce.vercel.app/images/popular-products/corn.png",
  },
  {
    id: 8,
    title: "Cauliflower",
    price: 11.99,
    oldPrice: 15.99,
    rating: 5,
    image: "https://ecobazar-ecommerce.vercel.app/images/popular-products/cauliflower.png",
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
          {products.map((product) => (
  <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">

              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}