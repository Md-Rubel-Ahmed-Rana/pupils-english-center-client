import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='container w-75 text-md-start  text-center  bg-success mx-auto d-md-flex gap-5 p-3 mt-3 rounded'>
            <div>
                <img style={{height: "200px", width: "200px", borderRadius: "20px"}} src={user?.photoURL} alt="" />
            </div>
            <div className='text-white mt-3'>
                <h4>{user?.displayName}</h4>
                <p className='m-1'>UserId: {user?.uid}</p>
                <p className='m-1'>Email: {user?.email ? user?.email : "Restricted"}</p>
                <p className='m-1'>Email Status: {user?.emailVerified ? "Verified" : "Not verified"}</p>
                <button className="btn btn-primary mt-4">Edit Profile</button>
            </div>
        </div>
    );
};

export default Profile;