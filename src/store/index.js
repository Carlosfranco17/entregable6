import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./slices/userInfo.slice";
import cart from "./slices/cart.eslice";




export default configureStore({

    reducer:{
userInfo,
cart
    }
})