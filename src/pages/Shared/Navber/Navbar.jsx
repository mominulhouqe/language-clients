import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaSignOutAlt } from 'react-icons/fa';
import Banner from '../../Home/Banner/Banner';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error =>{
      console.log(error.message);
    })
  }


  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/class">Classes</Link>
      </li>
      <li>
        <Link to="/dashboard/myclass">Dashboard </Link>
      </li>
      {user ? (
        <>
          <div className="flex justify-center mx-2 items-center">
            {user.photoURL && (
              <div className="relative">
                <img src={user.photoURL} alt="Profile" className="h-8 w-8 rounded-full" />
                {/* <span className="tooltip-bottom rounded  text-white py-1 px-2   ">
                  {user.displayName}
                </span> */}
              </div>
            )}
            <Link to="/login" onClick={handleLogOut} className="ms-5 btn-sm btn">
              <FaSignOutAlt></FaSignOutAlt> Logout
            </Link>
          </div>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-gray-800 text-white font-serif">
        <div className="navbar-start ">

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-gray-800 text-white font-serif rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <div className='flex justify-between items-center gap-10'>
            <img src="https://i.ibb.co/KwFsQVB/my-img1-1.jpg" className="w-10 h-10  rounded-full" alt="" />
            <a className="btn btn-ghost normal-case text-xl">FluentJourney</a>
          </div>

        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
