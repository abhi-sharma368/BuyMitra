import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-10 mt-10 text-sm ">
        <img src={assets.logo} className="mb-5 w-32" alt="" />
        <p className=" w-full text-gray-600 text-center">
          Shop smarter with BuyMitra — your trusted partner for the latest trends, unbeatable deals, and
          seamless shopping. From fashion to gadgets, we bring quality and convenience to your doorstep.
          Discover, click, and shop with confidence — only at BuyMitra!
        </p>
      </div>

      <div>
        <hr />
        <p className=" py-5 text-sm text-center ">Copyright 2025@ BuyMitra - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
