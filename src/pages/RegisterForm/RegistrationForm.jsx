import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateCurrentUser } from 'firebase/auth';
import Swal from 'sweetalert2';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updatedUserProfiles } = useContext(AuthContext);

  const onSubmit = (data) => {
    // Handle registration logic here
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const createdUser = result.user;

        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'You have successfully registered.',
        });

        navigate('/login');
        return updatedUserProfiles(auth.currentUser, {
          displayName: data.name,
          photoURL: data.photoURL,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.message,
        });
        console.log(error.message);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-12 rounded-xl shadow-2xl p-6 max-w-sm mx-auto"
    >
      <h1 className="font-bold text-2xl my-6">Please Register Here !!!</h1>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="photoUrl" className="block mb-2 font-medium">
          Photo URL
        </label>
        <input
          type="text"
          id="photoUrl"
          {...register('photoUrl')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex gap-3">
        <div className="mb-4 w-1/2">
          <label htmlFor="password" className="block mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            })}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
              errors.password ? 'focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">
              Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.
            </p>
          )}
        </div>
        <div className="mb-4 w-1/2">
          <label htmlFor="confirmPassword" className="block mb-2 font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: true,
              validate: (value) => value === document.getElementById('password').value,
            })}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
              errors.confirmPassword ? 'focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">Passwords do not match.</p>
          )}
        </div>
      </div>
      <div className="my-4">
        <Link to="/login" className="text-blue-500">Already have an account </Link>
      </div>

      {/* Social Login */}
      <div className="justify-between">
        <div className="mb-4">
          <input
            type="submit"
            value="Register"
            className="w-full px-4 py-2 btn btn-primary cursor-pointer"
          />
        </div>
        <div className="mb-4">
          <button
            className="w-full btn btn-outline btn-primary  px-4 py-2 cursor-pointer"
            onClick={() => console.log('Social login clicked')}
          >
            <FaGoogle /> Social Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
