import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaHome, FaUsers, FaMoneyBill } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdminOrInstructor] = useAdmin();

  return (
    <div className="drawer w-full lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-start">
        {/* Page content here */}
        <Outlet />
        <label htmlFor="my-drawer-2" className="btn mx-5 my-6 btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side drawer-end">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-sky-900 text-white">
          {/* Sidebar content here */}
          {isAdminOrInstructor === 'admin' ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome className="mr-2" />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageClass">
                  <FaBook className="mr-2" />
                  Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers">
                  <FaUsers className="mr-2" />
                  Manage Users
                </NavLink>
              </li>
            </>
          ) : null}
          {isAdminOrInstructor === 'instructor' ? (
            <li>
              <NavLink to="/dashboard/instructorPage">
                <FaBook className="mr-2" />
                Instructor Page
              </NavLink>
            </li>
          ) : null}
          {isAdminOrInstructor !== 'admin' && isAdminOrInstructor !== 'instructor' ? (
            <>
              <li>
                <NavLink to="/dashboard/studentPage">
                  <FaBook className="mr-2" />
                  Student Page
                </NavLink>
              </li>
              {/* Add additional links for other roles as needed */}
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
