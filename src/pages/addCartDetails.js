import FooterSection from 'assets/Footer';
import Navbar from 'assets/Navbar';
import React from 'react';
import shal from "images/shal.jpg";

const cartItems = [
  {
    id: 1,
    name: "Egyptian Medjool Medium 1kg",
    price: 1900,
    quantity: 1,
    image: shal,
  },
  {
    id: 2,
    name: "Deshi Mustard Oil/দেশি সরিষার তেল 1 Ltr.",
    price: 310,
    quantity: 1,
    image: shal,
  },
  {
    id: 3,
    name: "Deshi Mustard Oil/দেশি সরিষার তেল 1 Ltr.",
    price: 310,
    quantity: 1,
    image: shal,
  },
  {
    id: 4,
    name: "Deshi Mustard Oil/দেশি সরিষার তেল 1 Ltr.",
    price: 310,
    quantity: 1,
    image: shal,
  },
];

const AddCartDetails = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 container mx-auto w-full px-5">
        <div className="mx-auto p-4">
          <div className="hidden md:grid grid-cols-5 font-semibold border-b pb-2">
            <div className="col-span-2  md:py-2 py-0 md:text-lg text-base flex justify-center">
              <span className="col-span-2 text-center md:py-2 py-0 md:text-lg text-base ">Product</span>
            </div>
            {/* <div className="col-span-2  md:py-2 py-0 md:text-lg text-base flex justify-center">
              <span className=" gap-4 md:py-2 py-0 md:text-lg text-base w-full">Price</span>
              <span className=" gap-4 md:py-2 py-0 md:text-lg text-base w-full">Quantity</span>
            </div> */}
            <div className="  md:py-2 py-0 md:text-lg text-base flex justify-center">
              <span className="md:py-2 py-0 md:text-lg text-base ">Price</span>
            </div>
            <div className="  md:py-2 py-0 md:text-lg text-base flex justify-center">
              <span className="md:py-2 py-0 md:text-lg text-base ">Quantity</span>
            </div>
            <div className="  md:py-2 py-0 md:text-lg text-base flex justify-end">
              <span className="md:py-2 py-0 md:text-lg text-base ">Total</span>
            </div>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:grid md:grid-cols-5 md:gap-4 gap-0 items-center border-b py-4"
            >
              <div className="flex gap-4 items-center col-span-2 w-full">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
                <div>
                  <p className="font-medium xl:text-lg lg:text-base text-sm">{item.name}</p>
                  <button className="lg:text-base md:text-sm text-xs text-red-600 underline mt-1">Remove</button>
                </div>
              </div>
              {/* show above mid screen */}
              <div className="items-center justify-center text-center font-medium w-full xl:text-lg lg:text-base text-sm md:flex hidden">
                TK {(item.price * item.quantity).toFixed(2)}
              </div>
              <div className="items-center justify-center md:flex hidden">
                <button className="border px-2 text-red-600">-</button>
                <span className="px-4 xl:text-lg lg:text-base text-sm">{item.quantity}</span>
                <button className="border px-2 text-green-600">+</button>
              </div>
              {/* show below mid screen */}
              <div className="flex md:gap-4 items-center col-span-2 w-full md:hidden">
                <div className="items-center text-center font-medium w-full text-sm">
                  TK {(item.price * item.quantity).toFixed(2)}
                </div>
                <div className="flex items-center justify-center">
                  <button className="border px-2 text-red-600">-</button>
                  <span className="px-4 text-sm">{item.quantity}</span>
                  <button className="border px-2 text-green-600">+</button>
                </div>
              </div>

              <div className="hidden md:flex justify-end text-right font-medium mt-4 md:mt-0 w-full xl:text-lg">
                Tk {(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex md:justify-end justify-center container mx-auto px-5'>
        <div className="md:w-96 w-80  p-4">
          <div className="flex justify-between xl:text-lg md:text:base text-sm font-medium mb-3">
            <span>Subtotal</span>
            <span className="font-bold">Tk {(cartItems.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2)}</span>
          </div>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold xl:py-4  py-2 rounded">
            🛒 অর্ডার করুন
          </button>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default AddCartDetails;
