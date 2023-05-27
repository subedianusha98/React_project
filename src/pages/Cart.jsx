import React, { useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';



const Cart = () => {
 
  // const products = [
  //   {
  //     id: 1,
  //     name: "Headphone",
  //     size: "s",
  //     color: "Red",
  //     price: 22,
  //     quantity: 1,
  //     image: "images/images/speaker.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "shoes",
  //     size: "US 9",
  //     color: "white",
  //     price: 345,
  //     quantity: 1,
  //     image: "images/images/speaker.jpg",
  //   },
  // ];
  const dispatch=useDispatch();
  const handleRemove=(productId)=>{
    dispatch(remove(productId));

  }
  const products=useSelector(state=>state.cart);
  console.log(products);

  const [cartItems, setCartItems] = useState(products);
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        item.quantity = 0;
      }
      return item;
    });
    setCartItems(updatedCart);
  };
  const handleQuantityChange = (event, productId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        item.quantity = parseInt(event.target.value);
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    // /<>
    //    <Meta title={"Cart"} />
    //    <BreadCrumb title="Cart" />
    //    <section className="cart-wrapper home-wrapper-2 py-5 ">
    // //     <div className="container-xxl">
    // //       <div className="row">
    // //         <div className="col-12">
    // //           <div className=" cart-header d-flex justify-content-between align-items-center">
    // //             <h4 className="cart-col-1">Product</h4>
    // //             <h4 className="cart-col-1">Price</h4>
    // //             <h4 className="cart-col-1">Quantity</h4>
    // //           </div>
    // //           {cartItems.map((product) => (
    // //             <div
    // //               key={product.id}
    // //               className=" cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
    // //             >
    // //               <div className="cart-col-1  gap-15 d-flex align-items-center">
    // //                 <div className="w-25">
    // //                   <img src={product.image} alt="" />
    // //                 </div>
    // //                 <div className="w-75">
    // //                   <p>{product.name}</p>
    // //                   <p>Size:{product.size}</p>
    // //                   <p>Color:{product.color}</p>
    // //                 </div>
    // //               </div>
    // //               <div className="cart-col-2">
    // //                 <h5 className="price">{product.price}</h5>
    // //               </div>
    // //               <div className="cart-col-3 d-flex align-items-center gap-15">
    // //                 <div>
    // //                   <input
    // //                     className="form-control "
    // //                     type="number"
    // //                     name=""
    // //                     min={1}
    // //                     max={10}
    // //                     id=""
    // //                     value={product.quantity}
    // //                     onChange={(e) => {
    // //                       const newQuantity = e.target.valueAsNumber;
    // //                       const updatedCart = cartItems.map((item) =>
    // //                         item.id === product.id
    // //                           ? { ...item, quantity: newQuantity }
    // //                           : item
    // //                       );
    // //                       setCartItems(updatedCart);
    // //                     }}
    // //                   />
    // //                 </div>
    // //                 <div>
    // //                   <RiDeleteBin5Fill
    // //                     className="text-danger"
    // //                     onClick={() => removeFromCart(product.id)}
    // //                   />
    // //                 </div>
    // //               </div>
    // //               <div className="cart-col-4">
    // //                 <h5 className="price"></h5>
    // //               </div>
    // //             </div>
    // //           ))}
    // //         </div>
    // //         <div className="col-12 py-2 mt-4">
    // //           <div className="d-flex justify-content-between align-items-baseline">
    // //             <Link to="/store" className="button">
    // //               Continue To Shoppping
    // //             </Link>
    // //             <div className="d-flex flex-column align-items-end">
    // //               <h4>Total:${getTotalPrice()}</h4>
    // //               <p>Taxes and shipping calculated at checkout</p>
    // //               <Link to="/checkout" className="button">
    // //                 Checkout
    // //               </Link>
    // //             </div>
    // //           </div>
    // //         </div>
    // //       </div>
    // //     </div>
    //    </section>
    // // </>
    <div className='cart Wrapper'>
    {
  products.map(product=>(
    <div className='cartCard'>
      <img  style={{height:'8opx'}} src={product.image} alt=""/>
      <h5>{product.title}</h5>
      <h5>{product.price}</h5>
      <button className='button' onClick={()=>handleRemove(product.id)}>Remove</button>

      </div>
  ))

    }
  </div>
  );
};

export default Cart;
