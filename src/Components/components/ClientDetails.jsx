import React from 'react'
import {RiUserLine, RiUserSearchLine} from 'react-icons/ri'
export default function ClientDetails() {
  return (
    <div className="flex flex-col bg-white w-[630px] px-3 py-2 border rounded-lg">
        <span>Agent & Client Details</span>
        <p className="py-2 text-sm text-slate-500">Pick your agent and client</p>
        <div className='flex flex-row gap-3 py-2'>
        <div className='flex border-dashed cursor-pointer justify-center px-6 py-7 border-2 border-gray-300'>
          <RiUserLine/>
          <button className='px-2'>Select agent from list</button>
        </div>
        <div className='flex border-dashed cursor-pointer justify-center px-12 py-7  border-2 border-gray-300'>
        <RiUserSearchLine/>
          <button className='px-2'>Add new client or select from list</button>
        </div>
        </div>
    </div>
  )
}
