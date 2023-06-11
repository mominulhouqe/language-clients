import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import 'tailwindcss/tailwind.css';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddAClass = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append('image', data.image[0]);

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;

          const { price, name, availableseats } = data;
          const newItem = {
            price: parseFloat(price),
            availableseats,
            name,
            image: imgURL,
            email: user.email,
            instructor:user.displayName
          };
          console.log(newItem);

          axiosSecure.post('/classes', newItem)
            .then((data) => {
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  icon: 'success',
                  title: 'Class added successfully',
                  showConfirmButton: false,
                  timer: 1500
                });
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Failed to add class. Please try again.',
                  confirmButtonText: 'OK'
                });
              }
            })
            .catch(() => {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while adding the class. Please try again.',
                confirmButtonText: 'OK'
              });
            });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to upload image. Please try again.',
            confirmButtonText: 'OK'
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while uploading the image. Please try again.',
          confirmButtonText: 'OK'
        });
      });
  };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
            <div className="mb-4">
                <label htmlFor="className" className="block text-gray-700 font-bold mb-2">
                    Class Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    {...register('name', { required: true })}
                />
                {errors.className && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="mb-4">
                <label htmlFor="classImage" className="block text-gray-700 font-bold mb-2">
                    Class Image
                </label>
                <div className="form-control w-full max-w-xs">
                    <input
                        type="file"
                        id="classImage"
                        className="file-input file-input-bordered w-full max-w-xs rounded"
                        {...register('image', { required: true })}
                    />
                    {errors.classImage && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
            </div>
            <div className="flex gap-4">
                <div className="mb-4">
                    <label htmlFor="instructorName" className="block text-gray-700 font-bold mb-2">
                        Instructor Name
                    </label>
                    <input
                        type="text"
                        id="instructorName"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        readOnly
                        defaultValue={user?.displayName}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="instructorEmail" className="block text-gray-700 font-bold mb-2">
                        Instructor Email
                    </label>
                    <input
                        type="email"
                        id="instructorEmail"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        readOnly
                        defaultValue={user?.email}
                    />
                </div>
            </div>
            <div className="flex gap-4">
                <div className="mb-4">
                    <label htmlFor="availableseats" className="block text-gray-700 font-bold mb-2">
                        Available Seats
                    </label>
                    <input
                        type="number"
                        id="availableseats"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        {...register('availableseats', { required: true })}
                    />
                    {errors.availableseats && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price</label>
                    <input
                        type="number"
                        id="price"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        {...register('price', { required: true })}
                    />
                    {errors.price && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add
            </button>
        </form>
    );
};

export default AddAClass;
