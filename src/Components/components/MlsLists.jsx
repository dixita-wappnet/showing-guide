import React from 'react'
import { Mls_Lists } from '../../Data/MlsLists'

export default function MlsLists() {
  return (
    <div className="flex flex-col bg-#EAECF2 justify-center w-[290px] px-3 py-2 border rounded-lg">
    <div className="flex flex-row gap-[110px] ">
      <span className="py-2">MLS Lists</span>
      <button className="bg-slate-800 text-white rounded-lg px-3.5 py-2">
        View All
      </button>
    </div>
    <div  className="flex flex-col gap-2 py-3">
      {Mls_Lists.map((list)=>{
        return (
          <div className="flex flex-col px-1 cursor-pointer hover:bg-sky-300  bg-white">
          {list.tourName}
          <div className="flex flex-row gap-1 items-center">
            <img
              src={list.photo}
              alt=""
              className="h-[50px] w-[50px] rounded-full"/>
            <div className="flex flex-col">
              <span>{list.agentName}</span>
              {list.date}
            </div>
            <img
              src={list.photo}
              alt=""
              className="h-[35px] w-[35px]  rounded-full"/>
            <span className="pl-2">+8</span>
          </div>
        </div>
        )
      })}
    </div>
    </div>
  )
}
