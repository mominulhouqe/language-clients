import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight, FaVideo } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [menu] = useMenu();

  const popularClasses = menu
    .sort((a, b) => b.availableseats - a.availableseats)
    .slice(0, 6);

  // Initialize AOS inside the component
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center my-6 mb-4">Popular Classes</h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {popularClasses.map((instructor) => (
            <motion.div
              key={instructor._id}
              className="flex flex-col p-6 card shadow-lg rounded-lg items-center transition duration-500 ease-in-out transform hover:scale-105"
              variants={item}
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2 text-center break-words">
                Name: {instructor.name}
              </h3>
              <div className="flex items-center gap-2 justify-center">
                <p className="text-gray-600 mr-2">Students: {instructor.availableseats}</p>
                <button className="btn btn-neutral btn-sm">
                  <FaVideo className="mr-1" /> Watch 
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <Link to="/popularClass">
          <div className="text-end mt-4">
            <button className="btn btn-neutral">
              See more <FaArrowAltCircleRight className="ml-1" />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PopularClasses;
