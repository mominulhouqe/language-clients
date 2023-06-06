import React from 'react';
import Navbar from '../pages/Shared/Navber/Navbar';
import {Outlet} from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;