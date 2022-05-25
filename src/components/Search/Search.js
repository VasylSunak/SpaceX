import React, { useContext, useEffect, useState } from 'react'
import { filterShipments } from '../../helpers/shipment.helper';
import { ShipmentsProvider } from '../../providers/ShipmentsProvider';
import Dropdown from '../Dropdown/Dropdown';
import './Search.css'

export default function Search() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { shipments, searchParam, setSearchParam } = useContext(ShipmentsProvider);

  const filteredShipments = filterShipments(shipments, searchParam);

  const handleSearchChange = (e) => setSearchParam(e.target.value);

  useEffect(() => {
    setIsDropdownOpen(shipments && searchParam);
  }, [shipments, searchParam]);

  return (
    <div className='search'>
      <input 
        type="text" 
        value={searchParam} 
        placeholder="Search" 
        className="search__input input" 
        onChange={handleSearchChange} 
      />
      {isDropdownOpen && 
        <Dropdown items={filteredShipments} setIsDropdownOpen={setIsDropdownOpen} />}
    </div>
  )
}
