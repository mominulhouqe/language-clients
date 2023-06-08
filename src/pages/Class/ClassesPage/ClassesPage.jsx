import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import { AuthContext } from "../../../provider/AuthProvider";
import "aos/dist/aos.css";
import AOS from "aos";
import Cover from "../../Shared/Cover/Cover";
import img from '../../../assets/img4.jpg'
const ClassesPage = ({ isAdmin }) => {
  const [menu] = useMenu();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);

  const handleSelectClass = (classId) => {
    if (!user) {
      alert("Please log in to select a class.");
      navigate("/login");
      return;
    }

    // Handle class selection logic
  };

  return (
    <div>
      <Cover img={img} title="Approved Classes"></Cover>
      <div className="container mx-auto my-6">
        <div className="">
    
          <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menu.map((classItem) => (
              <div
                key={classItem._id}
                className={`bg-white rounded-lg shadow-lg ${classItem.availableSeats === 0 ? "bg-red-100" : ""
                  }`}
                data-aos="fade-bottom"
              >
                <img
                  src={classItem.image
                  }
                  alt={classItem.name}
                  className="w-full h-80 rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{classItem.name}</h3>
                  <p className="text-gray-600 mb-2">Instructor: {classItem.instructor}</p>
                  <p className="text-gray-600 mb-2">Available Seats: {classItem.availableSeats}</p>
                  <p className="text-gray-600 mb-4">Price: ${classItem.price}</p>
                  <button
                    onClick={() => handleSelectClass(classItem.id)}
                    disabled={classItem.availableSeats === 0 || isAdmin}
                    className={`px-4 py-2 rounded-lg ${classItem.availableSeats === 0 || isAdmin ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
                      }`}
                  >
                    {classItem.availableSeats === 0 ? "No Seats Available" : "Select"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
