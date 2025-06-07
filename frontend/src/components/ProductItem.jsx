import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link
      className=" rounded-xl overflow-hidden p-2 text-white  bg-slate-700  cursor-pointer"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden rounded-md">
        <img className="hover:scale-110 transition ease-in-out w-full aspect-[1/1.2]" src={image[0]} alt="" />
      </div>
      <p className="'pt-3 pb-1 text-sm">{name}</p>
      <div className="flex gap-2">
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
