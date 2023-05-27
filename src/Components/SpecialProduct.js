import React,{useContext}from "react";
import { useState } from "react";
import CartContext from "./CartContext";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
// import CartContext from "./CartContext";

const SpecialProduct = ({ product }) => {
  const {setCartCount} =useContext(CartContext);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount,setcartCount] =useState(0);

  // const handleAddToCart = () => {
  //   const newItem = {
  //     id: product.id,
  //     name: product.name,
  //     price: product.price,
  //     quantity: 1,
  //   };
    // setCartItems([...cartItems, newItem]);
    const addToCart=()=>{
      setCartCount((prevCount)=>prevCount+1);
      
    };


  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src={product.image} alt={product.name} />
          </div>
          <div>
            <div className="special-product-content">
              <h5 className="brand">{product.name}</h5>
              <h6 className="title">{product.title}</h6>
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={true}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">${product.price}</span> &nbsp;
                <strike>$500</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>5</b>days
                </p>
                <div className="d-flex gap-10 align-items-center ">
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>
                </div>
              </div>

              <div className="prod-count my-3">
                <p>Products: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <Link to="/cart" className="button cart" onClick={addToCart}>
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Headphone",
      size: "s",
      color: "Red",
      price: 345,
      quantity: 1,
      image: "images/images/speaker.jpg",
    },
    {
      id: 2,
      name: "shoes",
      size: "US 9",
      color: "white",
      price: 345,
      quantity: 1,
      image: "images/images/speaker.jpg",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {products.map((product) => (
          <SpecialProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
