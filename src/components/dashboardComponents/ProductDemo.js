import { Link } from 'react-router-dom'
import { likeData } from "../../../src/data/youMayLikeData";

const ProductDemo = () => {
    return (
        <div className='container mx-auto my-8'>
            <div className="sm:mx-4 mx-2 my-4">
                <p className="lg:text-[40px] md:text-[30px] text-[25px] opacity-70 mx-4 md:mx-10  xl:mx-0">NABIL FASHION</p>
            </div>
            <div className="mt-4 ">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4 gap-2 mx-4 md:mx-10  xl:mx-0">
                    {likeData?.length ? (
                        likeData?.map((item, index) => (
                            <Link
                                key={index}
                                href={`buy/${item?._id}`}
                                className="relative bg-white shadow-md rounded-[10px] overflow-hidden hover:shadow-xl cursor-pointer  lg:mx-4 mx-2 my-2"
                            >
                                <div className="relative">
                                    <img
                                        src={item?.imgpath}
                                        alt={item?.name}
                                        className="transition-transform duration-1000 ease-in-out transform lg:h-[340px] lg:w-[340px] md:h-[250px] md:w-[250px] h-[160px] w-[200px] object-cover group-hover:scale-110 object-top"
                                    />
                                </div>

                                <div className="px-3 pb-2 pt-3">
                                    <div className="truncate text-[#0088FF] font-inter mx-2 md:text-base sm:text-sm text-xs">
                                        In Stock
                                    </div>
                                    <div className="truncate text-[#222836] opacity-60 font-medium font-inter mx-2 lg:text-xl sm:text-base text-sm">
                                        {item?.title}
                                    </div>

                                    <div className="flex justify-between py-1">
                                        <div className=" font-semibold mx-2 opacity-70 lg:text-lg md:text-base sm:text-sm text-xs">
                                            {item?.price} TK
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-red-600">No Actions Available now </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductDemo