import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Logo from "../../images/pupils-logo.jpg";
import "./Header.css"

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [dark, setDark] = useState(false)
    return (
        <div className='d-md-flex justify-content-between md-justify-center align-items-center bg-info px-5 py-1'>
            <div className='header d-flex align-items-center gap-3'>
                <img src={Logo} alt="" />
                <h5>Pupils English Center</h5>
            </div>
            <div className='d-flex gap-2'>
                <NavLink to="/home" className="text-decoration-none text-dark">Home</NavLink>
                <NavLink to="/courses" className="text-decoration-none text-dark">Courses</NavLink>
                <NavLink to="/fqa" className="text-decoration-none text-dark">FQA</NavLink>
                <NavLink to="/blogs" className="text-decoration-none text-dark">Blogs</NavLink>

                {
                    user?.uid ?
                        <>
                            
                            <img title="Md Rubel Ahmed Rana" style={{ height: "35px", borderRadius: "50%", width: "35px" }} src={user?.photoURL} alt="" />
                            <button onClick={userLogOut} className='btn btn-danger border py-0'>LogOut</button>
                        </>
                    : <NavLink to="/login" className="text-decoration-none text-dark">Login</NavLink>
                }

                <button onClick={() => setDark(!dark)} className="btn btn-dark py-0">{dark ? "Dark" : "Light" }</button>
            </div>
        </div>
    );
};

export default Header;