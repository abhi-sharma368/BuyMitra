import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { MdContactSupport } from "react-icons/md";
import Searchbar from "./Searchbar";
const Navbar = () => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const { setShowSearch, showSearch, getCartCount, visible, navigate, token, setToken, setCartItems } =
    useContext(ShopContext);
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>

      {/* Middle */}
      <ul className="hidden sm:block ">{visible && <Searchbar />}</ul>

      <div className="flex items-center gap-3 sm:gap-6">
        <img
          onClick={() => setShowSearch(!showSearch)}
          src={assets.search_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
        <Link to="/collection" className="hidden sm:block bg-amber-600 px-5 py-2 text-white rounded-3xl">
          <p>Collection</p>
        </Link>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            {getCartCount()}
          </p>
        </Link>
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          {/* Dropdonw menu */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu righ-0 pt-4 ">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black ">My Profile</p>
                <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black ">
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black ">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/contact" className="hidden sm:block">
          <MdContactSupport className="text-3xl" />
        </Link>
        <img
          onClick={() => setVisibleSidebar(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden "
          alt=""
        />
      </div>
      {/* Sidebar Menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visibleSidebar ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 ">
          <div onClick={() => setVisibleSidebar(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisibleSidebar(false)} className="py-2 pl-6 border" to="/collection">
            Collection
          </NavLink>

          <NavLink onClick={() => setVisibleSidebar(false)} className="py-2 pl-6 border" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
