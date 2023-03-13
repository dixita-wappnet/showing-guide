import React from 'react'
import { Mls_Lists } from '../../Data/MlsLists'

export default function MlsLists() {
  return (
    <div id="mlsLists" className="flex flex-col justify-center  px-3 py-2 border rounded-lg">
    <div className="flex flex-row lg:gap-[110px] max-lg:gap-[170px] ">
      <span className="py-2">MLS Lists</span>
      <button className="bg-slate-800 text-sm text-white rounded-lg px-3.5 py-2">
        View All
      </button>
    </div>
    <div  className="flex flex-col gap-2 py-3">
      {Mls_Lists.map((list)=>{
        return (
          <div className="flex flex-col px-1 py-1 cursor-pointer hover:border border-blue-500 bg-white">
          {list.tourName}
          <div className="flex flex-row gap-1 py-3 items-center">
            <img
              src={list.photo}
              alt=""
              className="h-[40px] w-[40px] rounded-full"/>
            <div className="flex flex-col">
              <span>{list.agentName}</span>
              {list.date}
            </div>

            <img
              src={list.photo}
              alt=""
              className="h-[35px] w-[35px] max-lg:ml-7 rounded-full"/>
            <span className='max-lg:ml-6'>+8</span>
          </div>
        </div>
        )
      })}
    </div>
    </div>
  )
}
