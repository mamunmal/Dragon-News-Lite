import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: "John Doe",
        email: "john@doe.com"
    });
    const authData = {
        user,
        setUser,
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