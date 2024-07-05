import React, { useState } from "react";
import { useAuth } from "../store/Auth";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [user, setUser] = useState(true)
  const {userData} = useAuth()

  if(user && userData){
    setContact({
      username:userData.username,
      email:userData.email,
      message:""
    })

    setUser(false)
  }
  

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  
  return (
    <div className="flex flex-col items-center mt-12 ">
      <div className="flex text-white w-[90%] max-w-[1420px] justify-evenly">
        <img
          src="/support.png"
          alt="Contact available"
          className="w-[500px] h-[500px]"
        />
        <div className="flex flex-col ">
          <h1 className="text-white font-bold text-[52px] max-w-[300px] relative underline-title">
            Contact Us
          </h1>
          <form
            className="flex flex-col mt-10 w-[440px]"
            onSubmit={handleSubmit}
          >
            <label htmlFor="username" className="text-white text-lg">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              required
              value={contact.username}
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
              value={contact.email}
              onChange={handleInput}
              id="email"
              required
              autoComplete="off"
              className="p-3 rounded bg-[#403c3c] text-white border border-white focus:border-btnColor focus:outline-none mt-1 mb-5"
            />
            <label htmlFor="message" className="text-white text-lg">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              value={contact.message}
              onChange={handleInput}
              autoComplete="off"
              className="resize-none rounded bg-[#403c3c] h-[250px] text-white border border-white focus:border-btnColor focus:outline-none mt-1 mb-5"
            />

            <button
              type="submit"
              className="mt-6 p-3 w-[130px] bg-btnColor text-white font-bold rounded hover:bg-indigo-600 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <section className="mt-28">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5425.21844452156!2d67.03221144036834!3d24.83314960920313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d09db6ecf41%3A0x8f853186a1621f7e!2sTeen%20Talwar%20Monument!5e0!3m2!1sen!2s!4v1719880217903!5m2!1sen!2s"  className="border-0 w-screen h-[400px]" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <div className='flex bg-btnColor w-full p-10 justify-center items-center text-white '>@moiz.dev 2024 </div>
    </div>
  );
};
export default Contact;
