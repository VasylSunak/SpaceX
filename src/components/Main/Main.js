import React from 'react'
import './Main.css';
import Search from '../Search/Search'
import Shipment from '../Shipment/Shipment'

export default function Main() {
  return (
    <div className="main">
      <Search />
      <Shipment />
    </div>
  )
}
