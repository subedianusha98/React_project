import React from "react";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div className={location.pathname === "/store" ? `gr-${grid}` : "col-3"}>
        <Link to="/store/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist">
              <img src="images/images/wish.svg" alt="" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/images/speaker.png "
              className="img-fluid"
              alt="watch"
            />
            <img
              src="images/images/speaker-1.png "
              className="img-fluid"
              alt="watch"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Speaker</h6>
            <h5 className="product-title">
              Bold and Durable: The Keynote Speaker
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              inventore, cupiditate doloribus qui rerum in facere ab id,
              consequatur dolor odit incidunt ipsum alias modi, obcaecati fugit
              omnis quae corporis.
            </p>

            <p className="price">$123</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/images/prodcompare.svg" alt="compare" />
              </Link>
              <Link to="/cart">
                <img src="images/images/add-cart.svg" alt="add cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className={location.pathname === "/store" ? `gr-${grid}` : "col-3"}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist">
              <img src="images/images/wish.svg" alt="" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/images/watch.jpg "
              className="img-fluid"
              alt="watch"
            />
            <img
              src="images/images/watch1.png "
              className="img-fluid"
              alt="watch"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Speaker</h6>
            <h5 className="product-title">
              Bold and Durable: The Keynote Speaker
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              inventore, cupiditate doloribus qui rerum in facere ab id,
              consequatur dolor odit incidunt ipsum alias modi, obcaecati fugit
              omnis quae corporis.
            </p>

            <p className="price">$123</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/images/prodcompare.svg" alt="compare" />
              </Link>
              <Link to="/cart">
                <img src="images/images/add-cart.svg" alt="add cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
