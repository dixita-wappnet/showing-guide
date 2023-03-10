import React from "react";
import { HiOutlineDuplicate } from "react-icons/hi";

export default function MlsNumbers() {
  return (
    <div className=" flex flex-col bg-white w-[310px] px-3 py-3 border rounded-lg">
      <div className="relative ">
        <span>MLS Numbers</span>
        <p className="py-3 text-sm text-slate-500">
          Select from the cart or copy & paste MLS numbers
        </p>
        <input
          type="text"
          placeholder="MLS Numbers"
          className="text-sm focus:outline-none active:outline-none h-[150px] w-[18rem] border border-gray-300 rounded-md px-3"
        />
        <HiOutlineDuplicate
          fontSize={28}
          className="text-gray-500 absolute top-1/3 translate-y-1/2 right-3"
        />
      </div>
      <div className="flex flex-row px-3.5 py-5 gap-3">
        <div className="bg-slate-800 cursor-pointer text-white px-2 py-4 rounded-lg">
          <button>Search MLS#</button>
        </div>
        <div className="bg-slate-500 cursor-pointer text-white px-2 py-4 rounded-lg">
          <button>Select from Cart</button>
        </div>
      </div>
    </div>
  );
}
