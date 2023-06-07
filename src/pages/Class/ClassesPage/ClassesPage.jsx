import React from "react";

const classesData = [
  {
    id: 1,
    image: "https://example.com/image1.jpg",
    name: "Class 1",
    instructor: "John Doe",
    availableSeats: 5,
    price: 50,
  },
  {
    id: 2,
    image: "https://example.com/image2.jpg",
    name: "Class 2",
    instructor: "Jane Smith",
    availableSeats: 0,
    price: 40,
  },
  // Add more class data
];

const ClassesPage = ({ isLoggedIn, isAdmin }) => {
  const handleSelectClass = (classId) => {
    if (!isLoggedIn) {
      alert("Please log in to select a class.");
      return;
    }

    // Handle class selection logic
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4">Approved Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {classesData.map((classItem) => (
          <div
            key={classItem.id}
            className={`bg-white rounded-lg shadow-lg ${
              classItem.availableSeats === 0 ? "bg-red-100" : ""
            }`}
          >
            <img src={classItem.image} alt={classItem.name} className="w-full rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{classItem.name}</h3>
              <p className="text-gray-600 mb-2">Instructor: {classItem.instructor}</p>
              <p className="text-gray-600 mb-2">Available Seats: {classItem.availableSeats}</p>
              <p className="text-gray-600 mb-4">Price: ${classItem.price}</p>
              <button
                onClick={() => handleSelectClass(classItem.id)}
                disabled={classItem.availableSeats === 0 || isAdmin}
                className={`px-4 py-2 rounded-lg ${
                  classItem.availableSeats === 0 || isAdmin ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
                }`}
              >
                {classItem.availableSeats === 0 ? "No Seats Available" : "Select"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
