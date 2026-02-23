import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Honey Glazed Salmon",
    date: "03",
    month: "MAY",
    category: "Meat & Fish",
    comments: 64,
    image: "https://res.cloudinary.com/dof771xd5/image/upload/v1724671074/jzen6fdomab2hqlbzpzj.webp"
  },
  {
    id: 2,
    title: "Banana Bread French Toast",
    date: "02",
    month: "MAY",
    category: "Bread & Bakery",
    comments: 53,
    image: "https://res.cloudinary.com/dof771xd5/image/upload/v1724671314/xunz79q0lla7rzqb1v8v.webp"
  },
  {
    id: 3,
    title: "Easy Yogurt Bark: The Perfect Frozen Snack",
    date: "01",
    month: "MAY",
    category: "Snacks",
    comments: 61,
    image: "https://res.cloudinary.com/dof771xd5/image/upload/v1724671219/yerje1nbpmjszw0kqmxt.webp"
  },
  {
    id: 4,
    title: "Eggplant Lasagna: A Hearty Delight",
    date: "15",
    month: "APR",
    category: "Diabetic",
    comments: 64,
    image: "https://res.cloudinary.com/dof771xd5/image/upload/v1724671017/xadpoxcl55lizcn2eyho.webp"
  },
  {
    id: 5,
    title: "Basil Oil",
    date: "08",
    month: "APR",
    category: "Oil",
    comments: 1,
    image: "https://res.cloudinary.com/dof771xd5/image/upload/v1724671378/x7wxwk02xjt4iyaxing2.webp"
  },
  {
    id: 6,
    title: "Easy Fruit Dip: The Perfect Healthy Snack",
    date: "06",
    month: "APR",
    category: "Fruit",
    comments: 64,
    image: "https://res.cloudinary.com/dof771xd5/image/upload/v1724671265/n1wbkpof4rfntbcl7ucx.webp"
  }
];

const Blog = () => {
  return (
    <div className="container blog-page">
      <div className="row">
        
        {/* LEFT SIDEBAR */}
        <div className="col-lg-3">
          <div className="blog-sidebar">
            <h5>All Categories</h5>

            <div className="category-item">Fresh Fruit <span>(1)</span></div>
            <div className="category-item">Fresh Vegetables <span>(1)</span></div>
            <div className="category-item">Meat & Fish <span>(1)</span></div>
            <div className="category-item">Snacks <span>(1)</span></div>
            <div className="category-item">Beverages <span>(1)</span></div>
            <div className="category-item">Bread & Bakery <span>(1)</span></div>
            <div className="category-item">Diabetic Food <span>(1)</span></div>
            <div className="category-item">Oil <span>(1)</span></div>

            <h5 className="mt-4">Tag</h5>
            <div className="tag-list">
              {["Healthy","Low fat","Vegetarian","Kid foods","Vitamins","Bread","Meat","Snacks","Tiffin","Lunch","Dinner","Breakfast","Fruit"]
                .map(tag => (
                <span key={tag} className="tag-item">{tag}</span>
              ))}
            </div>
          </div>
          <h5 className="mt-4">Recently Added</h5>

<div className="recent-post">
  <img src="https://res.cloudinary.com/dof771xd5/image/upload/v1724671074/jzen6fdomab2hqlbzpzj.webp" alt="Honey Glazed Salmon" />
  <div>
    <p>Honey Glazed Salmon</p>
    <small>03 MAY, 2024</small>
  </div>
</div>

<div className="recent-post">
  <img src="https://res.cloudinary.com/dof771xd5/image/upload/v1724671314/xunz79q0lla7rzqb1v8v.webp" alt="Banana Bread French Toast" />
  <div>
    <p>Banana Bread French Toast</p>
    <small>02 MAY, 2024</small>
  </div>
</div>

<div className="recent-post">
  <img src="https://res.cloudinary.com/dof771xd5/image/upload/v1724671219/yerje1nbpmjszw0kqmxt.webp" alt="Easy Yogurt Bark" />
  <div>
    <p>Easy Yogurt Bark: The Perfect Frozen Snack</p>
    <small>01 MAY, 2024</small>
  </div>
</div>
        </div>
        

        {/* RIGHT BLOG LIST */}
        <div className="col-lg-9">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <p><strong>8</strong> Results Found</p>
            <p>Sort by: <strong>Newest</strong></p>
          </div>

          {blogPosts.map(post => (
            <div key={post.id} className="blog-card">

              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="date-badge">
                  <span>{post.date}</span>
                  <small>{post.month}</small>
                </div>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span>{post.category}</span>
                  <span>By Admin</span>
                  <span>{post.comments} Comments</span>
                </div>

                <h4>{post.title}</h4>

                <button className="read-more">
                  Read More ➔
                </button>
              </div>

            </div>
          ))}

          {/* Pagination */}
          <div className="pagination">
            <span>⮜</span>
            <span className="active">1</span>
            <span>2</span>
            <span>⮞</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;