import React from 'react';
import { FaTrashAlt, FaUser } from 'react-icons/fa';
import { useQuery } from 'react-query';

const AllUsers = () => {

    const {data: users = [],  refetch} = useQuery('users', async()=>{
        const res = await fetch('http://localhost:5000/users');
        return res.json();
    });



    
    const handleMakeAdmin = user => {
        // fetch(`https://bristo-boss-server-mominulhouqe.vercel.app/users/admin/${user._id}`,
        //     {
        //         method: 'PATCH',
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount) {
        //             refetch();
        //             Swal.fire({
        //                 icon: 'success',
        //                 title: `${user.name}is an Admin Now`,
        //                 showConfirmButton: false,
        //                 timer: 1500,
        //             });
        //         }
        //     })
    }


    const handleDelete = (user) => {

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
                                    <button
                                        onClick={() => handleDelete(user)} // Changed 'item' to 'row'
                                        className="btn btn-ghost bg-red-600 text-white"
                                    >
                                        <FaTrashAlt />
                                    </button> </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default AllUsers;