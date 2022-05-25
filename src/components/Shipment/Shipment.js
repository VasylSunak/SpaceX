import React, { useContext, useEffect, useState } from 'react'
import './Shipment.css'
import { useLocation } from 'react-router-dom'
import { ShipmentsProvider } from '../../providers/ShipmentsProvider';
import { getCargoBaysInfo } from '../../helpers/shipment.helper';

export default function Shipment() {

  const history = useLocation();
  const pathname = history.pathname.split('/')[1];

  const { shipments } = useContext(ShipmentsProvider);
  const shipment = shipments.find(shipment => shipment.id === pathname);

  const [cargoBays, setCargoBays] = useState({});
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value || '';
    const cargoBays = getCargoBaysInfo(value);

    setInputValue(value);
    setCargoBays(cargoBays);
  }

  const {
    name,
    email,
    boxes = ''
  } = shipment || {};

  useEffect(() => {
    const cargoBays = getCargoBaysInfo(boxes);
  
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

        {cargoBays.error ?
          <span className="shipment__error">{cargoBays.error}</span> :
          <span className="shipment__bays-number">{cargoBays.value}</span>}
        
    </div>
  )
}
