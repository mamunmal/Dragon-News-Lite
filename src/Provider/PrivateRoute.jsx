import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading";


const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    //user loading thakle loading component ta dekhabe
    const location = useLocation();
    console.log("private route", location);

    if(loading){
        return <Loading></Loading>
    }
    //if-> user thake return children
    if (user && user?.email) {
        return children;
    }
    //user na thake-> login page e niye jabe
    return <Navigate state={location.pathname} to="/auth/login">Please login to view details</Navigate>;

};

export default PrivateRoute;