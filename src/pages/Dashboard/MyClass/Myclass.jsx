import React, { useEffect } from 'react';
import { FaTrash, FaMoneyBillAlt } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';

const Myclass = () => {
    const { cart } = useCart();
    console.log(cart);

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handleDelete = (classId) => {
        console.log(`Deleting class with id: ${classId}`);
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
                                <td>{item.availableSeats}</td>
                                <td>{item.price}</td>
                                <th>
                                    <button className="btn btn-warning" onClick={() => handleDelete(item._id)}>
                                        <FaTrash /> Delete
                                    </button>
                                </th>
                                <th>
                                    <button className="btn btn-active btn-secondary" onClick={() => handlePay(item._id)}>
                                        <FaMoneyBillAlt /> Pay
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex justify-end'>
                <button className='btn btn-ghost'>Total: {total}</button>
            </div>
        </div>
    );
};

export default Myclass;
