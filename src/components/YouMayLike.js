import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { likeData } from "data/youMayLikeData";
import MostPopular from "./mostPopular";

const YouMayLike = () => {
    return (
        <div className="container mx-auto my-8">
            <div className="mx-4 my-8">
                <p className="sm:text-[40px] text-[25px] opacity-70 ">Most Popular</p>
            </div>
            <div className="mt-4 sm:mx-4 mx-2">
                <MostPopular/>
            </div>
            {/* <div className="mt-4 sm:mx-4 mx-2">
                <Marquee speed={80} pauseOnHover={true}>
                    <div className="flex w-full gap-8 mb-1 mr-7">
                        {likeData?.length ? (
                            likeData?.map((item, index) => (
                                <Link
                                    key={index}
                                    href={`buy/${item?._id}`}
                                    className="relative bg-white shadow-md rounded-[10px] overflow-hidden hover:shadow-xl cursor-pointer min-w-[250px]"
                                >
                                    <div className="relative">
                                        <img
                                            src={item?.imgpath}
                                            alt={item?.name}
                                            className="transition-transform duration-1000 ease-in-out transform h-[242px] w-[300px] object-cover group-hover:scale-110 object-top"
                                        />
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-red-600">No Actions Available now </p>
                        )}
                    </div>
                </Marquee>
            </div> */}
        </div>
    )
}

export default YouMayLike;