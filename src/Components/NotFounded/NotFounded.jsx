import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFounded = () => {
    return (
        <div className="flex  flex-col items-center justify-center my-12 ">
            <img
                src='https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png' 

                alt="404 Page Not Found"
                className="w-80 h-80 mb-8"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h2>
            <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
            <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-5 hover:bg-blue-600">
                <FaArrowLeft></FaArrowLeft> Back to Home
            </Link>
        </div>
    );
};

export default NotFounded;
