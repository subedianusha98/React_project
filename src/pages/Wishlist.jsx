import React,{useState} from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";

const Wishlist = () => {
  const [cross,setCross]=useState([]);
  
  const handleCrossClick = (index) => {
    setCross((prev) => {
      const newCross = [...prev];
      newCross[index] = !newCross[index];
      return newCross;
    });
  };
  return (
    <>
      <Meta title={"wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
            <div className={`compare-product-card position-relative ${cross[0] ? "d-none" : ""}`}>

              <div className="wishlist-card position-relative">
                <img
                  src="images/images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                  onClick={() => handleCrossClick(0)}

                />
                <div className="wishlist-card-image">
                  <img
                    src="images/images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                    />
                </div>
                <div className=" px-3 py-3">
                  <h5 className="title">Right On Time check availability.</h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            </div>
            <div className="col-3">
            <div className={`compare-product-card position-relative ${cross[1] ? "d-none" : ""}`}>

              <div className="wishlist-card position-relative">

                <img
                  src="images/images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                  onClick={() => handleCrossClick(1)}


                />{" "}
                <div className="wishlist-card-image">
                  <img
                    src="images/images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className=" px-3 py-3">
                  <h5 className="title">Right On Time check availability.</h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            </div>
            <div className="col-3">
            <div className={`compare-product-card position-relative ${cross[2] ? "d-none" : ""}`}>

              <div className="wishlist-card position-relative">
                <img
                  src="images/images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                  onClick={()=>handleCrossClick(2)}
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className=" px-3 py-3">
                  <h5 className="title">Right On Time check availability.</h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            </div>
            <div className="col-3">
            <div className={`compare-product-card position-relative ${cross[3] ? "d-none" : ""}`}>

              <div className="wishlist-card position-relative">
                <img
                  src="images/images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                  onClick={()=>handleCrossClick(3)}
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className=" px-3 py-3">
                  <h5 className="title">Right On Time check availability.</h5>
                  <h6 className="price">$ 100</h6>
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

export default Wishlist;
