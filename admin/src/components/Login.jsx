import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("abhi@gmail.com");
  const [password, setPassword] = useState("BuyMitraAdmin368");
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", { email, password });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div
      className="h-screen w-full flex items-center justify-center  bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${assets.loginBg})` }}
    >
      <div className="backdrop-blur-xs bg-[#00000029] text-white shadow-md rounded-tr-4xl rounded-bl-4xl px-8 py-10 w-[90%] sm:w-1/2">
        <h1 className="text-3xl text-white font-bold mb-4 text-center">
          <span className="text-slate-900 text-4xl">BuyMitra</span>-Admin Pannel
        </h1>
        <form onSubmit={onSubmitHandler} action="">
          <div className="mb-3 w-full">
            <p className="text-sm font-medium text-gray-100 mb-2">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md w-full px-3 border-2 py-2 border-gray-200 focus:border-slate-800 outline-none"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-3 w-full">
            <p className="text-sm font-medium  text-gray-100 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-3 border-2 py-2  border-gray-200 focus:border-slate-800  outline-none"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-tr-2xl rounded-bl-2xl cursor-pointer text-white bg-slate-900"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
