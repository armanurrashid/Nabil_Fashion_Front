import React from 'react'
import { Link } from 'react-router-dom'

const CardDesign = ({ likeData, title }) => {
    return (
        <div className='container mx-auto my-8'>
            <div className='flex justify-between mx-4 my-8'>
                <p className="sm:text-[35px] text-[25px] font-semibold ">{title}</p>
                <a href="/" className="text-[#0088FF] text-sm font-bold flex items-center">
                    View More →
                </a>
            </div>

            <div className="mt-4 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-10 xl:mx-0">
                    {likeData?.length ? (
                        likeData?.slice(0, 10).map((item, index) => (
                            <Link
                                key={index}
                                href={`buy/${item?._id}`}
                                className="relative bg-white shadow-md rounded-[10px] overflow-hidden hover:shadow-xl cursor-pointer min-w-[250px] mx-4"
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
            </div>
        </div>
    )
}

export default CardDesign