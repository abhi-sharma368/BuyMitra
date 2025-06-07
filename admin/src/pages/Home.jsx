import React from "react";
import { assets } from "../assets/assets";

const Home = () => {
  return (
    <div className="text-center mt-20">
      <img className="w-[100px] sm:w-[150px] m-auto bg-slate-700 rounded-full" src={assets.admin} alt="" />
      <p className="mt-3 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
        Welcome , [ <span className="text-red-500">Abhishek</span> ]
      </p>
      <p className="text-sm mt-5 sm:text-[18px] ">
        Empower your e-commerce business with real-time insights, easy product management, and smooth order
        processing — all from one centralized admin dashboard.
      </p>
    </div>
  );
};

export default Home;
