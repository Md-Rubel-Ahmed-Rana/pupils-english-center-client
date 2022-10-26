import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [currentCourseInfo, setCurrentCourseInfo] = useState({})
    const [loading, isLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    
    const handleSignInWithGoogle = () => {
        isLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    
    const signinWithGithub = () => {
        isLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const signinWithFacebook = () => {
        isLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const createUser = (email, password) => {
        isLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailAndPassword = (email, password) => {
        isLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        isLoading(true)
        return updateProfile(auth.currentUser, profile)
    }


    const userLogOut = () => {
        isLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            isLoading(false)
        })

        return () => {
            unsubscribe()
        }

    }, [])

    const authInfo = { 
        user,
        createUser,
        setUser,
        loading,
        handleSignInWithGoogle, 
        signinWithGithub,
        signinWithFacebook,
        loginWithEmailAndPassword,
        updateUserProfile,
        userLogOut,
        setCurrentCourseInfo,
        currentCourseInfo
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;