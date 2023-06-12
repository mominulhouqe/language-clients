import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaHome, FaUsers, FaMoneyBill, FaSchool } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const [isAdminOrInstructor] = useAdmin();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

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
          {isAdminOrInstructor === 'admin' && (
            <>
              <li>
                <NavLink to="/">
                  <FaHome className="mr-2" />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageClasses">
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
          )}

          {isAdminOrInstructor === 'instructor' && (
            <li>
              <NavLink to="/">
                <FaBook className="mr-2" />
                Home
              </NavLink>
              <NavLink to="/dashboard/addAclass">
                <FaBook className="mr-2" />
                Add A Class
              </NavLink>
              <NavLink to="/dashboard/instructorClass">
                <FaBook className="mr-2" />
                My Classes
              </NavLink>
            </li>
          )}

          {isAdminOrInstructor === 'student' && (
            <>
              <li>
                <NavLink to="/">
                  <FaHome className="mr-2" />
                  Home
                </NavLink>
                <NavLink to="/dashboard/myclass">
                  <FaSchool className="mr-2" />
                  My Selected Class
                </NavLink>
                <NavLink to="/dashboard/enrollied">
                  <FaBook className="mr-2" />
                  My Enrolled Class
                </NavLink>
                <NavLink to="/dashboard/paymentHistory">
                  <FaMoneyBill className="mr-2" />
                  Payment History
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
