import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchproducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchproducts());

    // const fetchProduct = async () => {

    //   console.log(data);

    //   setProducts(data);
    // };
    // fetchProduct();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if (status === STATUSES.LOADING) {
    return <h2>loading...</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!!!</h2>;
  }
  return (
    <>
     

      <div className="productsWrapper img-fluid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            {/* <button  onClick={() => handleAdd(product)} className="btn">
              Add to Cart
            </button> */}
            <Link to="/product"  className="button" style={{display:'flex'}} onClick={()=>handleAdd(product)}>
              Add to Cart
            </Link>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
