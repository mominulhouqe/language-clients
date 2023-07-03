import React from "react";
import { FaArrowAltCircleRight, FaVideo } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import "aos/dist/aos.css";
import AOS from "aos";
import { motion } from "framer-motion";
import { Container } from "postcss";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [menu] = useMenu();
  // const [instructors, loading] = useInstructor

  const popularClasses = menu
    .sort((a, b) => b.availableseats - a.availableseats)
    .slice(0, 6);
  console.log(popularClasses);
  // Initialize AOS inside the component
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center my-6 mb-4">Popular Classes</h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {popularClasses.map((instructor) => (
            <motion.div
              key={instructor._id}
              className="flex p-6 card  shadow-2xl gap-2 flex-col items-center"
              variants={item}
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-ful  mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 flex-wrap">Name : {instructor.name}</h3>

              <div className="flex gap-2">
                <p className="text-gray-600"> Students : {instructor.availableseats}</p>
                <button className="btn btn-primary btn-sm">watch video</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <Link to='/populareClass'><div className="text-end">
          <button className="btn btn-primary">See more <FaArrowAltCircleRight /> </button>
        </div></Link>
      </div>
    </div>
  );
};

export default PopularClasses;
