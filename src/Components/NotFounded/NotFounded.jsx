import React from 'react';
import { Link } from 'react-router-dom';

const NotFounded = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src={require('./404-image.png').default} // Replace with your own image
        alt="404 Page Not Found"
        className="w-64 h-64 mb-8"
      />
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFounded;
