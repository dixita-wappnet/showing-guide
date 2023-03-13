import classNames from 'classnames'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { slideBar_Bottom_Links } from '../../Data/SlideBar_Links'

const slideBar_Links_classes = 'flex items-center gap-2 font-light px-3 py-2 hover:text-white hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function NavigationBottom() {
  return (
    <div>
        {slideBar_Bottom_Links.map((slider_items) => {
            return <div>
                 <SlidebarLinks key={slider_items.key} slider_items={slider_items}/>
            </div>
        })}
    </div>
  )
}

function SlidebarLinks({slider_items}){

    const {pathname} = useLocation()
 
     return <NavLink to={slider_items.path} className={classNames(pathname === slider_items.path ? 'text-neutral-600' :'text-neutral-600',slideBar_Links_classes) }>
         <span className='text-xl'>{slider_items.icon}</span>
         {slider_items.label}
     </NavLink>
 }
