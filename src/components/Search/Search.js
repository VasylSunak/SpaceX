import React, { useContext } from 'react'
import { ShipmentsProvider } from '../../providers/ShipmentsProvider';
import './Search.css'

export default function Search() {

  const { searchParam, setSearchParam } = useContext(ShipmentsProvider);

  const handleSearchChange = (e) => {
    setSearchParam(e.target.value)
  }

  return (
    <input 
      type="text" 
      value={searchParam} 
      placeholder="Search" 
      className="search input" 
      onChange={handleSearchChange} 
    />
  )
}
