import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'


export const AuthContext = createContext();

const auth = getAuth(app)



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const userSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const userSignInWithProvider = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    const userSignOut = () => {
        localStorage.removeItem('accessToken')
        setLoading(true);
        return signOut(auth);
    }


    const userUpdateProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });

        return () => unSubscribe();

    }, []);





    const authInfo = {user, userSignIn, userSignUp, userSignOut, userSignInWithProvider, loading, setLoading, userUpdateProfile}




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;