import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(id));
  const [activeTab, setActiveTab] = useState("description");


  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h3>Product Not Found</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">

      {/* 🔹 Breadcrumb */}
      <nav className="mb-4">
        <small>
          <Link to="/" className="text-decoration-none">
            Home
          </Link>{" "}
          / Shop /{" "}
          <span className="text-dark fw-semibold">
            {product.title}
          </span>
        </small>
      </nav>

      <div className="row g-5 align-items-start">

        {/* 🔹 Product Image */}
        <div className="col-md-6">
          <div className="border rounded p-4 text-center">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>
        </div>

        {/* 🔹 Product Info */}
        <div className="col-md-6">

          <h2 className="fw-bold">{product.title}</h2>

          {/* Rating */}
          <div className="mb-2">
            <span className="text-warning fs-5">
              {"⭐".repeat(product.rating)}
            </span>
            <small className="text-muted ms-2">
              ({product.rating} Reviews)
            </small>
          </div>

          <h3 className="text-success fw-bold mb-3">
            ${product.price}
          </h3>

          <p>
            Fresh organic product directly from farm.
            100% natural and healthy for your family.
          </p>

          {/* Stock */}
          <p>
            Status:{" "}
            <span className="text-success fw-semibold">
              In Stock
            </span>
          </p>

          <hr />

          {/* 🔹 Quantity + Add To Cart */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <button
              className="btn btn-outline-secondary"
              onClick={() =>
                setQuantity(quantity > 1 ? quantity - 1 : 1)
              }
            >
              -
            </button>

            <span className="fw-bold">{quantity}</span>

            <button
              className="btn btn-outline-secondary"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>

            <button
              className="btn btn-success px-4"
              onClick={() =>
                dispatch(addToCart({ ...product, quantity }))
              }
            >
              Add To Cart
            </button>
          </div>

          <hr />

          {/* SKU & Category */}
          <p className="text-muted mb-1">
            SKU: {product.sku || "N/A"}
          </p>
          <p className="text-muted">
            Category: {product.category || "Organic"}
          </p>

        </div>
      </div>
      {/* ================= TABS SECTION ================= */}
<div className="mt-5">

  {/* Tab Buttons */}
  <div className="d-flex gap-4 border-bottom pb-2">
    <button
      className={`btn btn-link ${activeTab === "description" ? "fw-bold text-success" : ""}`}
      onClick={() => setActiveTab("description")}
    >
      Description
    </button>

    <button
      className={`btn btn-link ${activeTab === "info" ? "fw-bold text-success" : ""}`}
      onClick={() => setActiveTab("info")}
    >
      Additional Information
    </button>

    <button
      className={`btn btn-link ${activeTab === "feedback" ? "fw-bold text-success" : ""}`}
      onClick={() => setActiveTab("feedback")}
    >
      Customer Feedback
    </button>
  </div>

  <div className="pt-4">

    {/* 🔹 DESCRIPTION TAB */}
    {activeTab === "description" && (
      <div>
        <p>
          Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac,
          viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra.
          Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel.
        </p>

        <p>
          Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui.
          Sed iaculis, metus faucibus elementum tincidunt.
        </p>

        <ul className="list-unstyled mt-3">
          <li>✔ 100 g of fresh leaves provides.</li>
          <li>✔ Aliquam ac est at augue volutpat elementum.</li>
          <li>✔ Quisque nec enim eget sapien molestie.</li>
          <li>✔ Proin convallis odio volutpat finibus posuere.</li>
        </ul>

        <p className="mt-3">
          Cras et diam maximus, accumsan sapien et, sollicitudin velit.
          Nulla blandit eros non turpis lobortis iaculis at ut massa.
        </p>

        {/* 🔥 Embedded Video */}
        <div className="mt-4">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/a_0AgvcCQ20"
              title="Product Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    )}

    {/* 🔹 ADDITIONAL INFORMATION TAB */}
    {activeTab === "info" && (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Weight</th>
              <td>03 kg</td>
            </tr>
            <tr>
              <th>Dimensions</th>
              <td>15 × 10 × 5 cm</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>Green</td>
            </tr>
            <tr>
              <th>Stock</th>
              <td>Available</td>
            </tr>
          </tbody>
        </table>
      </div>
    )}

    {/* 🔹 CUSTOMER FEEDBACK TAB */}
    {activeTab === "feedback" && (
      <div>
        <div className="border p-3 rounded mb-3">
          <h6>John Doe ⭐⭐⭐⭐</h6>
          <p className="mb-0">
            Very fresh and high quality product. Will buy again!
          </p>
        </div>

        <div className="border p-3 rounded">
          <h6>Sarah Smith ⭐⭐⭐⭐⭐</h6>
          <p className="mb-0">
            Excellent packaging and fast delivery. Highly recommended.
          </p>
        </div>
      </div>
    )}

  </div>
</div>


      {/* 🔹 Related Products */}
      <div className="mt-5">
        <h4 className="mb-4">Related Products</h4>

        <div className="row g-4">
          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                <ProductCard product={item} />
              </div>
              
            ))}
        </div>
      </div>

    </div>
  );
}
