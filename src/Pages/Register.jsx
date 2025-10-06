import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const { createUser, setUser } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        //console.log("added this handler", e.target);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photo, email, password});
        createUser(email, password)
            .then(result => {
                const user = result.user;
                //console.log(user);
                //user data save korte hobe context a
                setUser(user);
                alert("User has been created successfully");
            })
            .catch(error => {
                const errorMessage = error.message;
                alert(errorMessage);
            })
        //form.reset();
    }
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className="text-center text-2xl font-semibold py-5">Register Your Account!</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            {/*Name*/}
                            <label className="label">Name</label>
                            <input
                                name="name"
                                type="text"
                                className="input"
                                placeholder="Name"
                                required
                            />
                            {/*Photo URL*/}
                            <label className="label">Photo URL</label>
                            <input
                                name="photo"
                                type="text"
                                className="input"
                                placeholder="Photo URL"
                                required
                            />
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
                            <button type="submit" className="btn btn-neutral mt-4">Register</button>
                            <p className=" font-semibold text-center pt-5">
                                Already have an account? {""}
                                <Link to="/auth/login" className="text-secondary">
                                    Login
                                </Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
