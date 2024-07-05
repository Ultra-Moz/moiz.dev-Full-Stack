import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => (
  <div className="w-full flex items-center mt-12 flex-col">

    <div className="flex w-[90%] max-w-[1420px] justify-evenly items-center">
      <div className="flex flex-col gap-2">
        <h3 className="text-bgColor text-lg">We are the World Best IT Company</h3>
        <h1 className="text-white text-[56px] font-bold">Welcome to moiz.dev</h1>
        <p className="text-bgColor max-w-[550px] text-lg ">Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further! At moiz.dev, we specialize in
          providing innovative IT services and solutions tailored to meet your unique needs.</p>
        <div className="mt-10 flex gap-6">
          <NavLink to="/contact" className="bg-btnColor px-4 py-[6px] rounded-lg hover:opacity-85">Connect Now</NavLink>
          <NavLink to="/about" className="bg-transparent border-[1px] border-btnColor px-6 py-[6px] rounded-lg hover:opacity-85">Learn More</NavLink>
        </div>
      </div>
      <img src="home.png" alt="Hero Image" className="w-[500px] aspect-square" />
    </div>

    <div className="max-w-[1200px] w-[90%] bg-bgColor flex text-black p-6 mt-20 rounded-lg">
      <div className="flex flex-col justify-center items-center border-r-[2px] border-black w-full">
        <span className="text-darkColor text-[36px] font-bold">50+</span>
        <span className="text-lg opacity-[0.8]">Registered companies</span>
      </div>
      <div className="flex flex-col justify-center items-center border-r-[2px] border-black w-full">
        <span className="text-darkColor text-[36px] font-bold">10,000+</span>
        <span className="text-lg opacity-[0.8]">Happy Clients</span>
      </div>
      <div className="flex flex-col justify-center items-center border-r-[2px] border-black w-full">
        <span className="text-darkColor text-[36px] font-bold">500+</span>
        <span className="text-lg opacity-[0.8]">Well-Known Develepors</span>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <span className="text-darkColor text-[36px] font-bold">24/7</span>
        <span className="text-lg opacity-[0.8]">Service</span>
      </div>
    </div>

    <div className="flex flex-row-reverse w-[90%] max-w-[1420px] justify-evenly items-center mt-28">
      <div className="flex  flex-col gap-2">
        <h3 className="text-bgColor text-lg">We are here to help you</h3>
        <h1 className="text-white text-[56px] font-bold">Get started today</h1>
        <p className="text-bgColor max-w-[550px] text-lg ">Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and lets discuss how moiz.dev can help your buisness thrive in the digital age.</p>
        <div className="mt-10 flex gap-6">
          <NavLink to="/contact" className="bg-btnColor px-4 py-[6px] rounded-lg  hover:opacity-85">Connect Now</NavLink>
          <NavLink to="/about" className="bg-transparent border-[1px] border-btnColor px-6 py-[6px] rounded-lg  hover:opacity-85">Learn More</NavLink>
        </div>
      </div>
      <img src="home.png" alt="Hero Image" className="w-[500px] aspect-square" />
    </div>

    <div className='flex bg-btnColor w-full p-10 justify-center items-center text-white mt-16'>@moiz.dev 2024 </div>
  </div>
);

export default Home;
