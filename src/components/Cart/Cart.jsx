import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts, purchasesCart } from "../../store/slices/cart.eslice";
import CardProduct from "./CardProduct";

const Cart = () => {
  const { isShowCart, products } = useSelector((store) => store.cart);

  const { token } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();

  const handleClickCheckout = () => {
    dispatch(purchasesCart());
  };

  const totalprice = products.reduce(
    (acc, curr) => acc + curr.quantity * curr.product.price,
    0
  );
  console.log(totalprice);

  useEffect(() => {
    if (isShowCart) {
      dispatch(getCartProducts());
    }
  }, [isShowCart]);

  return (
    <section
      className={`fixed bottom-0  ${
        isShowCart && token ? "right-0" : "-right-full"
      }  w-[300px] bg-white bottom-0 min-h-[calc(100vh_-_100px)] shadow-xl duration-[1s]  grid grid-rows-[auto_1fr_auto] p-4 pt-12`}
    >
      <section className="overflow-y-auto grid gap-10 py-4 content-start">
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </section>

      <section></section>

      <section className="">
        <div className="grid grid-cols-2 m-4">
          <span className="text-gray-400">total</span>

          <h4 className="text-end font-bold">{totalprice}</h4>
        </div>

        <button
          onClick={handleClickCheckout}
          className="bg-red-500 text-white py-2 w-full mx-auto block hover:bg-red-400 active:bg-red-800"
        >
          Checkout <i className="bx bx-cart"></i>
        </button>
      </section>
    </section>
  );
};

export default Cart;
