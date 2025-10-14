import { createContext, useEffect, useState } from "react";
import app from "../FirebaseConfig/FirebaseConfig";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app); // Assume getAuth is imported from your auth library
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    //user loading state
    const [loading, setLoading] = useState(true);

    console.log(loading, user);



    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        //console.log("user trying to logout");
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        //console.log("user trying to logout");
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
    };
    return (
        <div>
            <AuthContext value={authData}>
                {children}
            </AuthContext>
        </div>
    )
}
export default AuthProvider;