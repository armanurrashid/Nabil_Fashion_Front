// import LeftArrow from "svgs/leftArrow";
import sharee1 from "images/sharee1.png";
import sharee2 from "images/sharee2.jpg";
import sharee3 from "images/sharee3.jpg";
import 'flowbite';
import { useEffect, useState } from "react";
// import RightArrow from "svgs/rightArrow";
// import UpcomingCampaigns from "./countDownCard";

const Banner = () => {
    const [initialDays, setInitialDays] = useState(2);
    const [initialHours, setInitialHours] = useState(0);
    const [initialMinutes, setInitialMinutes] = useState(0);
    const [initialSeconds, setInitialSeconds] = useState(0);
    const [timeLeft, setTimeLeft] = useState(
        initialDays * 86400 + initialHours * 3600 + initialMinutes * 60 + initialSeconds
    );

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (totalSeconds) => {
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = formatTime(timeLeft);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 items-center my-5 md:mx-10 xl:mx-0">
                <div class="lg:col-span-2 rounded-xl overflow-hidden 2xl:mx-4 xl:mx-1 mx-4">
                    <div id="default-carousel" className="relative w-full " data-carousel="slide" >
                        <div className="relative xl:h-[450px] md:h-[350px] h-[200px] overflow-hidden border rounded-3xl">
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={sharee1} className=" block w-full h-full" alt="..." />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={sharee2} className=" block w-full h-full" alt="..." />
                            </div>
                            <div className="duration-700 ease-in-out" data-carousel-item="active">
                                <img src={sharee3} className=" block w-full h-full" alt="..." />
                            </div>
                        </div>
                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button type="button" className="w-3 h-3 rounded-full" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" data-carousel-slide-to="1"></button>
                            <button type="button" className="w-3 h-3 rounded-full" data-carousel-slide-to="2"></button>
                        </div>
                    </div>
                </div>

                <div class="p-2 md:p-4 rounded-xl bg-gray-100 xl:w-[450px] lg:max-w-[910px] md:max-w-[665px] xl:aspect-square 2xl:mx-4 xl:mx-1 lg:ml-4 md:ml-4 mx-4">
                    <h3 class="text-2xl font-bold mb-4 px-4">Upcoming Campaigns</h3>

                    <ul class="gap-4 flex lg:flex-col mt-4 hide-scrollbar overflow-y-auto lg:max-h-[217px] xl:max-h-[300px] lg:mx-4">
                        <li>
                            <div class="h-full flex p-4 bg-white rounded-xl min-w-[248px]">

                                <div class="flex-1 items-center justify-center">
                                    <div class="bg-gradient-to-tr from-red-500 via-yellow-400 to-yellow-300 text-transparent bg-clip-text text-center ">
                                        <div class="text-0">
                                            <img alt="happy hour"
                                                loading="lazy"
                                                width="320"
                                                height="121"
                                                decoding="async"
                                                class="mx-auto transition-opacity duration-300 ease-in-out w-full"
                                                src="https://evaly.com.bd/web-static/images/fashion.png" />
                                        </div>
                                        <p class="mb-1 text-base font-semibold">Campaign starts in</p>
                                    </div>
                                </div>

                                <div className="flex-1 h-full px-4 py-2">
                                    <div className="grid grid-cols-2 gap-2 items-center">
                                        <p className="w-full py-1.5 md:py-4 text-base md:text-lg px-1 text-center font-bold bg-[#3D444E] rounded text-white">
                                            {days}d
                                        </p>
                                        <p className="w-full py-1.5 md:py-4 text-base md:text-lg px-1 text-center font-bold bg-[#3D444E] rounded text-white">
                                            {hours}h
                                        </p>
                                        <p className="w-full py-1.5 md:py-4 text-base md:text-lg px-1 text-center font-bold bg-[#3D444E] rounded text-white">
                                            {minutes}m
                                        </p>
                                        <p className="w-full py-1.5 md:py-4 text-base md:text-lg px-1 text-center font-bold bg-[#3D444E] rounded text-white">
                                            {seconds}s
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="h-full flex p-4 bg-white rounded-xl min-w-[248px]">

                                <div class="flex-1 items-center justify-center">
                                    <div class="bg-gradient-to-tr from-red-500 via-yellow-400 to-yellow-300 text-transparent bg-clip-text text-center ">
                                        <div class="text-0">
                                            <img alt="happy hour"
                                                loading="lazy"
                                                width="320"
                                                height="121"
                                                decoding="async"
                                                class="mx-auto transition-opacity duration-300 ease-in-out w-full"
                                                src="https://evaly.com.bd/web-static/images/fashion.png" />
                                        </div>
                                        <p class="mb-1 text-base font-semibold">Campaign starts in</p>
                                    </div>
                                </div>

                                <div className="flex-1 h-full px-4 py-2">
                                    <div className="grid grid-cols-2 gap-2 items-center">
                                        <p className="w-full py-1.5 md:py-4 text-base md:text-lg px-1 text-center font-bold bg-[#3D444E] rounded text-white">
                                            {days}d
                                        </p>
                                        <p className="w-full py-1.5 md:py-4 text-base md:text-lg px-1 text-center font-bold bg-[#3D444E] rounded text-white">
                                            {hours}h
                                        </p>
                                        <p className="w-full py-1.5 md:py-4 text-base md:text-lg px-1 text-center font-bold bg-[#3D444E] rounded text-white">
                                            {minutes}m
                                        </p>
                                        <p className="w-full py-1.5 md:py-4 text-base md:text-lg px-1 text-center font-bold bg-[#3D444E] rounded text-white">
                                            {seconds}s
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Banner;
