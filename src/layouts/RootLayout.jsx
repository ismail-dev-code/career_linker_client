import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/Shared/NavBar';
import Footer from '../pages/Shared/Footer';

const RootLayout = () => {
    return (
        <>
        <nav className='max-w-6xl mx-auto'>

            <NavBar></NavBar>
        </nav>
           <Outlet></Outlet>
           <Footer></Footer>
        </>
    );
};

export default RootLayout;