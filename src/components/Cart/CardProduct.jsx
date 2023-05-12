import React from "react";
import { useDispatch } from "react-redux";
import { DeleteProductCard } from "../../store/slices/cart.eslice";

const CardProduct = ({ product }) => {

  const  dispatph=useDispatch()

  const handleClickDelete=()=>{

    dispatph(DeleteProductCard(product.id))

  }

  return (
    <article>
      <section className="grid grid-cols-[auto_1fr_auto] gap_1">
        <div className="h-[90px] aspect-square row-span-2 p-2">
          <img
            className="w-full h-full object-contain"
            src={product.product.images[2].url}
            alt=""
          />
        </div>
        <h4>{product.product.title}</h4>

        <i onClick={handleClickDelete} className="bx bxs-trash text-red-500 cursor-pointer"></i>

        <div className="flex items-center">
          <button className="bordere-[1px] p-2 px-2 hiver:bg-red-500 hover:text-white transition-colors">
            -
          </button>

          <span className="border-[1px] p-2 px-2 border-x-8">{product.quantity}</span>
          <button className="bordere-[1px] p-2 px-2 hiver:bg-red-500 hover:text-white transition-colors">
            -
          </button>
        </div>
      </section>
      <h4 className="mt-2 text-end">Total: <span className="font-bold">{(product.quantity * product.product.price).toFixed(1)}</span></h4>
    </article>
  );
};

export default CardProduct;
