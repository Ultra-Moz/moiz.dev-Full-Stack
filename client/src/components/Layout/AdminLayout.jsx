import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";



const AdminLayout = () => {
  return (
    <>
        <header>
            <div>
                <ul className='flex flex-col gap-3 text-xl'>
                     <NavLink to="/admin/users" className="flex items-center"><HiOutlineUsers />Users</NavLink> 
                     <NavLink to="/admin/contacts" className="flex items-center"><AiOutlineMessage />
                    Contacts</NavLink> 
                     <NavLink to="/" className="flex items-center"><IoHomeOutline />
                    Home</NavLink> 
                </ul>
            </div>
        </header>
        <Outlet/>
    </>
  )
}

export default AdminLayout
