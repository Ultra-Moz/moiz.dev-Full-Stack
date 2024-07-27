import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import Footer from "../components/Footer";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const { registerUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      if (response.ok) {
        setUser({
          username: "",
          email: "",
          password: "",
          phone: "",
        });
      toast.success("Registeration Successful!")
        registerUser(res_data.token);

        // storeTokenLS(res_data.token)

        navigate("/");
      }else{
        toast.error(res_data.extraDetails ?? res_data.message)
      }
    } catch (error) {
      console.log("register", error);
    }
  };
  return (
    <div className="flex flex-col items-center my-12">
      <div className="flex text-white w-[90%] max-w-[1420px] justify-evenly">
        <img
          src="/register.png"
          alt="a girl registering up"
          className="w-[500px] h-[500px]"
        />
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-[52px] relative underline-title">
            Registration Form
          </h1>
          <form className="flex flex-col mt-10 w-full" onSubmit={handleSubmit}>
            <label htmlFor="username" className="text-white text-lg">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              required
              value={user.username}
              onChange={handleInput}
              autoComplete="off"
              className="p-3 rounded bg-[#403c3c] text-white border border-white focus:border-btnColor focus:outline-none mt-1 mb-5"
            />
            <label htmlFor="email" className="text-white text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
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
              value={user.password}
              onChange={handleInput}
              id="password"
              required
              autoComplete="off"
              className="p-3 rounded bg-[#403c3c] text-white border border-white focus:border-btnColor focus:outline-none mt-1 mb-5"
            />
            <label htmlFor="phone" className="text-white text-lg ">
              Phone
            </label>
            <input
              type="string"
              name="phone"
              value={user.phone}
              onChange={handleInput}
              id="phone"
              required
              autoComplete="off"
              className="p-3 rounded bg-[#403c3c] text-white border border-white focus:border-btnColor focus:outline-none mt-1 mb-5"
            />
            <button
              type="submit"
              className="mt-6 p-3 w-[200px] bg-btnColor text-white font-bold rounded hover:bg-indigo-600 focus:outline-none"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
