import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import { AuthContext } from "../../../provider/AuthProvider";

const ClassesPage = ({ isAdmin }) => {
  const [menu] = useMenu();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSelectClass = (classId) => {
    if (!user) {
      alert("Please log in to select a class.");
      navigate("/login"); // Redirect the user to the login page
      return;
    }

    // Handle class selection logic
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4">Approved Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menu.map((classItem) => (
          <div
            key={classItem._id}
            className={`bg-white rounded-lg shadow-lg ${
              classItem.availableSeats === 0 ? "bg-red-100" : ""
            }`}
          >
            <img src={classItem.image} alt={classItem.name} className="w-full h-80 rounded-t-lg" />
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
