import React from "react";
import { formatDateDDMMYYYY } from "../../utils/date";

const PurchasesCard = ({ purchase }) => {
  return (
    <article className=" grid grid-cols-2 items-center gap-4">
      <section className=" flex gap-2">
        <div className="h-[50px] aspect-square sm:h-[80px]">
          <img
            className=" h-full w-full object-contain "
            loading="lazy"
            src={purchase.product.images[0].url}
            alt=""
          />
        </div>

        <h4>{purchase.product.title}</h4> 
      </section>

      <section className="grid text-center text-sm gap-3 sm:grid-cols-3">
        <span className="text-gray-400">
          {formatDateDDMMYYYY(purchase.createdAt)}
        </span>

        <div>
          <span className="p-2 border-[1px] border-gray-400">
            {purchase.quantity}
          </span>
        </div>

        <h4 className="font-bold">
          {purchase.quantity * purchase.product.price}
        </h4>
      </section>
    </article>
  );
};

export default PurchasesCard;
