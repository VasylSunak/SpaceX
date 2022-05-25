import React from 'react'
import { NavLink } from 'react-router-dom'
import './Dropdown.css'

export default function Dropdown({
    items,
    setIsDropdownOpen
}) {

    const handleNavLink = () => setIsDropdownOpen(false);

    const handleMapItems = (item) => 
        <NavLink 
            key={item.id}
            to={`/${item.id}`} 
            onClick={handleNavLink}
            className='dropdown__item'
        >
            {item.name}
        </NavLink>

  return (
    <div className='dropdown'>
        {items?.map(handleMapItems)}
    </div>
  )
}
