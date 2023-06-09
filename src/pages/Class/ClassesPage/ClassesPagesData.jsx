import React, { useContext, useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';


const ClassesPagesData = ({ classItem, isAdmin }) => {

    const { _id, availableSeats, image, name, instructor, price, } = classItem

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            mirror: false,
        });
    }, []);



    const handleSelectClass = (_id) => {
        console.log(_id);

        if (user && user.email) {
            const selectedId = {
                menuItemId: _id,
                name,
                image,
                price,
                email: user.email
            };
            console.log(selectedId);

            fetch("http://localhost:5000/carts", {
                method: "PATCH",
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

            <div
                key={_id}
                className={`bg-white rounded-lg shadow-lg ${availableSeats === 0 ? "bg-red-100" : ""
                    }`}
                data-aos="fade-bottom"
            >
                <img
                    src={image
                    }
                    alt={name}
                    className="w-full h-80 rounded-t-lg"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{name}</h3>
                    <p className="text-gray-600 mb-2">Instructor: {instructor}</p>
                    <p className="text-gray-600 mb-2">Available Seats: {availableSeats}</p>
                    <p className="text-gray-600 mb-4">Price: ${price}</p>
                    <button
                        onClick={() => handleSelectClass(_id)}
                        disabled={availableSeats === 0 || isAdmin}
                        className={`px-4 py-2 rounded-lg ${availableSeats === 0 || isAdmin ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
                            }`}
                    >
                        {availableSeats === 0 ? "No Seats Available" : "Select"}
                    </button>

                </div>
            </div>

        </div>
    );
};

export default ClassesPagesData;