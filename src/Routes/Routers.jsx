import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import RegistrationForm from "../pages/RegisterForm/RegistrationForm";
import LoginForm from "../pages/Login/LoginForm";
import NotFounded from "../Components/NotFounded/NotFounded";
import Instructors from "../pages/Instractors/Instractors/Instructors";
import InstructorClasses from "../pages/Instractors/InstructorClasses/InstructorClasses";
import ClassesPage from "../pages/Class/ClassesPage/ClassesPage";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Myclass from "../pages/Dashboard/MyClass/Myclass";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";

import Enrollied from "../pages/Dashboard/MyClass/Enrollied";
import AddAClass from "../pages/Dashboard/Instructors/AddAClass";
import InstructorsClass from "../pages/Dashboard/Instructors/InstructorsClass";
import Payments from "../pages/Dashboard/PaymentCheckout/Payments";
import PaymentHistory from "../pages/Dashboard/MyClass/PaymentHistory";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFounded></NotFounded>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>

            },
            {
                path: 'instructors/:instructorId',
                element: <InstructorClasses></InstructorClasses>

            },

            {
                path: 'class',
                element: <ClassesPage></ClassesPage>
            },

            {
                path: 'login',
                element: <LoginForm />
            },
            {
                path: 'register',
                element: <RegistrationForm />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute> ,
        children:[
            {
                path:'usersHome',
                element:<UserHome></UserHome>
                
            },
            // normarl user route
            {
                path:'myclass',
                element:<Myclass></Myclass>
            },
         
            {
                path:'paymentHistory',
                element:<PaymentHistory></PaymentHistory>
            },
            {
                path:'enrollied',
                element:<Enrollied></Enrollied>
            },
            {
                path:'myclass/payment',
                element:<Payments></Payments>
            }
            ,
            // admin route
            {
                path:'adminhome',
                element:<AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
            },
            {
                path:'manageUsers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
            ,
            {
                path:'manageClasses',
                element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            // instructor route
            {
                path:'addAClass',
                element:<AddAClass></AddAClass>
            },
            {
                path:'instructorClass',
                element:<InstructorsClass></InstructorsClass>
            },
            
        ]
    },



])