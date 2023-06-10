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
        element: <Dashboard />,
        children:[
            {
                path:'usersHome',
                element:<UserHome></UserHome>
                
            },
            {
                path:'myclass',
                element:<Myclass></Myclass>
            },
            {
                path:'adminhome',
                element:<AdminDashboard></AdminDashboard>
            },
            {
                path:'manageUsers',
                element:<AllUsers></AllUsers>
            }
        ]
    },



])