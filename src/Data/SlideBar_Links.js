import {HiOutlineViewGrid, 
        HiOutlineCalendar,
        HiOutlineSearch,
        HiOutlineUsers,
        HiOutlineShoppingCart,
        HiOutlineBell,
        HiOutlineBadgeCheck,
        HiOutlineQuestionMarkCircle} from 'react-icons/hi'

export const slideBar_Links = 
[{
   key: "dashboard",
   label: "Dashboard",
   path:"/",
   icon:<HiOutlineViewGrid/>
},
{
    key: "calendar",
    label: "Calendar",
    path:"/calendar",
    icon:<HiOutlineCalendar/>
},
{
    key: "search",
    label: "Search Property", 
    path:"/search",
    icon:<HiOutlineSearch/>
},
{
    key: "client",
    label: "My Clients",
    path:"/client",
    icon:<HiOutlineUsers/>
},
{
    key: "lists",
    label: "MLS Lists",
    path:"/lists",
    icon:<HiOutlineShoppingCart/>
},
{
    key: "notifications",
    label: "Notifications",
    path:"/notifications",
    icon:<HiOutlineBell/>
},
{
    key: "teams",
    label: "Users & Teams",
    path:"/teams",
    icon:<HiOutlineBadgeCheck/>
},
]

export const slideBar_Bottom_Links = 
[{
    key: "help",
    label: "Help Desk",
    path:"/help",
    icon:<HiOutlineQuestionMarkCircle/>
}]