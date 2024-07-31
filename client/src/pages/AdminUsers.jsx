import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { BsThreeDots } from "react-icons/bs";

const AdminUsers = () => {
  const [adminUsers, setAdminUsers] = useState([]);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const { authorizationToken } = useAuth();

  const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setAdminUsers(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDropdownClick = (index) => {
    if (dropdownIndex === index) setDropdownIndex(null);
    else setDropdownIndex(index);
  };

  const handleDelete = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/admin/users/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      getAllUsers();
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${id}`,
        {
          method: "EDIT",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div
      onClick={() => {
        if (dropdownIndex !== null) setDropdownIndex(null);
      }}
      className="flex items-center flex-col"
    >
      <h1 className="text-3xl mt-10">Admin Users Data</h1>
      <table className="w-full text-black my-10 bg-gray-100 rounded-md max-w-[1000px]">
        <thead className="">
          <th className="text-start max-w-[50px] ">Index</th>
          <th className="text-start ">Name</th>
          <th className="text-start">Email</th>
          <th className="text-start ">Phone</th>
          <th className="text-start"></th>
        </thead>
        <tbody className="">
          {adminUsers.map((adminUser, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{adminUser.username}</td>
                <td>{adminUser.email}</td>
                <td>{adminUser.phone}</td>
                <td>
                  <div className="flex items-center gap-5 relative">
                    <BsThreeDots
                      className="cursor-pointer hover:opacity-70"
                      onClick={() => handleDropdownClick(index)}
                    />
                    {dropdownIndex === index && (
                      <div className="flex flex-col-reverse bg-slate-700 text-white rounded-md px-6 py-2 absolute top-full right-0 z-10 backdrop-blur-lg">
                        <button
                          className="hover:opacity-50"
                          onClick={() => handleEdit(adminUser._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="hover:opacity-50"
                          onClick={() => handleDelete(adminUser._id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
