import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../Pages/Loading";


const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    if(loading){
        return <Loading></Loading>
    }
    //if-> user thake return children
    if (user && user?.email) {
        return children;
    }
    //user na thake-> login page e niye jabe
    return <Navigate to="/auth/login">Please login to view details</Navigate>;

};

export default PrivateRoute;