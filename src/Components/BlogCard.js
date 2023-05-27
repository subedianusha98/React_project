import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          src="https://images.pexels.com/photos/7241583/pexels-photo-7241583.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="img-fluid w-100"
          alt="blog"
        />
      </div>
      <div className="blog-content">
        <p className="date">26th April,2023 </p>
        <h5 className="title">Love What You Do.</h5>
        <p className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          possimus asperiores quibusdam, repellendus doloremque eos aut
          molestiae.
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
