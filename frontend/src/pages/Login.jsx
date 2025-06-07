import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { token, setToken, backendUrl, navigate } = useContext(ShopContext);
  const [currentState, setCurrentState] = useState("Login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <form
      onSubmit={onSubmitHandler}
      className=" flex flex-col items-center w-[90%] sm:max-w-156 p-2 sm:p-8 m-auto mt-14 bg gap-4 rounded-bl-[60px] rounded-tr-[60px] border-2 border-slate-600 text-slate-800 "
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-4xl ">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-slate-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full px-3 py-3 border border-slate-900 outline-none"
          placeholder="Name"
          required
        />
      )}

      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="w-full px-3 py-3 border border-slate-900 outline-none"
        placeholder="Email"
        required
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="w-full px-3 py-3 border border-slate-900 outline-none"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px] ">
        <p className="cursor-pointer">Forget your password</p>
        {currentState === "Login" ? (
          <p onClick={() => setCurrentState("Sign Up")} className="cursor-pointer text-blue-900">
            Create Account
          </p>
        ) : (
          <p onClick={() => setCurrentState("Login")} className="cursor-pointer text-blue-900">
            Login
          </p>
        )}
      </div>
      <button className="bg-slate-900 rounded-full cursor-pointer text-white fort-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
