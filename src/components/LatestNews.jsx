import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-5 bg-base-200 ">
            <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
            <Marquee pauseOnHover={true}
                gradient={true}
                gradientColor={[255, 255, 255]}
                speed={60}
                direction="left" 
                className="flex gap-5">
                <p className="font-bold">Lorem ipsum dolor sit amet consectetur
                    accusantium ipsam?
                </p>
                <p className="font-bold">Lorem ipsum dolor sit amet consectetur
                    accusantium ipsam?
                </p>
                <p className="font-bold">Lorem ipsum dolor sit amet consectetur
                    accusantium ipsam?
                </p>
            </Marquee>
        </div>
    )
}
export default LatestNews;