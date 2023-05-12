import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductCard } from "../../store/slices/cart.eslice";

const ProductCard = ({ product }) => {

  const dispatph=useDispatch()

  const handleClickAddProduct = (e) => {
    e.preventDefault();
 
   
    dispatph(addProductCard({productId:product.id, quantity: 1}))



  };
  return (
    <Link
      to={`/products/${product.id}`}
      className="border-[1px]  border-gray-300 rounded-md"
    >
      <div className=" relative p-4 border-b-[1px] border-gray-300 h-[200px] overflow-hidden  group ">
        <img
          className="h-full w-full object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-1000"
          src={product.images[0].url}
          alt=""
        />
          <img
          className="h-full w-full object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          src={product.images[1].url}
          alt=""
        />
      </div>
      <section className="p-4">
        <h4 className="text-gray-300 font-bold">{product.brand}</h4>
        <h3 className="font-bold text-sm ml-3">{product.title}</h3>
        <h4 className="text-gray-300 font-bold mt-4">Price</h4>
        <span className="font-bold text-sm ml-3">{product.price}</span>
        <button
          onClick={handleClickAddProduct}
          className="text-white text-xl bg-red-400 absolute bottom-7 right-7 rounded-full px-2 py-1 hover:bg-red-500 transition-colors"
        >
          <i className="bx bx-cart"></i>
        </button>
      </section>
    </Link>
  );
};

export default ProductCard;
