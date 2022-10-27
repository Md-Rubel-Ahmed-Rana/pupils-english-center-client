import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Logo from "../../images/pupils-logo.jpg";
import "./Header.css"

const Header = () => {
    const { user, userLogOut, setDark, dark } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    

    return (
        <div className={"d-md-flex bg-info justify-content-between md-justify-center align-items-center   px-md-5 px-2 py-1"}>
            <div className='header d-flex align-items-center gap-3'>
                <img className='border' src={Logo} alt="" />
                <h5>Pupils English Center</h5>
            </div>
            <div className='header-menu d-flex gap-md-2 gap-1 flex-wrap position-relative'>
                <NavLink  to="/home" className={({ isActive }) => { return isActive ? "active text-danger" : "text-decoration-none text-dark" }}>Home</NavLink>
                <NavLink to="/courses" className={({ isActive }) => { return isActive ? "active text-danger" : "text-decoration-none text-dark" }}>Courses</NavLink>
                <NavLink
                to="/fqa" className={({ isActive }) => {return isActive ? "active text-danger" :  "text-decoration-none text-dark"}}
                >FAQ</NavLink>
                <NavLink to="/blogs" className={({ isActive }) => { return isActive ? "active text-danger" : "text-decoration-none text-dark" }}>Blogs</NavLink>

                {
                    user?.uid  ?
                        <>
                            <Link to="profile">
                                <img onMouseOver={() => setShow(!show)} title="Md Rubel Ahmed Rana" style={{ height: "35px", borderRadius: "50%", width: "35px" }} src={user?.photoURL} alt="" />
                            </Link>
                            <button onClick={userLogOut} className='btn btn-danger border py-0'>LogOut</button>
                        </>
                    : <NavLink to="/login" className="text-decoration-none text-dark">Login</NavLink>
                }

                <button onClick={() => setDark(!dark)} className="btn btn-dark py-0">{dark ? "Light" :  "Dark" }</button>

                <p className={`position-absolute top-100 bg-success text-white rounded py-1 px-2 start-50 m-0 ${show ? "d-block" : "d-none"}`}>{user?.displayName}</p>
            </div>
        </div>
    );
};

export default Header;