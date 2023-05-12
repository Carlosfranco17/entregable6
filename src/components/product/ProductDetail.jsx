import React, { useEffect, useState } from "react";
import { axiosEcommerce } from "../../utils/xonfigAxios";
import SimilarProducts from "./SimilarProducts";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductCard } from "../../store/slices/cart.eslice";

const ProductDetail = ({ productId }) => {
  const [productData, setProductData] = useState();
  const [quantily, setQuantily] = useState(0);

  const [slide, setSlide] = useState(0)

  const dispatph = useDispatch();

  const handleClickPlusQuantily = () => {
    setQuantily(quantily + 1);
  };

  const handleClickLessQuantily = () => {
    if (quantily) {
      setQuantily(quantily - 1);
    }
  };
  
const handleClickSlidePlus=()=>{
 if (slide<200) {
  setSlide(slide + 100)
  
 }

}
const handleClickSlideLess=()=>{
  if (slide>0) {
    setSlide(slide-100)
    
  }

}


  const handleClickAddToCard = () => {
    dispatph(addProductCard({ quantity: quantily, productId: productData.id }));

    setQuantily(quantily * 0);
  };

  useEffect(() => {
    axiosEcommerce
      .get(`products/${productId}`)
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  }, [productId]);
  return (
    <section className="grid gap-12">


      <section className="flex gap-4 items-center p-4">
        <Link to="/" className="text-gray-600">
          Home
        </Link>
        <div className="h-[7px] bg-red-500 w-[7px] rounded-full"></div>
        <span className="font-bold">{productData?.title}</span>
      </section>

      <section className="p-4 grid gap-6 sm:grid-cols-2 items-center">

        
<section className="overflow-hidden relative">

        <section className={`flex w-[300%] -ml-[${slide}%]`}> 
          <div className="p-4 h-[300px] w-[calc(100%_/_3)]">
            <img
              className="h-full w-full object-contain transition-colors duration-500"
              src={productData?.images[0].url}
              alt=""
            />
          </div>
          <div className="p-4 h-[300px] w-[calc(100%_/_3)]">
            <img
              className="h-full w-full object-contain transition-colors duration-500"
              src={productData?.images[1].url}
              alt=""
            />
          </div>
          <div className="p-4 h-[300px] w-[calc(100%_/_3)]">
            <img
              className="h-full w-full object-contain transition-colors duration-500"
              src={productData?.images[2].url}
              alt=""
            />
          </div>
        </section>

        <i onClick={handleClickSlidePlus} className=' cursor-pointer hover:bg-red-400 active:bg-red-800 bg-red-500 py-2 px-3 rounded-full font-bold text-white text-xl aspect- absolute top-[50%] bx bx-chevron-left'></i>


        <i onClick={handleClickSlideLess} className=' cursor-pointer hover:bg-red-400 active:bg-red-800 bg-red-500 py-2 px-3 rounded-full font-bold text-white text-xl aspect- absolute left-[90%] top-[50%] bx bx-chevron-right'></i>

</section>

        <section>
          <h4 className="text-gray-400 text-xm">{productData?.brand}</h4>
          <h3 className="ml-2 font-bold">{productData?.title}</h3>

          <section className="flex justify-between items-center">
            <article>
              <h4 className="text-gray-400 text-sm">Price</h4>
              <h3 className="ml-2 font-bold">{productData?.price}</h3>
            </article>

            <article>
              <h4 className="text-gray-400 text-sm">Quantity</h4>
              <div className="flex m-2">
                <button
                  className="border-[1px] px-2 aspect-square text-sm "
                  onClick={handleClickPlusQuantily}
                >
                  +
                </button>
                <span className="border-b-[1px] border-t-[1px] px-2">
                  {quantily}
                </span>
                <button
                  className="border-[1px] px-2 aspect-square text-sm "
                  onClick={handleClickLessQuantily}
                >
                  -
                </button>
              </div>
            </article>
          </section>
          <button
            onClick={handleClickAddToCard}
            className="bg-red-500 text-white py-2 w-full mx-auto block hover:bg-red-400 active:bg-red-800"
          >
            Add to cart <i className="bx bx-cart"></i>
          </button>

          <p className="text-gray-700 mt-4 text-sm ">
            {productData?.description}
          </p>
        </section>

        <SimilarProducts
          productId={productData?.id}
          categoryId={productData?.categoryId}
        />
      </section>
    </section>
  );
};

export default ProductDetail;
