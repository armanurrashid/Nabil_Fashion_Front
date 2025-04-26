import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { likeData } from "../../src/data/youMayLikeData";

const YouMayLike = () => {
    return (
        <div className="container mx-auto my-8">
            <div className="mx-4 my-8">
                <p className="sm:text-[40px] text-[25px] font-bold ">YOU MAY LIKE</p>
            </div>
            <div className="mt-4 sm:mx-4 mx-2">
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
                                            className="transition-transform duration-1000 ease-in-out transform h-[242px] w-[380px] object-cover group-hover:scale-110 object-top"
                                        />
                                    </div>

                                    <div className="px-3 pb-4 pt-3">
                                        <div className="truncate text-[#2D2D2D] font-medium font-inter mx-2">
                                            {item?.title}
                                        </div>

                                        <div className="flex justify-between py-2">
                                            <div className="text-sm text-[#0088FF] font-bold mx-2">
                                                {item?.Currency}{" "}
                                                <span className="mx-1">{item?.price}</span>
                                            </div>
                                            <div className="flex items-center">
                                                {/* <div className="mx-2">
                          <Image
                            src={item?.profilePicture}
                            alt="Avatar"
                            className="w-5 h-5 rounded-full"
                            width={24}
                            height={24}
                          />
                        </div> */}
                                                <div>
                                                    <p className="font-inter font-semibold text-xs text-[#6C6C6C]">
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-red-600">No Actions Available now </p>
                        )}
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default YouMayLike;