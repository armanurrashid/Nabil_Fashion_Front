import React, { useState } from 'react'
import { BsFilterRight } from 'react-icons/bs';

const FilterBy = () => {

  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const openOffCanvas = () => setIsCanvasOpen(true);
  const closeOffCanvas = () => setIsCanvasOpen(false);
  return (
    <div>
      <div>
        <div
          className="flex text-xl text-gray-800 cursor-pointer"
          onClick={openOffCanvas}
        >
          <div className="flex items-center mx-2">
            <BsFilterRight />
          </div>
          <p className="font-medium mx-1">Filter</p>
        </div>

        {isCanvasOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={closeOffCanvas}
          ></div>
        )}

        <div
          className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isCanvasOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <h2 className="text-lg font-bold text-black uppercase">Filter</h2>
            <button onClick={closeOffCanvas} className="text-black text-2xl hover:text-red-500">
              ✖
            </button>
          </div>

          <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
            <div className="mb-6">
              <h3 className="text-md font-semibold mb-2 border-b-2 border-black w-fit">Price</h3>
              <div className="my-4">
                <div className="h-1 bg-black rounded relative">
                  <div className="absolute left-0 top-[-6px] w-3 h-3 bg-black rounded-full cursor-pointer"></div>
                  <div className="absolute right-0 top-[-6px] w-3 h-3 bg-black rounded-full cursor-pointer"></div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Price: <span className="font-bold">Tk 0 — Tk 2,140</span>
              </p>
              <button className="px-6 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition">
                FILTER
              </button>
            </div>

            <div>
              <h3 className="text-md font-semibold mb-2 border-b-2 border-black w-fit">Color</h3>
              <div className="space-y-4 mt-4">
                {[
                  { color: 'bg-black', label: 'Black' },
                  { color: 'bg-gray-700', label: 'Black Wash' },
                  { color: 'bg-yellow-800', label: 'Brown' },
                  { color: 'bg-amber-900', label: 'Dark Brown' },
                  { color: 'bg-lime-300', label: 'Green' },
                  { color: 'bg-gray-400', label: 'Grey' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full ${item.color}`}></div>
                    <span className="text-black text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBy;