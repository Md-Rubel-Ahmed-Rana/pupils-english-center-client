import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import "./Main.css"

const Main = () => {
    return (
        <div>
             <Header />
            <div className='main-body'>
                <div className='bg-purple-300'>
                    <SideBar />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Main;