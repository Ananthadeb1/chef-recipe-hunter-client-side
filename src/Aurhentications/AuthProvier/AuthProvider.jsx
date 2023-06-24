import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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