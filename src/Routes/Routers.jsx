import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import RegistrationForm from "../pages/RegisterForm/RegistrationForm";
import LoginForm from "../pages/Login/LoginForm";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'login',
                element:<LoginForm />
            },
            {
                path:'register',
                element:<RegistrationForm />
            }
        ]
    }
])