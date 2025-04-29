import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import shal from "images/shal.jpg";

const products = [
    {
        id: 1,
        name: "Kashmeri Shal",
        price: 310.00,
        image: shal,
        quantity: 1,
    },
    {
        id: 2,
        name: "Kashmeri Shal",
        price: 310.00,
        image: shal,
        quantity: 1,
    },
    {
        id: 3,
        name: "Kashmeri Shal",
        price: 310.00,
        image: shal,
        quantity: 1,
    },
    {
        id: 4,
        name: "Kashmeri Shal",
        price: 310.00,
        image: shal,
        quantity: 1,
    },
    {
        id: 5,
        name: "Kashmeri Shal",
        price: 310.00,
        image: shal,
        quantity: 1,
    },
    {
        id: 6,
        name: "Kashmeri Shal",
        price: 310.00,
        image: shal,
        quantity: 1,
    },
    {
        id: 7,
        name: "Kashmeri Shal",
        price: 310.00,
        image: shal,
        quantity: 1,
    }
];

const QuickAddDrawer = ({ isOpen, onClose }) => {
    return (
        <div>
            {isOpen && (
                <div
                    className="fixed inset-0  bg-opacity-40 z-30"
                    onClick={onClose}
                ></div>
            )}

            <div
                className={`fixed top-0 right-0 z-40 h-screen md:w-96 w-64 bg-white transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 sticky top-0 bg-white z-10">
                    <h2 className="text-base md:text-lg font-bold text-black uppercase">Shopping Cart</h2>
                    <button onClick={onClose} className="text-black text-2xl hover:text-red-500">
                        ✖
                    </button>
                </div>

                {/* Scrollable Product List */}
                <div className="overflow-y-auto flex-1 px-4 pb-32 space-y-4">
                    {products.map((item) => (
                        <div key={item.id} className="flex gap-3 mt-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover border"
                            />
                            <div className="flex-1">
                                <p className="text-sm md:text-base font-medium">{item.name}</p>
                                <p className="font-semibold mt-1 text-sm md:text-base">Tk {item.price.toFixed(2)}</p>
                                <div className="flex items-center mt-2 gap-2">
                                    <button className="px-2 py-1 bg-gray-200 rounded">
                                        <FaMinus size={12} />
                                    </button>
                                    <span className="px-2">{item.quantity}</span>
                                    <button className="px-2 py-1 bg-gray-200 rounded">
                                        <FaPlus size={12} />
                                    </button>
                                    <button className="ml-2 text-sm underline text-gray-600">Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer (Fixed at Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t ">
                    <div className="flex justify-between text-sm font-medium mb-3">
                        <span>Subtotal</span>
                        <span className="font-bold">Tk {(products.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded">
                        🛒 অর্ডার করুন
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuickAddDrawer;
