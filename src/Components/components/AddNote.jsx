import React from 'react'

export default function AddNote() {
  return (
    <div className="flex flex-col bg-white w-[310px] px-3 py-3 border rounded-lg">
      <span>Add Note</span>
      <div className='py-5'>
      <input type="area"
        placeholder="Type your note here.."
        className="text-sm focus:outline-none active:outline-none h-[250px] w-[18rem] border border-gray-300 rounded-md px-3 "/>
      </div>
      
    </div>
  )
}
