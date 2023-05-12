import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce, getConfig } from "../../utils/xonfigAxios";

const initialState = {
  products: [],
  isShowCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeIsShowCart: (state) => {
      state.isShowCart = !state.isShowCart;
    },
    setProducts: (state, action) => {
      const newproducts = action.payload;
      state.products = newproducts;
    },
  },
});

export const { changeIsShowCart, setProducts } = cartSlice.actions;

export const getCartProducts = () => (dispatph) => {
  axiosEcommerce
    .get("cart", getConfig())
    .then((res) => dispatph(setProducts(res.data)))
    .catch((err) => console.log(err));
};

export const addProductCard=(data)=>(dispatph)=>{
    axiosEcommerce
    .post("cart", data, getConfig())
    .then(()=>dispatph(getCartProducts()))
    .catch((err)=>console.log(err))

}

export const DeleteProductCard=(id)=>(dispatph)=>{
axiosEcommerce
.delete(`cart/${id}`, getConfig())
.then(()=>dispatph(getCartProducts()))
.catch((err)=>console.log(err))
}

export const purchasesCart=()=>(dispatph)=>{
    
    axiosEcommerce
    .post(`purchases`, {}, getConfig())
    .then(()=>dispatph(getCartProducts()))
    .catch((err)=>console.log(err))
}

export default cartSlice.reducer;
