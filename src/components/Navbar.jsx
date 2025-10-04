import { NavLink } from "react-router";
import user from '../assets/user.png'
import { Link } from "react-router";
const Navbar = () => {
    return(
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="nav flex gap-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img src={user} alt="" />
                <Link to="/auth/login" className="btn btn-primary px-10">Login</Link>
            </div>
        </div>
    )
}
export default Navbar;