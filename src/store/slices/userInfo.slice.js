import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce } from "../../utils/xonfigAxios";


const initialState={
    token:"",
    user:null
}



const usersInfoSlice = createSlice({
   
    name:"userInfo",
    initialState:JSON.parse(localStorage.getItem("userInfo")) ?? initialState,
    reducers:{
setUserInfo:(state, action)=>{
    const newState={...state, ...action.payload}
    localStorage.setItem("userInfo", JSON.stringify(newState))
return newState


},
logOut:(state)=>{

  const newState={...state, ...initialState}  
  localStorage.setItem("userInfo", JSON.stringify(newState))
  return newState

}
},
});

export const {setUserInfo,logOut}=usersInfoSlice.actions

export const loginUser=(data)=>(dispatch)=>{
    axiosEcommerce
    .post("users/login", data)
    .then((res)=>dispatch(setUserInfo(res.data)))
    .catch((err)=>console.log(err))
}



export default usersInfoSlice.reducer 