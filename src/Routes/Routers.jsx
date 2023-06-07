import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import RegistrationForm from "../pages/RegisterForm/RegistrationForm";
import LoginForm from "../pages/Login/LoginForm";
import NotFounded from "../Components/NotFounded/NotFounded";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<NotFounded></NotFounded>,
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