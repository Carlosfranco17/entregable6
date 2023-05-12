import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/home/ProductCard";
import { axiosEcommerce } from "../utils/xonfigAxios";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [currenCategory, setcurrenCategory] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProductName = e.target.productName.value;

    setProductName(newProductName);
  };

  const handleClickCategory = (e) => {
    setcurrenCategory(Number(e.target.dataset.category));
  };

  const productByName = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(productName.toLowerCase())
    );
  }, [productName, products]);

  useEffect(() => {
    axiosEcommerce
      .get("categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (currenCategory === 0) {
      axiosEcommerce
        .get("products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }
  }, [currenCategory]);

  useEffect(() => {
    if (currenCategory !== 0) {
      axiosEcommerce
       .get(`products?categoryId=${currenCategory}`)
       .then((res) => setProducts(res.data))
       .catch((err) => console.log(err));
    }
  }, [currenCategory]);

  return (
    <main className="">
      <form   onSubmit={handleSubmit}>
        <div className="flex justify-center mx-auto  border-[1px] w-[50%] items-center mt-[4%]">
          <input className=" mx-auto  border-[1px] w-[100%] py-2 "
            id="productName"
            type="text"
            placeholder="What are you looking for?"
          />
          <i className=" bg-red-500 px-12 py-3 font-bold text-white  bx bx-search"></i>
        </div>

        <ul className="grid grid-cols-5 mx-0 px-4 w-full text-center">
          <li
            className="cursor-pointer bg-red-500 mx-4 py-2 rounded-md text-white font-semibold mb-[20%] mt-[20%]"
            onClick={handleClickCategory}
            data-category={0}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              className="cursor-pointer bg-red-500 mx-4 py-2 rounded-md text-white font-semibold mb-[20%] mt-[20%]"
              onClick={handleClickCategory}
              data-category={category.id}
              key={category.id}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </form>

      <section className="grid gap-8 px-4 grid-cols-4">
        {productByName.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
};

export default Home;
