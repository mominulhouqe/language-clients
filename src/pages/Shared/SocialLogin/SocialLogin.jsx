import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2';

const SocialLogin = () => {
  const { signInGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInGoogle()
      .then(result => {
        const loggedUser = result.user;
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: `Logged in as ${loggedUser.email}`,
        });
        console.log(loggedUser);
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
        });
        console.log(error.message);
      });
  };

  return (
    <div>
      <button
        className="w-full btn btn-outline btn-primary px-4 py-2 cursor-pointer"
        onClick={handleGoogleLogin}
      >
        <FaGoogle /> Social Login
      </button>
    </div>
  );
};

export default SocialLogin;
