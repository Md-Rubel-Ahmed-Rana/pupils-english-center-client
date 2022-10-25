import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
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

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { 
        user,
        createUser,
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