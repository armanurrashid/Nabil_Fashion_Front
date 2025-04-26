import sharee1 from "../../../src/images/sharee1.png";
import sharee2 from "../../../src/images/sharee2.jpg";
import sharee3 from "../../../src/images/sharee3.jpg";
import 'flowbite';

const Banner = () => {
    return (
        <div className=" mx-auto" >
            <div id="default-carousel" className="relative w-full" data-carousel="slide" >
                <div className="relative h-[675px] overflow-hidden">
                    <div className="duration-700 ease-in-out" data-carousel-item="active">
                        <img src={sharee1} className=" block w-full" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={sharee2} className=" block w-full" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={sharee3} className=" block w-full" alt="..." />
                    </div>
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" data-carousel-slide-to="2"></button>
                </div>

                <button
                    type="button"
                    className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-10 w-10 -translate-y-1/2 px-2 cursor-pointer group"
                    data-carousel-prev
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>

                <button
                    type="button"
                    className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-10 w-10 -translate-y-1/2 px-2 cursor-pointer group"
                    data-carousel-next
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>

            </div>
        </div>
    );
}

export default Banner;
