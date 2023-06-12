import React from 'react';
import { FaTrashAlt, FaUser, FaUserShield, FaChalkboardTeacher } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery('users', async () => {
    const res = await axiosSecure('/users');
    return res.data;
  });

  const handleMakeAdmin = user => {
    fetch(`https://server-pi-liart.vercel.app/users/admin/${user._id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: 'success',
            title: `${user.name} is now an Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = user => {
    console.log('click make ins');
    fetch(`https://server-pi-liart.vercel.app/users/instructor/${user._id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: 'success',
            title: `${user.name} is now an Instructor`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto my-4">
        <table className="table w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2">#</th>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Role</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="border-b" key={user._id}>
                <td className="py-3 pl-4">{index + 1}</td>
                <td className="py-3 pl-4">{user.name}</td>
                <td className="py-3 pl-4">{user.email}</td>
                <td className="py-3 pl-4">
                  {user.role === 'admin' ? (
                    <span className="text-green-500">
                      <FaUserShield className='text-2xl' />
                      Admin
                    </span>
                  ) : (
                    <span className="text-purple-500">
                      <FaChalkboardTeacher className='text-2xl'/>
                      Instructor
                    </span>
                  )}
                </td>
                <td className="py-3 pl-4">
                  {user.role === 'admin' ? (
                    <FaUserShield className="text-gray-500 font-2xl" />
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="text-gray-500 hover:text-orange-500 transition-colors duration-300"
                    >
                      <FaUserShield className='text-2xl' />
                    </button>
                  )}
                  {user.role === 'instructor' ? (
                    <FaChalkboardTeacher className="text-gray-500 font-2xl ml-4" />
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="text-gray-500 hover:text-purple-500 transition-colors duration-300 ml-4"
                    >
                      <FaChalkboardTeacher className='text-2xl' />
                    </button>
                  )}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
