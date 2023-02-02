import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Toaster/>
            <Header/>
            <Outlet/>
            
        </div>
    );
};

export default Main;