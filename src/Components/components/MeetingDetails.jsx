import React from "react";
import {CiCalendarDate} from 'react-icons/ci'
import { RiTimerLine } from "react-icons/ri";
import {SlLocationPin} from 'react-icons/sl'

export default function MeetingDetails() {
  return (
    <div className="flex flex-col bg-white px-3 py-3 border rounded-lg">
      <span>Meeting Details</span>
      <div className=" flex flex-row max-lg:flex-col py-3 gap-4">
        <div>
        <input
          type="text"
          placeholder="Type your tour name"
          className="text-sm focus:outline-none active:outline-none h-[50px] w-[15rem] max-lg:w-[20rem] border border-gray-300 rounded-md px-3"/>
        </div>
        <div className="relative">
        <input
            type="text"
            placeholder="Meeting Location"
            className="text-sm focus:outline-none active:outline-none h-[50px] w-[15rem] max-lg:w-[20rem]  border border-gray-300 rounded-md px-3"/>
            <SlLocationPin fontSize={24}
              className="text-gray-500 absolute top-1/2 -translate-y-1/2 lg:right-3 max-lg:right-[15px]"/>
        </div>
        
      </div>
      <div className=" flex flex-row max-lg:flex-col py-3 gap-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Select Date"
          className="text-sm focus:outline-none active:outline-none h-[50px] w-[15rem] max-lg:w-[20rem]  border border-gray-300 rounded-md px-3"/>
          <CiCalendarDate fontSize={24}
            className="text-gray-500 absolute top-1/2 -translate-y-1/2 lg:right-3 max-lg:right-[15px]"/>
        </div>
        <div className="relative">
        <input
            type="text"
            placeholder="Select Time"
            className="text-sm focus:outline-none active:outline-none h-[50px] w-[15rem] max-lg:w-[20rem] border border-gray-300 rounded-md px-3"/>
            <RiTimerLine fontSize={24}
              className="text-gray-500 absolute top-1/2 -translate-y-1/2 lg:right-3 max-lg:right-[15px]" />
        </div>
        </div>
    </div>
  );
}
