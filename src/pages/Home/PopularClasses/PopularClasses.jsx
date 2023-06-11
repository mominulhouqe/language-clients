import React from "react";
import { FaVideo } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import "aos/dist/aos.css";
import AOS from "aos";
import useInstructor from "../../../hooks/useInstructor";

const PopularClasses = () => {
  const [menu] = useMenu();
  // const [instructors, loading] = useInstructor

  const popularClasses = menu
    .sort((a, b) => b.availableseats - a.availableseats)
    .slice(0, 6);

  // Initialize AOS inside the component
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center my-6 mb-4">Popular Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularClasses.map((classItem) => (
            <div
              key={classItem._id}
              className="bg-white p-4 rounded-lg shadow-xl"
              data-aos="fade-up" // Add AOS animation attribute
            >
              <img src={classItem.image} alt={classItem.name} className="w-full h-80 object-cover mb-4" />
              <h3 className="text-xl font-bold">{classItem.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-gray-600">Students: {classItem.availableseats}</p>
                <button className="btn">
                  <FaVideo></FaVideo> Watch video
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
