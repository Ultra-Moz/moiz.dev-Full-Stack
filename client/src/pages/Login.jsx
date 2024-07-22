import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

const Login = () => {
  const navigate = useNavigate();
  const { storeTokenLS, LoginUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          email: "",
          password: "",
        });
        navigate("/");
        const res_data = await response.json();
        // storeTokenLS(res_data.token);
        console.log(res_data);

        LoginUser(res_data.token, res_data);
      }
    } catch (error) {
      console.log("login", error);
    }
  };
  return (
    <div className="flex flex-col items-center mt-12 ">
      <div className="flex text-white w-[90%] max-w-[1420px] justify-evenly">
        <img
          src="/login.png"
          alt="a boy logging in"
          className="w-[500px] h-[500px]"
        />
        <div className="flex flex-col ">
          <h1 className="text-white font-bold text-[52px] max-w-[300px] relative underline-title">
            Login Form
          </h1>
          <form
            className="flex flex-col mt-10 w-[440px]"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email" className="text-white text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              id="email"
              required
              autoComplete="off"
              className="p-3 rounded bg-[#403c3c] text-white border border-white focus:border-btnColor focus:outline-none mt-1 mb-5"
            />
            <label htmlFor="password" className="text-white text-lg ">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              id="password"
              required
              autoComplete="off"
              className="p-3 rounded bg-[#403c3c] text-white border border-white focus:border-btnColor focus:outline-none mt-1 mb-5"
            />

            <button
              type="submit"
              className="mt-6 p-3 w-[200px] bg-btnColor text-white font-bold rounded hover:bg-indigo-600 focus:outline-none"
            >
              Login Now
            </button>
          </form>
        </div>
      </div>
      <div className="flex bg-btnColor w-full p-10 justify-center items-center text-white mt-16 absolute bottom-0">
        @moiz.dev 2024{" "}
      </div>
    </div>
  );
};

export default Login;
