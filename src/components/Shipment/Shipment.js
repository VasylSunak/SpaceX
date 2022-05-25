import React, { useContext, useEffect, useState } from 'react'
import './Shipment.css'
import { useLocation } from 'react-router-dom'
import { ShipmentsProvider } from '../../providers/ShipmentsProvider';
import { getNumberOfCargoBays } from '../../helpers/shipment.helper';

export default function Shipment() {

  const history = useLocation();
  const pathname = history.pathname.split('/')[1];

  const { shipments } = useContext(ShipmentsProvider);
  const shipment = shipments.find(shipment => shipment.id === pathname);

  const [cargoBays, setCargoBays] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value || '';
    const cargoBays = getNumberOfCargoBays(value);

    setInputValue(value);
    setCargoBays(cargoBays);
  }

  const {
    name,
    email,
    boxes = ''
  } = shipment || {};

  useEffect(() => {
    const cargoBays = getNumberOfCargoBays(boxes);
  
    setInputValue(boxes || '');
    setCargoBays(cargoBays);
  }, [boxes]);

  return (
    <div className="shipment">
        <span className="shipment__name">{name}</span>
        <span className="shipment__email">{email}</span>

        <div className="shipment__cargo-boxes">
          <label className="shipment__label">CARGO BOXES</label>
          <input className="shipment__input input" onChange={handleInputChange} value={inputValue} />
        </div>

        <span className="shipment__bays-text">Number of required cargo bays</span>
        <span className="shipment__bays-number">{cargoBays}</span>
    </div>
  )
}
