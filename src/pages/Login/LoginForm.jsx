import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const onSubmit = (data) => {
        // Handle login logic here
        console.log(data);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex  justify-center  items-center  bg-gray-100">
            <div className="bg-white max-w-sm mx-auto p-6 rounded-lg my-12 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Please Login !!!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border-gray-300 border py-2 px-3 rounded focus:outline-none focus:ring focus:ring-blue-200"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>
                    <div className="mb-4 relative items-center">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>
                        <div className='flex items-center'>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                className="w-full border-gray-300 border py-2 px-3 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                {...register('password', { required: true })}
                            />
                            <button
                                type="button"
                                className="absolute my-auto  right-3 "
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? (
                                    <FaEyeSlash className="h-5 w-5 text-gray-600" />
                                ) : (
                                    <FaEye className="h-5 w-5 text-gray-600" />
                                )}
                            </button>
                        </div>
                        {errors.password && <span className="text-red-500">Password is required</span>}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-md py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4">
                    <Link to="/register" className="text-blue-500">Create an account</Link>
                </div>
                <div className="mt-4 mx-auto">
                    <button
                        type="button"
                        className="py-2 btn btn-info btn-outline px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        <FaGoogle /> sign with google

                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
