import React from 'react'
import {HiOutlineBell,HiOutlineLogout,HiOutlineSearch,HiOutlineCog} from 'react-icons/hi'


export default function Header() {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center text-xl">
      <div><strong>Create New Tour</strong></div>
      <div className='flex items-center gap-3 mr-2'>
        <HiOutlineBell/>  
        <HiOutlineSearch/>
        <HiOutlineCog/>
        <HiOutlineLogout/>
        <div className='' style={{backgroundImage:'url(./assets/face.png)'}}>
            
        </div>
       </div>
    </div> 
  );
}
