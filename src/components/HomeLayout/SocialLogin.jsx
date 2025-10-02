import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";

const SocialLogin = () =>{
    return(
        <div>
            <h2 className="font-bold mb-5">Login With</h2>
            <div className="space-y-4">
                <button className="btn btn-outline btn-secondary w-full"><FcGoogle size={24}/>Login With Google</button>
                <button className="btn btn-outline btn-primary w-full"><RxGithubLogo size={24}/>Login With Github</button>
            </div>
        </div>
    )
}
export default SocialLogin;