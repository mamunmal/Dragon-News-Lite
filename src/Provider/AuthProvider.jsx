import { createContext, useEffect, useState } from "react";
import app from "../FirebaseConfig/FirebaseConfig";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app); // Assume getAuth is imported from your auth library
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    console.log("Auth provider", user);



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
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
        });
        return () => unsubscribe();
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn
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