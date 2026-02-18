import "./popularCategories.css";

const categories = [
  {
    name: "Fresh Fruit",
    image: "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fproduct-categories%2Ffresh-fruit.png&w=256&q=75",
  },
  {
    name: "Fresh Vegetables",
    image: "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fproduct-categories%2Ffresh-vegetables.png&w=256&q=75",
  },
  {
    name: "Snacks",
    image: "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fproduct-categories%2Fsnacks.png&w=256&q=75",
  },
  {
    name: "Beauty & Health",
    image: "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fproduct-categories%2Fbeauty%26health.png&w=256&q=75",
  },
  {
    name: "Baking Needs",
    image: "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fproduct-categories%2Fbaking-needs.png&w=256&q=75",
  },
  {
    name: "Diabetic Food",
    image: "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fproduct-categories%2Fdiabetic-food.png&w=256&q=75",
  },
  {
    name: "Oil",
    image: "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fproduct-categories%2Foil.png&w=256&q=75",
  },
  {
    name: "Meat & Fish",
    image: "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fproduct-categories%2Fmeat%26fish.png&w=256&q=75",
  },
  {
    name: "Beverages",
    image: "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fproduct-categories%2Fbeverages.png&w=256&q=75",
  },
  {
    name: "Bread & Bakery",
    image: "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fproduct-categories%2Fbread%26bakery.png&w=256&q=75",
  },
  {
    name: "Cooking",
    image: "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fproduct-categories%2Fcooking.png&w=256&q=75",
  },
  {
    name: "Dish Detergents",
    image: "https://ecobazar-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fproduct-categories%2Fdish-detergents.png&w=256&q=75",
  },
];

export default function PopularCategories() {
  return (
    <section className="popular-categories py-5">
      <div className="container">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="section-title">Popular Categories</h3>
          <button className="view-all-btn">View All →</button>
        </div>

        {/* Grid */}
        <div className="row g-4">
          {categories.map((category, index) => (
            <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="category-card text-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="img-fluid category-img"
                />
                <h6 className="category-name">{category.name}</h6>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
