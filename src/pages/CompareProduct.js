import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import Color from "../Components/Color";

const CompareProduct = () => {
  const [cross, setCross] = useState(Array(1).fill(false));

  const handleCrossClick = (index) => {
    setCross((prev) => {
      const newCross = [...prev];
      newCross[index] = !newCross[index];
      return newCross;
    });
  };

  return (
    <>
      <Meta title={"compare products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div
                className={`compare-product-card position-relative ${
                  cross[0] ? "d-none" : ""
                }`}
              >
                <img
                  src="images/images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                  onClick={() => handleCrossClick(0)}
                />
                <div className="product-card-image">
                  <img src="images/images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Right On Time check availability.</h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Rolex</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div
                className={`compare-product-card position-relative ${
                  cross[1] ? "d-none" : ""
                }`}
              >
                <img
                  src="images/images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                  onClick={() => handleCrossClick(1)}
                />
                <div className="product-card-image">
                  <img src="images/images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Right On Time check availability.</h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Rolex</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
