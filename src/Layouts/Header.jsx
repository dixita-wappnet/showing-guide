import React from 'react'
import {HiOutlineBell,HiOutlineLogout,HiOutlineSearch,HiOutlineCog,HiChevronDown} from 'react-icons/hi'
import { Menu } from '@headlessui/react';

export default function Header() {
  return (
    <div className="h-16 px-4 flex justify-between items-center text-xl">
      <div><strong>Create New Tour</strong></div>
      <div className='flex items-center gap-3 mr-2'>
        <HiOutlineBell/>  
        <HiOutlineSearch/>
        <HiOutlineCog/>
        <HiOutlineLogout/>
        <Menu>
          <Menu.Button>
           <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover' style={{backgroundImage:'url(./assets/face.png)'}}></div> 
          </Menu.Button>
        </Menu>
        <div>
         <span>Jack Hunter</span>
         <button className='flex flex-col px-3 bg-green-700 border-neutral-700 rounded-md'>Assistant</button>       
        </div>
        <button>
          <HiChevronDown/>        
        </button>
      
        </div>
       </div>
    
  );
}
