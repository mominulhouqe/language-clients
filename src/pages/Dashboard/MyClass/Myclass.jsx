import React, { useEffect } from 'react';
import { FaTrash, FaMoneyBillAlt } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';

const Myclass = () => {
    const { cart, refetch } = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);


    








    const handleDelete = (classId) => {
        console.log(`Deleting class with id: ${classId}`);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`http://localhost:5000/carts/${classId}`,
                    {
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    };

    const handlePay = (classId) => {
        console.log(`Paying for class with id: ${classId}`);
    };

    return (
        <div className='border rounded-lg shadow-2xl p-4'>
            <div className="overflow-x-auto mx-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className=''>{item.name}</td>
                                <td>{item.availableseats}</td>
                                <td>{item.price}</td>
                                <th>
                                    <button className="btn btn-warning text-center bg-white btn-sm " onClick={() => handleDelete(item._id)}>
                                        <FaTrash className='text-xl text-red-500' /> Delete
                                    </button>
                                </th>
                                <th>
                                    <button className="btn btn-active text-center btn-secondary bg-white btn-sm" onClick={() => handlePay(item._id)}>
                                        <FaMoneyBillAlt className='text-xl' /> Pay
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex justify-end'>
                <button className='btn'>Total: $ {total.toFixed(2)}</button>
            </div>

        </div>
    );
};

export default Myclass;
