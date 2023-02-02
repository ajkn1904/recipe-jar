import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Toaster/>
            <Header/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Main;