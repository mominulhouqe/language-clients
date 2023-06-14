import React from "react";
import { motion } from "framer-motion";
import useInstructor from "../../../hooks/useInstructor";

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
};

const PopularInstructors = () => {
  const [instructors] = useInstructor()
  const popularInstructors = instructors.slice(0, 6);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Popular Instructors
        </h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {popularInstructors.map((instructor) => (
            <motion.div
              key={instructor._id}
              className="flex p-6 shadow-2xl gap-2 flex-col items-center"
              variants={item}
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2"> {instructor.name}</h3>
              <p className="text-gray-600">{instructor.title}</p>
              <p className="text-gray-600"> Students : {instructor.student}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularInstructors;
