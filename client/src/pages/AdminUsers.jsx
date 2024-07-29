import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/Auth'
import { BsThreeDots } from "react-icons/bs";

const AdminUsers = () => {


  const [adminUsers, setAdminUsers] = useState([])
  const { authorizationToken } = useAuth()

  const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          "Authorization": authorizationToken
        }
      })
      if (response.ok) {
        const data = await response.json()
        setAdminUsers(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllUsers()

  }, []);
  return (
    <div>
      <h1 className='text-3xl mt-10'>Admin Users Data</h1>
      <table className='w-full text-black my-10 bg-gray-200 rounded-md'>
        <thead className=''>
          <th className='text-start '>Name</th>
          <th className='text-start'>Email</th>
          <th className='text-start '>Phone</th>
          <th className='text-start min-w-[150px]'></th>
        </thead>
        <tbody className=''>
          {adminUsers.map((adminUser,index) => {
            return <tr key={index} >
            <td>{adminUser.username}</td>
            <td>{adminUser.email}</td>
            <td className=''>{adminUser.phone}</td>
            <td><BsThreeDots />
            </td>
          </tr>
          })}

        </tbody>
      </table>
    </div>
  )
}

export default AdminUsers
