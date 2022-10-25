import React, { createContext, useState } from 'react';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    
    const handleSignInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    
    const signinWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const signinWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const authInfo = { 
        user, 
        setUser,
        handleSignInWithGoogle, 
        signinWithGithub,
        signinWithFacebook,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;