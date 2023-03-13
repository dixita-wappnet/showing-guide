import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { Drafts_details } from "../../Data/Drafts";
import { TbCalendarEvent } from "react-icons/tb";

export default function Drafts() {
  return (
    <div
      id="drafts"
      className="flex flex-col justify-center px-3 py-2 border rounded-lg"
    >
      <div className="flex flex-row lg:gap-[140px] max-lg:gap-[200px]">
        <span className="py-2">Drafts</span>
        <button className="bg-slate-800 text-sm text-white rounded-lg px-3 py-2">
          View All
        </button>
      </div>
      <div className="flex flex-col gap-2 py-3">
        {Drafts_details.map((draft) => {
          return (
            <div className="flex flex-col px-1 py-2 cursor-pointer bg-white hover:border border-blue-500">
              {draft.tourName}
              <div className="flex flex-row py-1">
                <SlLocationPin fontSize={18} />
                {draft.address}
                <TbCalendarEvent fontSize={30} className="pl-3" />
                {draft.time}
              </div>
              <div className="flex flex-row gap-1 items-center">
                <img
                  src={draft.photo}
                  alt=""
                  className="h-[40px] w-[40px] rounded-full"
                />
                <div className="flex flex-col">
                  <span>Agent</span>
                  {draft.agentName}
                </div>
                <div className="ml-2 flex flex-row">
                  <span>
                    <img
                      src={draft.photo}
                      alt=""
                      className="absolute h-[35px] border-2 border-white w-[35px]  rounded-full"
                    />
                  </span>

                  <span className="absolute">
                    <img
                      src={draft.photo}
                      alt=""
                      className="relative h-[35px] ml-4 z-10 border-2 border-white w-[35px]  rounded-full"
                    />
                  </span>

                  <span>
                    <img
                      src={draft.photo}
                      alt=""
                      className="relative ml-8 z-10 h-[35px] border-2 border-white w-[35px]  rounded-full"
                    />
                  </span>
                </div>

                <span className="pl-2 max-lg:ml-10">+8</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
