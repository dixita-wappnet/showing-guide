import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { Drafts_details } from "../../Data/Drafts";
import { TbCalendarEvent } from "react-icons/tb";

export default function Drafts() {
  return (
    <div className="flex flex-col bg-#EAECF2 justify-center w-[290px] px-3 py-2 border rounded-lg">
      <div className="flex flex-row gap-[140px]">
        <span className="py-2">Drafts</span>
        <button className="bg-slate-800 text-white rounded-lg px-3 py-2">
          View All
        </button>
      </div>
      <div className="flex flex-col gap-2 py-3">
        {Drafts_details.map((draft) => {
          return (
            <div className="flex flex-col px-1 py-2 cursor-pointer hover:bg-sky-300  bg-white">
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
                  className="h-[50px] w-[50px] rounded-full"/>
                <div className="flex flex-col">
                  <span>Agent</span>
                  {draft.agentName}
                </div>
                <div className="relative flex flex-row">
                <img
                  src={draft.photo}
                  alt=""
                  className="h-[35px] w-[35px] rounded-full"/>
                  <img
                  src={draft.photo}
                  alt=""
                  className="h-[35px] w-[35px] rounded-full"/>
                  <img
                  src={draft.photo}
                  alt=""
                  className="h-[35px] w-[35px] rounded-full"/>
                </div>
                
                <span className="pl-10">+8</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
