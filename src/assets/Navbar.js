import logo from "images/Nabil Fashion.svg";
import Cart from "svgs/cart";
const Navbar = () => {
    return (
        // <div className=" flex gap-6 py-4 shadow">
        //     <div className="flex items-center flex-1 gap-4 md:gap-8 mx-5">
        //         <span className="md:w-[120px] w-[70px]">
        //             <img src={logo} className="block w-full h-[50px]" alt="logo" />
        //         </span>
        //     </div>
        //     <div className="hidden w-full px-4 md:flex">
        //         <div className="w-full">
        //             <div className=" max-w-[719px] relative">
        //                 <div className="flex w-full overflow-hidden rounded-md">
        //                     <div className="relative flex-1">
        //                         <input className="block w-full p-3 pl-4 outline-none bg-gray-200" placeholder="Search in Nabil Fashion" autocomplete="off" value="" />
        //                     </div>
        //                     <button className="gap-2 p-2 px-5 text-lg font-medium text-white bg-black">
        //                         Search
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="flex items-center gap-4 mx-5">
        //         <a className="relative border border-[#fff] md:hover:border md:hover:border-gray-200 rounded-md transition-colors md:hover:bg-gray-50 outline-1 outline-gray-500 p-1" href="/">
        //             <Cart />
        //             <span className="sr-only">Cart</span>
        //         </a>
        //     </div>
        // </div>

        <div>
            {/* Header Row */}
            {/* <div className="flex gap-6 xl:py-4 py-2 md:shadow px-5 items-center"> */}
            <div className="flex justify-between md:justify-start gap-6 xl:py-4 py-2 md:shadow px-5 items-center">

                {/* Logo */}
                <div className="mx-5">
                    <img src={logo} className="block w-full h-[50px]" alt="logo" />
                </div>

                {/* Search - Hidden below md */}
                <div className="searchDiv px-4 w-full hidden md:flex justify-center items-center">
                    <div className="xl:w-[719px] lg:w-[500px] md:w-[400px]">
                        <div className="flex w-full overflow-hidden rounded-md">
                            <div className="flex-1">
                                <input
                                    className="block w-full p-3 pl-4 outline-none bg-gray-200 xl:text-base text-sm"
                                    placeholder="Search in Nabil Fashion"
                                    autoComplete="off"
                                />
                            </div>
                            <button className="gap-2 p-2 px-5 text-lg font-medium text-white bg-black">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cart */}
                <div className="flex items-center gap-4 mx-5">
                    <a
                        className="relative border border-[#fff] md:hover:border md:hover:border-gray-200 rounded-md transition-colors md:hover:bg-black outline-1 outline-gray-500 p-1 hover:text-white"
                        href="/"
                    >
                        <Cart />
                        <span className="sr-only">Cart</span>
                    </a>
                </div>
            </div>

            {/* Search Row - Only shown below md */}
            <div className="md:hidden px-5 py-2 shadow">
                <div className="w-full">
                    <div className="flex w-full overflow-hidden rounded-md">
                        <div className="flex-1">
                            <input
                                className="block w-full p-3 pl-4 outline-none bg-gray-200 text-sm"
                                placeholder="Search in Nabil Fashion"
                                autoComplete="off"
                            />
                        </div>
                        <button className="gap-2 p-2 px-5 text-sm font-medium text-white bg-black">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>


        // <div className="flex gap-6 xl:py-4 py-2 shadow px-5">
        //     <div className="mx-5">
        //         <img src={logo} className="block w-full h-[50px]" alt="logo" />
        //     </div>
        //     <div className="searchDiv px-4 w-full hidden md:flex justify-center items-center">
        //             <div className="xl:w-[719px] lg:w-[500px] md:w-[400px]">
        //                 <div className="flex w-full overflow-hidden rounded-md">
        //                     <div className=" flex-1">
        //                         <input className="block w-full p-3  pl-4 outline-none bg-gray-200 xl:text-base text-sm" placeholder="Search in Nabil Fashion" autocomplete="off" value="" />
        //                     </div>
        //                     <button className="gap-2 p-2 px-5 text-lg font-medium text-white bg-black">
        //                         Search
        //                     </button>
        //                 </div>
        //         </div>
        //     </div>
        //     <div className="flex items-center gap-4 mx-5">
        //         <a className="relative border border-[#fff] md:hover:border md:hover:border-gray-200 rounded-md transition-colors md:hover:bg-gray-50 outline-1 outline-gray-500 p-1" href="/">
        //             <Cart />
        //             <span className="sr-only">Cart</span>
        //         </a>
        //     </div>
        // </div>
    );
}


export default Navbar;
