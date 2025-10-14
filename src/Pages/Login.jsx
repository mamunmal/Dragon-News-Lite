import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const [error, setError] = useState("");
    const { signIn } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    console.log("login page", location);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password});
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                //user data save korte hobe context 
                navigate(`${location.state? location.state : '/'}`);
                alert("User has been logged in successfully");
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
                //alert(errorMessage);
            })  
        // Call your login function here
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="text-center text-2xl font-semibold py-5">Login Your Account!</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/*Email */}
                        <label className="label">Email</label>
                        <input
                         name="email" 
                         type="email" 
                         className="input" 
                         placeholder="Email"
                            required 
                         />
                        {/*Password*/}
                        <label className="label">Password</label>
                        <input
                         name="password" 
                         type="password" 
                         className="input" 
                         placeholder="Password"
                         required
                         />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {error && <p className="text-red-400 text-xs">{error}</p>}
                        <button type="submit" className="btn btn-neutral mt-4">Login</button>
                        <p className=" font-semibold text-center pt-5">
                            Don't have an account?{""} <Link to="/auth/register" className="text-secondary">Register
                            </Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;
