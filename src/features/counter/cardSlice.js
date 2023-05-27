// import { createSlice } from "@reduxjs/toolkit";
// import { Toast } from "react-toastify/dist/components";



import {createSlice} from "@reduxjs/toolkit";
const initialState={
    cartItems:localStorage.getItem("cartItems")
    ?JSON.parse(localStorage.getItem("cartItems"))
    :[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
};

const cartSlice =createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state, action){
            state.cartItems.push(action.payload);
        }
    }
});
export const { addToCart }= cartSlice.actions;


export default cartSlice.reducer;