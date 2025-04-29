import { Link } from 'react-router-dom'
import QuickAddDrawer from './quickAddDrawer'
import { useState } from 'react';

const CardDesign = ({ likeData, title, slice }) => {
const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <div className='container mx-auto my-8'>
            <div className='flex justify-between sm:mx-4 mx-2 my-4'>
                <p className="lg:text-[40px] md:text-[30px] text-[25px] opacity-70 mx-4 md:mx-10  xl:mx-0">{title}</p>
                {title !== "Sub Category" && (
                    <a href="/subcategory" className="text-[#0088FF] text-sm font-bold flex items-center">
                        View More →
                    </a>
                )}
            </div>
            <div className="mt-4 ">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4 gap-2 mx-4 md:mx-10  xl:mx-0">
                    {likeData?.length ? (
                        likeData?.slice(0, slice).map((item, index) => (
                            <Link
                                key={index}
                                href={`buy/${item?._id}`}
                                className="relative bg-white shadow-md rounded-[10px] overflow-hidden hover:shadow-xl cursor-pointer  lg:mx-4 mx-2 my-2"
                            >
                                {/* <div className="relative">
                                    <img
                                        src={item?.imgpath}
                                        alt={item?.name}
                                        className="transition-transform duration-1000 ease-in-out transform lg:h-[340px] lg:w-[340px] md:h-[250px] md:w-[250px] h-[160px] w-[200px] object-cover group-hover:scale-110 object-top"
                                    />
                                </div> */}
                                <div className="relative group">
                                    {/* Image */}
                                    <img
                                        src={item?.imgpath}
                                        alt={item?.name}
                                        className="transition-transform duration-1000 ease-in-out transform lg:h-[340px] lg:w-[340px] md:h-[250px] md:w-[250px] h-[160px] w-[200px] object-cover group-hover:scale-105 object-top"
                                    />
                                    <div className="absolute top-2 right-2">
                                        <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[#FF4D4F] text-white font-bold text-sm z-10">
                                            10%
                                            <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-white animate-spin-slow z-0" />
                                        </div>
                                    </div>
                                </div>

                                <div className="px-3 pb-2 pt-3">
                                    <div className="truncate text-[#0088FF] font-inter mx-2 md:text-base sm:text-sm text-xs">
                                        In Stock
                                    </div>
                                    <div className="truncate text-[#222836] opacity-60 font-medium font-inter mx-2 lg:text-xl sm:text-base text-sm">
                                        {item?.title}
                                    </div>

                                    <div className="py-1">
                                        <div className=" font-semibold mx-2 opacity-70 lg:text-2xl md:text-base sm:text-sm text-xs">
                                            <del>{item?.price} TK</del>
                                        </div>
                                        <div className=" font-semibold mx-2 opacity-70 lg:text-lg md:text-base sm:text-sm text-xs">
                                            {item?.price} TK
                                        </div>
                                    </div>
                                    <div className='my-1'>
                                        <button type="button" onClick={() => setDrawerOpen(true)} class="w-full text-white bg-gray-600 hover:bg-gray-900  font-medium rounded-lg md:text-sm text-xs px-5 md:py-3 py-2 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700">Quick Add</button>
                                    </div>
                                    <QuickAddDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
                                </div>
                                
                            </Link>
                        ))
                    ) : (
                        <p className="text-red-600">No Data Available now </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardDesign