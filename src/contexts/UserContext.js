import React, { createContext, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    
    const handleSignInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    
    const authInfo = { user, setUser,  handleSignInWithGoogle }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;