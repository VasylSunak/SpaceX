import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { filterShipments } from '../../helpers/shipment.helper';
import { ShipmentsProvider } from '../../providers/ShipmentsProvider';
import './Menu.css'

export default function Menu({
  isMenuOpen,
  setIsMenuOpen
}) {

  const MenuClassName = `menu ${isMenuOpen ? 'open' : ''}`;

  const { shipments, searchParam } = useContext(ShipmentsProvider);

  const filteredShipments = filterShipments(shipments, searchParam);

  const handleNavLink = () => setIsMenuOpen(false);

  const handleMapShipments = (shipment) =>
    <NavLink 
      key={shipment.id} 
      className="menu__item" 
      to={`/${shipment.id}`}
      onClick={handleNavLink} 
    >
      {shipment.name}
    </NavLink>

  return (
    <div className={MenuClassName}>
      <span className="menu__title">SHIPMENT LIST</span>
      {filteredShipments.map(handleMapShipments)}
    </div>
  )
}
