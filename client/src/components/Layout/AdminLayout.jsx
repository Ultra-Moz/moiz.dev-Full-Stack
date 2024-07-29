import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";



const AdminLayout = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-[90%] max-w-[1300px]'>


        <header>
            <div>
                <ul className='flex  gap-16 text-xl'>
                     <NavLink to="/admin/users" className="flex items-center"><HiOutlineUsers />Users</NavLink> 
                     <NavLink to="/admin/contacts" className="flex items-center"><AiOutlineMessage />
                    Contacts</NavLink> 
                     <NavLink to="/" className="flex items-center"><IoHomeOutline />
                    Home</NavLink> 
                </ul>
            </div>
        </header>
        <Outlet/>
      </ div>
    </div>
  )
}

export default AdminLayout
