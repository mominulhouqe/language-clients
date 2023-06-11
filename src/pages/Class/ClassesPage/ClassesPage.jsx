import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import { AuthContext } from "../../../provider/AuthProvider";
import "aos/dist/aos.css";
import AOS from "aos";
import Cover from "../../Shared/Cover/Cover";
import img from '../../../assets/img4.jpg'
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";



const ClassesPage = ({ isAdmin }) => {
  
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [menu] = useMenu()
  const {refetch} = useCart();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);


  const handleSelectClass = (classItem) => {
    if (user && user.email) {
      const selectedId = {
        menuItemId: classItem._id,
        name:classItem.instructor,
      
        image: classItem.image,
        title:classItem.title,
        students:classItem.students,
        availableseats:classItem.availableseats,
        price:classItem.price,
        email: user.email
      };
   

      fetch("http://localhost:5000/carts", {
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
            refetch(); 
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

          navigate("/login", { state: { from: location } } );
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
          
              <div
                key={classItem._id}
                className={`bg-white rounded-lg shadow-lg ${classItem.
                  availableseats === 0 ? "bg-red-100" : ""
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
                  <p className="text-gray-600 mb-2">Available Seats: {classItem.availableseats}</p>
                  <p className="text-gray-600 mb-4">Price: ${classItem.price}</p>
                  <button
                    onClick={() => handleSelectClass(classItem)}
                    disabled={classItem.availableseats === 0 || isAdmin}
                    className={`px-4 py-2 rounded-lg ${classItem.availableseats === 0 || isAdmin ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
                      }`}
                  >
                    {classItem.availableseats === 0 ? "No Seats Available" : "Select"}
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


/* 








[
  {
    "image": "https://i.ibb.co/sKK3Mdj/my-img1.webp",
    "name": "Spanish for Beginners",
    "instructor": "Maria Rodriguez",
    "availableseats": 20,
    "price": 49.99
  },
  {
    "image": "https://i.ibb.co/xM8dQ4v/my-img4.webp",
    "name": "French Conversation",
    "instructor": "Jean-Claude Leblanc",
    "availableseats": 15,
    "price": 59.99
  },
  {
    "image": "https://i.ibb.co/fkjL6D8/my-img6.webp",
    "name": "German Grammar Mastery",
    "instructor": "Hans Müller",
    "availableseats": 10,
    "price": 69.99
  },
  {
    "image": "https://i.ibb.co/ygZytJk/my-img7.jpg",
    "name": "Italian Pronunciation Workshop",
    "instructor": "Giulia Rossi",
    "availableseats": 12,
    "price": 39.99
  },
  {
    "image": "https://i.ibb.co/QfGvRkb/my-imgf06.webp",
    "name": "Chinese Characters Simplified",
    "instructor": "Li Wei",
    "availableseats": 8,
    "price": 79.99
  },
  {
    "image": "https://i.ibb.co/XtN07RR/my-imgf08.webp",
    "name": "Japanese Kanji Mastery",
    "instructor": "Takeshi Nakamura",
    "availableseats": 18,
    "price": 89.99
  }
]

*/