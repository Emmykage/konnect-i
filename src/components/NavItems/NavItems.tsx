import React from 'react'
import { NavLink } from 'react-router-dom'
import home from '../../assets/images/svg/home.svg'
import briefcase from '../../assets/images/svg/briefcase.svg'
import booking from '../../assets/images/svg/booking.svg'
import person from '../../assets/images/svg/person.svg'
import './navItem.scss'
const NavItems = () => {
    const items = [
        {
            label: "Home",
            icon: home,
            link: "/"
        },
        {
            label: "Mentors",
            icon: person,
            link: "/mentors"
        },
        {
            label: "Job",
            icon: briefcase,
            link: "/job"
        },
        {
            label: "Booking",
            icon: booking,
            link: "/booking"
        }
    ]
  return (
    <div className='py-4 navItems'>
        <ul>
            {items.map(item => (
                <li className='my-5'>
                    <NavLink className={({isActive}) => isActive ?  "px-2 lg:px-4 py-2 rounded-lg active flex items-center gap-1 md:gap-3" : "px-2 lg:px-4 py-2 rounded-lg  flex items-center md:gap-3"} to={item.link}><img src={item.icon} alt="" /> 
                    <span className='hidden lg:block'>{item.label}</span>
                     </NavLink>
                  
                </li>
            ))}

        </ul>
    </div>
  )
}

export default NavItems