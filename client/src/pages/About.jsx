import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/Auth";


const About = () => {
  

  const {userData} = useAuth()
  return (
    <div className="w-full flex flex-col items-center mt-12">

      <div className="flex items-center w-[90%] max-w-[1420px] justify-evenly">
        <div className="flex flex-col gap-2">
          <h3 className="text-bgColor text-lg">Welcome, {userData.username}</h3>
          <h1 className="text-white text-[56px] font-bold">Why Choose Us?</h1>
          <div className="flex flex-col gap-10">
            <p className="text-bgColor max-w-[550px] mt-2">
              Expertise: Our team consists of experienced IT professionals who
              are passionate about staying up-to-date with the latest industry
              trends.
            </p>
            <p className="text-bgColor max-w-[550px]  ">
              Customization: We understand that every business is unique. That's
              why we create solutions that are tailored to your specific needs
              and goals.
            </p>
            <p className="text-bgColor max-w-[550px]  ">
              Customer-Centric Approach: We prioritize your satisfaction and
              provide top-notch support to address your IT concerns.
            </p>
            <p className="text-bgColor max-w-[550px]  ">
              Affordability: We offer competitive pricing without compromising
              on the quality of our services.
            </p>
            <p className="text-bgColor max-w-[550px]  ">
              Reliability: Count on us to be there when you need us. We're
              committed to ensuring your IT environment is reliable and
              available 24/7.
            </p>
          </div>

          <div className="mt-10 flex gap-6">
            <NavLink to="/contact" className="bg-btnColor px-4 py-[6px] rounded-lg hover:opacity-85">
              Connect Now
            </NavLink>
            <NavLink to="/about" className="bg-transparent border-[1px] border-btnColor px-6 py-[6px] rounded-lg hover:opacity-85">
              Learn More
            </NavLink>
          </div>
        </div>
        <img
          src="about.png"
          alt="About Us"
          className="w-[500px] aspect-square"
        />
      </div>

      <div className="max-w-[1200px] w-[90%] bg-bgColor flex text-black p-6 mt-20 rounded-lg">
      <div className="flex flex-col justify-center items-center border-r-[2px] border-black w-full">
        <span className="text-darkColor text-[36px] font-bold">50+</span>
        <span className="text-lg opacity-[0.8]">Registered companies</span>
      </div>
      <div className="flex flex-col justify-center items-center border-r-[2px] border-black w-full">
        <span className="text-darkColor text-[36px] font-bold">150+</span>
        <span className="text-lg opacity-[0.8]">Projects Done</span>
      </div>
      <div className="flex flex-col justify-center items-center border-r-[2px] border-black w-full">
        <span className="text-darkColor text-[36px] font-bold">10,000</span>
        <span className="text-lg opacity-[0.8]">Happy Clients</span>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <span className="text-darkColor text-[36px] font-bold">650k+</span>
        <span className="text-lg opacity-[0.8]">Youtube Subscribers</span>
      </div>
    </div>

    <div className='flex bg-btnColor w-full p-10 justify-center items-center text-white mt-16'>@moiz.dev 2024 </div>
    </div>
  );
};

export default About;
