import React from 'react'
import { NavLink } from "react-router-dom"
import { useAuth } from '../store/Auth'


const Navbar = () => {

  const {isLoggedIn} = useAuth()
  return (
    <nav className='w-full flex justify-center items-center'>
    <header className='flex justify-between items-center w-[90%] max-w-[1300px] p-8 font-sans'>
      <h3 className='text-xl text-btnColor'><NavLink to="/">moiz.dev</NavLink></h3>
    <ul className='flex gap-10 text-lg text-btnColor'>
      <li><NavLink className={({ isActive }) => `navlink ${isActive ? 'active-link' : 'text-btnColor'}`} to="/">Home</NavLink></li>
      <li><NavLink className={({ isActive }) => `navlink ${isActive ? 'active-link' : 'text-btnColor'}`} to="/about">About</NavLink></li>
      <li><NavLink className={({ isActive }) => `navlink ${isActive ? 'active-link' : 'text-btnColor'}`} to="/services">Services</NavLink></li>
      <li><NavLink className={({ isActive }) => `navlink ${isActive ? 'active-link' : 'text-btnColor'}`} to="/contact">Contact</NavLink></li>
      {isLoggedIn ? <li><NavLink className={({ isActive }) => `navlink ${isActive ? 'active-link' : 'text-btnColor'}`} to="/logout">Logout</NavLink></li>
      :<> <li><NavLink className={({ isActive }) => `navlink ${isActive ? 'active-link' : 'text-btnColor'}`} to="/register">Register</NavLink></li>
      <li><NavLink className={({ isActive }) => `navlink ${isActive ? 'active-link' : 'text-btnColor'}`} to="/login">Login</NavLink></li></>}
      
      
      </ul>
    </header>
    </nav>
)
}

export default Navbar