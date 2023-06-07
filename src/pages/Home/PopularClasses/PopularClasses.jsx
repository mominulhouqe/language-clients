import React from "react";
import { FaVideo } from "react-icons/fa";

const popularClassesData = [
  {
    id: 1,
    image: "https://i.ibb.co/KwFsQVB/my-img1-1.jpg",
    title: "Yoga Class",
    students: 150,
  },
  {
    id: 2,
    image: "https://i.ibb.co/NyQhDBZ/my-img1.jpg",
    title: "Dance Workshop",
    students: 1520,
  },
  {
    id: 3,
    image: "https://i.ibb.co/37bdwrH/my-img1.png",
    title: "Cooking Class",
    students: 100,
  },
  {
    id: 4,
    image: "https://i.ibb.co/37bdwrH/my-img1.png",
    title: "Cooking Class",
    students: 7600,
  },
  // Add more class data
];

const PopularClasses = () => {
  const popularClasses = popularClassesData
    .sort((a, b) => b.students - a.students)
    .slice(0, 6);

  return (
    <div className="bg-gray-100  py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center my-6 mb-4">Popular Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularClasses.map((classItem) => (
            <div key={classItem.id} className="bg-white p-4 rounded-lg shadow-xl">
              <img src={classItem.image} alt={classItem.title} className="w-full h-80 object-cover mb-4" />
              <h3 className="text-xl font-bold">{classItem.title}</h3>
              <div className="flex items-center justify-between">
                <p className="text-gray-600">Students: {classItem.students}</p>
                <button className="btn"> <FaVideo></FaVideo> Watch video</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
