import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";


export const AuthContext = createContext(app);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

     // email password signup 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin with email password
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // user observe 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => unsubscribe();

    }, []);

    const authInfo={
        logIn,
        createUser,
        logOut,
        user,
        googleSignIn,
        loading,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;