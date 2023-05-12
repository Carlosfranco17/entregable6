import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { axiosEcommerce } from "../utils/xonfigAxios";
import { useDispatch, useSelector } from "react-redux";
import { logOut, loginUser } from "../store/slices/userInfo.slice";

const Login = () => {
  const { handleSubmit, register } = useForm();

const {token, user}=useSelector(store=>store.userInfo)



  const dispatch = useDispatch();
  const submit = (data) => {
    dispatch(loginUser(data));
  };

  const handleClickLogout=()=>{
dispatch(logOut())
  }
  return (
    <main className="bg-gray-100 grid place-content-center px-8">

      {
token ? (<section className="bg-white p-4 rounded-md w-[400px] grid gap-6 text-center">
   <i className='text-[100px] text-red-500 bx bxs-user-circle'></i>
   <h3 className="mx-auto font-bold uppercase text-xl text-gray-700">Bienvenido {user?.firstName} {user?.lastName}</h3>
<button onClick={handleClickLogout} className="bg-red-500 w-[30%] mx-auto text-white font-bold py-1 hover:bg-red-400 active:bg-red-800 rounded-md">Logout</button>
</section> 
):(
   <form
  onSubmit={handleSubmit(submit)}
  className=" bg-white grid gap-4 p-4"
>
  <h3 className="text-gray-700 font-semibold">
    Welcome! Enter you email and password to continue
  </h3>
  <section className="bg-blue-100 p-2 grid gap-1">
    <h1 className=" text-center font-bold text-gray-600">Test</h1>

    <div className="text-gray-700">
      <i className="bx bx-envelope"></i>
      <span className="pl-2">john@gmail.com</span>
    </div>
    <div className="text-gray-700">
      <i className="bx bx-lock"></i>
      <span className="pl-2">john1234</span>
    </div>
  </section>

  <div>
    <label className="text-gray-700 " htmlFor="">
      Email
    </label>
    <input
      className="border-[1px] border-gray-400 w-full py-1"
      type="email"
      id="email"
      {...register("email", { required: true })}
    />
  </div>

  <div>
    <label className="text-gray-700 " htmlFor="">
      Password
    </label>
    <input
      className="border-[1px] border-gray-400 w-full py-1"
      type="password"
      id="password"
      {...register("password", { required: true })}
    />
  </div>

  <button className="bg-red-500 text-white py-1">Login</button>
  <h4 className="text-gray-800">
    Don't an account?{" "}
    <Link to="#" className="text-blue-400 cursor-pointer">
      Sign up
    </Link>
  </h4>
</form>)

      }
      
    </main>
  );
};

export default Login;
