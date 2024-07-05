import React from 'react'
import { NavLink } from "react-router-dom"

const PageNotFound = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-3 content mt-12'>
      <h1 className='text-[300px] header font-bold text-btnColor'>404</h1>
      <span className='text-2xl font-bold'>SORRY! PAGE NOT FOUND</span>
      <p className='text-center opacity-95 text-xl max-w-[40%]'>Oops! It seems like the page you're trying to access doesn't exist. If you believe there's an issue, feel free to report it, and we'll look into it.</p>
      <div className='flex gap-4 mt-5'>
        <NavLink to="/" className="text-btnColor bg-transparent border-[1px] border-btnColor px-6 py-[6px] rounded-3xl">RETURN HOME</NavLink>
        <NavLink to="/contact" className="text-btnColor bg-transparent border-[1px] border-btnColor px-6 py-[6px] rounded-3xl">REPORT PROBLEM</NavLink>
      </div>
    </section>
  )
}

export default PageNotFound