import React from 'react';
import { FaTrashAlt, FaUser } from 'react-icons/fa';
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
        fetch(`http://localhost:5000/users/admin/${user._id}`,
            {
                method: 'PATCH',
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name}is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
    }


    const handleMakeInstructor = (user) => {
        console.log('click make ins');
        fetch(`http://localhost:5000/users/instructor/${user._id}`,
        {
            method: 'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: `${user.name}is an instructor Now`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })

    }


    return (
        <div>



            <div className="overflow-x-auto my-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr className="bg-base-200" key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>
                                    {user.role === 'admin' ? (
                                        'admin'
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-ghost bg-orange-500 text-white"
                                        >
                                            <FaUser />
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {user.role === 'instructor' ? (
                                        'instructor'
                                    ) : (
                                        <button
                                            onClick={() => handleMakeInstructor(user)}
                                            className="btn btn-ghost bg-orange-500 text-white"
                                        >
                                            <FaUser />
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