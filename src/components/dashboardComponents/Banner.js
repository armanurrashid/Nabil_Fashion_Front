import LeftArrow from "svgs/leftArrow";
import sharee1 from "images/sharee1.png";
import sharee2 from "images/sharee2.jpg";
import sharee3 from "images/sharee3.jpg";
import 'flowbite';
import RightArrow from "svgs/rightArrow";
import UpcomingCampaigns from "./countDownCard";

const Banner = () => {
    return (
        <div className="mx-auto flex p-5" >
            <div id="default-carousel" className="relative w-full mx-5" data-carousel="slide" >
                <div className="relative h-[480px] overflow-hidden border rounded-3xl">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={sharee1} className=" block w-full" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={sharee2} className=" block w-full" alt="..." />
                    </div>
                    <div className="duration-700 ease-in-out" data-carousel-item="active">
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
                        <LeftArrow/>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>

                <button
                    type="button"
                    className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-10 w-10 -translate-y-1/2 px-2 cursor-pointer group"
                    data-carousel-next
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                       <RightArrow/>
                        <span className="sr-only">Next</span>
                    </span>
                </button>

            </div>
            <div>
                <UpcomingCampaigns />
            </div>
        </div>
    );
}

export default Banner;
