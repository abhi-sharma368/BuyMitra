import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Searchbar = () => {
  const { search, setSearch, setShowSearch } = useContext(ShopContext);

  return (
    <div className="border-t sm:border-none border-b text-center">
      <div className="inline-flex items-center justify-center border border-slate-700 sm:py-1  px-5 py-2 my-5 mx-3 sm:my-0 rounded-full w-3/4 sm:w-fit">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="flex-1 outline-none bg-inherit text-sm"
          placeholder="Search"
        />
        <img src={assets.search_icon} className="w-4" alt="" />
      </div>
      
    </div>
  );
};

export default Searchbar;
