
const Navbar = () => {
    return (
        <div class="bg-gray-100">
            <nav class="bg-white shadow p-4">
                <div class="container mx-auto flex items-center justify-between">
                    <div class="text-xl font-bold text-gray-800 mr-5 italic">
                        Ghomta Fashion
                    </div>
                    <div class="flex-grow max-w-xs ml-2">
                        <div class="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                class="w-full pl-4 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                                🔍
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;
