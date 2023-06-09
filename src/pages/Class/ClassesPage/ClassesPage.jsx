import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import { AuthContext } from "../../../provider/AuthProvider";
import "aos/dist/aos.css";
import AOS from "aos";
import Cover from "../../Shared/Cover/Cover";
import img from '../../../assets/img4.jpg'
import Swal from "sweetalert2";

import ClassesPagesData from "./ClassesPagesData";
import useInstructor from "../../../hooks/useInstructor";

const ClassesPage = ({ isAdmin }) => {


  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [menu] = useMenu()

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);


  const handleSelectClass = (classItem) => {
    console.log(classItem);

    if (user && user.email) {
      const selectedId = {
        menuItemId: classItem._id,
        name:classItem.instructor,
        image: classItem.image,
        title:classItem.title,
        students:classItem.students,
        availableSeats:classItem.availableSeats,
        price:classItem.price,
        email: user.email
      };
      console.log(selectedId);

      fetch("http://localhost:5000/classes", {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(selectedId)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Added your class",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Failed to add your class",
            });
          }
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred while adding your class",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Unauthorized",
        text: "Please log in to select a class",
      }).then((result) => {
        if (result.isConfirmed) {

          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <Cover img={img} title="Approved Classes"></Cover>
      <div className="container mx-auto my-6">
        <div className="">

          <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menu.map(classItem =>
              // <ClassesPagesData
              //   key={classItem._id}
              //   classItem={classItem}
              // ></ClassesPagesData>

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
                    onClick={() => handleSelectClass(classItem)}
                    disabled={classItem.availableSeats === 0 || isAdmin}
                    className={`px-4 py-2 rounded-lg ${classItem.availableSeats === 0 || isAdmin ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
                      }`}
                  >
                    {classItem.availableSeats === 0 ? "No Seats Available" : "Select"}
                  </button>

                </div>
              </div>


            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
