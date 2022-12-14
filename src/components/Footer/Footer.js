import React, { useContext } from 'react';
import "./Footer.css"
import { FaFacebook, 
        FaYoutube,  
        FaLinkedinIn,
        FaGithub,
        FaMapMarkerAlt,
        FaEnvelope,
        FaPhoneAlt
        } from "react-icons/fa";
import { AuthContext } from '../../contexts/UserContext';



const Footer = () => {
    const { dark } = useContext(AuthContext)
    return (
        <div className={`p-4 d-md-flex justify-content-center gap-5 ${dark ? "bg-dark text-white border-top" : " make-light"}`}>
            <div>
                <h5>Contact Details</h5>
                <p>Websile: https://pupils-english-center.web.app/</p>
                <p> <FaMapMarkerAlt />  Office: Level-10, 74, Karim Hall, Mothijeel, Dhaka.</p>
                <p><FaEnvelope /> Official:<small>mdrubelahmedrana521@gmail.com</small> </p>
                <p><FaPhoneAlt /> Helpline: 01758-049882</p>
            </div>
            <div>
                <h5>Social Links</h5>
                <div>
                    <div>
                        <p className='m-0'>Blog</p>
                        <p className='m-0'>Success</p>
                        <p className='m-0'>About us</p>
                        <p className='m-0'>Terms and Conditions</p>
                        <p className='m-0'>Privacy & App Privacy Policy</p>
                    </div>
                    <ul className='d-flex gap-3 list-unstyled'>
                        <li className='rounded-circle fs-1'> <FaFacebook /> </li>
                        <li className='rounded-circle fs-1'> <FaYoutube /> </li>
                        <li className='rounded-circle fs-1'> <FaLinkedinIn /> </li>
                        <li className='rounded-circle fs-1'> <FaGithub /> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;