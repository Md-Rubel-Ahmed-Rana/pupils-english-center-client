import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../images/pupils-logo.jpg";
import "./Header.css"

const Header = () => {
    return (
        <div className='md:flex md:justify-between justify-center items-center bg-gray-400 md:px-20 px-5 py-1'>
            <div className='header flex items-center gap-3'>
                <img src={Logo} alt="" />
                <h4>Pupils English Center</h4>
            </div>
            <div className='flex gap-2'>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/fqa">FQA</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink>Dark</NavLink>
            </div>
        </div>
    );
};

export default Header;