import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
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
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }}  replace></Navigate>


    return (
        <div>

        </div>

    );
};

export default PrivateRoute;