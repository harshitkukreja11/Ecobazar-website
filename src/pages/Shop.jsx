import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { products } from "../data/products";
import "./shop.css";


export default function Shop() {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100);
  const [selectedRating, setSelectedRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  /* FILTERING */
  const filtered = products
    .filter((p) =>
      selectedCategory === "All" ? true : p.category === selectedCategory
    )
    .filter((p) => p.price <= maxPrice)
    .filter((p) => (selectedRating ? p.rating >= selectedRating : true));

  /* PAGINATION */
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / productsPerPage);

  return (
    <div className="container py-5">
      <div className="row">

        <div className="col-lg-3 mb-4">
  <div className="shop-sidebar">

    {/* Categories */}
    <h5>Categories</h5>
    {["All", "Fruits", "Vegetables"].map((cat) => (
      <div
        key={cat}
        className={`filter-item ${selectedCategory === cat ? "active" : ""}`}
        onClick={() => setSelectedCategory(cat)}
      >
        {cat}
      </div>
    ))}

    <hr />

    {/* Price Filter */}
    <h5>Price</h5>
    <input
      type="range"
      min="0"
      max="20"
      value={maxPrice}
      onChange={(e) => setMaxPrice(e.target.value)}
      className="form-range"
    />
    <p>Up to ${maxPrice}</p>

    <hr />

    {/* Rating */}
    <h5>Rating</h5>
    {[5, 4, 3].map((r) => (
      <div
        key={r}
        className="filter-item"
        onClick={() => setSelectedRating(r)}
      >
        {"⭐".repeat(r)}
      </div>
    ))}

    <hr />

    {/* TAG SECTION */}
    <h5>Tags</h5>
    <div className="tag-list">
      {[
        "Healthy",
        "Low fat",
        "Vegetarian",
        "Kid foods",
        "Vitamins",
        "Bread",
        "Meat",
        "Snacks",
        "Tiffin",
        "Lunch",
        "Dinner",
        "Breakfast",
        "Fruit",
      ].map((tag) => (
        <span key={tag} className="tag-item">
          {tag}
        </span>
      ))}
    </div>

    <button
      className="clear-btn mt-3"
      onClick={() => {
        setSelectedCategory("All");
        setMaxPrice(100);
        setSelectedRating(0);
      }}
    >
      Clear All Filters
    </button>

    <hr />

    {/* DISCOUNT BANNER */}
    <div className="discount-box">
      <h4 className="text-warning">79%</h4>
      <p className="text-dark">Discount on your first order</p>
    </div>

    <hr />

    {/* SALE PRODUCTS */}
    <h5>Sale Products</h5>

    {products
      .filter((p) => p.isSale)
      .slice(0, 3)
      .map((product) => (
        <div key={product.id} className="sale-product">
          <img src={product.image} alt={product.title} />
          <div>
            <p className="sale-title">{product.title}</p>
            <div className="sale-price">
              <span className="new-price">${product.price}</span>
              <span className="old-price">
                ${(product.price + 5).toFixed(2)}
              </span>
            </div>
            <div className="rating">
              {"⭐".repeat(product.rating)}
            </div>
          </div>
        </div>
      ))}

  </div>
</div>
        {/* PRODUCTS */}
        <div className="col-lg-9">

          <div className="row g-4">
            {currentProducts.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6">

                <div className="product-card">

                  {/* BADGES */}
                  {product.isSale && <span className="badge-sale">Sale</span>}
                  {product.isNew && <span className="badge-new">New</span>}

                  {/* WISHLIST */}
                  <div
                    className="wishlist-btn"
                    onClick={() => dispatch(addToWishlist(product))}
                  >
                    ❤️
                  </div>

                  <img src={product.image} alt={product.title} />

                  <h6>{product.title}</h6>
                  <p className="price">${product.price}</p>

                  <div className="rating">
                    {"⭐".repeat(product.rating)}
                  </div>

                  <button
                    className="btn-add"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </button>

                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="pagination mt-4">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}