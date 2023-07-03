import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IoLogoApple } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-gray-900 font-serif py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="mb-4">
            <h3 className="text-xl text-white font-bold mb-2">About Us</h3>
            <p className="text-gray-400">
              We are a language learning platform dedicated to helping people
              improve their language skills in an interactive and engaging
              manner.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl text-white font-bold mb-2">Courses</h3>
            <ul className="text-gray-400">
              <li>English</li>
              <li>Spanish</li>
              <li>French</li>
              <li>German</li>
              <li>Japanese</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl text-white font-bold mb-2">Resources</h3>
            <ul className="text-gray-400">
              <li>Blog</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl text-white font-bold mb-2">Contact</h3>
            <p className="text-gray-400">Habiganj,Sylhet</p>
            <p className="text-gray-400">mominulhauqe14@gmail.com</p>
            <p className="text-gray-400">+8801937985805</p>
          </div>
        </div>

        <hr className="my-6 border-gray-800" />

        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href=""
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        <div className="flex justify-center mb-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <IoLogoApple size={32} />
          </a>
        </div>

        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Language Learning. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
