import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-bold mb-5">Find Us On</h2>
            <div className="">
                <div className="join join-vertical w-full">
                    <button className="btn  bg-base-100 justify-start join-item"><FaFacebook></FaFacebook>Facebook</button>
                    <button className="btn  bg-base-100 justify-start join-item"><BsTwitterX></BsTwitterX> Twitter</button>
                    <button className="btn  bg-base-100 justify-start join-item"><FaInstagram></FaInstagram> Instagram</button>
                </div>
            </div>
        </div>
    )
}
export default FindUs;