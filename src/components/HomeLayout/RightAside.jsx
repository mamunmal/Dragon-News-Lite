import FindUs from "../FindUs";
import SocialLogin from "./SocialLogin";

const RightAside = () => {
    return(
        <div className="space-x-5">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    )
}
export default RightAside;