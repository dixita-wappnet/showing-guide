import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Agent_Details } from "../../Data/AgentDetails";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function SelectAgent() {
  return (
    <>
      <div className="bg-white h-[910px]  px-3 py-2 border rounded-lg">
        <span>Select Agent to the New Tour</span>
        <p className="py-2 text-sm text-slate-500">24 agent Found</p>
        <div className="relative">
          <HiOutlineSearch
            fontSize={24}
            className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-2"/>
          <input
            type="text"
            placeholder="Name, Phone or Email"
            className="text-sm focus:outline-none active:outline-none h-10 w-[20rem] border border-gray-300 rounded-md px-4 pl-10"/>
        </div>
        <div className="flex flex-col py-3 ">
          {Agent_Details.map((Agent) => {
            return (
            <div className=" py-1">
              <div className="flex px-1 py-1 items-center cursor-pointer hover:bg-sky-300  bg-gray-100">
                <img
                  src={Agent.photo}
                  alt="pic"
                  className="h-[55px] w-[55px] rounded-full"/>
                <div className="py-1 px-1">
                  <div className="px-2 py-0.5">{Agent.name}</div>
                  <div className=" flex py-0.5">
                    <img
                      src="./assets/flag.png"
                      alt=""
                      className="h-[1.5rem] w-[2rem] rounded-full"/>
                    {Agent.number}
                  </div>
                  <div className="flex px-2 gap-1.5 py-0.5">
                    <HiOutlineMailOpen fontSize={19} />
                    {Agent.email}
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </div>
        <center>
        <div className="flex justify-center gap-2 pr-3.5">
            <button><FaAngleLeft/></button>
            <div className="flex bg-sky-300 gap-3 px-6 py-3 rounded-lg" >
            <button><b>1</b></button>
            <FaAngleDown className="mt-0.5"/>
            </div>
            <button className="bg-slate-200 px-4 rounded-lg">50</button>
            <button className="bg-blue-700 px-4 rounded-lg"><FaAngleRight/></button>
        </div>
        </center>
      </div>
    </>
  );
}
