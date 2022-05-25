import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import { ShipmentsProvider } from './providers/ShipmentsProvider';

function App() {

  const [shipments, setShipments] = useState([]);
  const [searchParam, setSearchParam] = useState('');

  useEffect(() => {
    fetchShipment();
  }, []);

  const fetchShipment = async () => {
    const response = await fetch('/shipment.json');
    const shipment = await response.json();

    setShipments(shipment);
  }

  const ProviderValue = {
    shipments, 
    searchParam, 
    setSearchParam
  }

  return (
    <div className="App">
      <ShipmentsProvider.Provider value={ProviderValue}>
        <Sidebar />
        <Main />
      </ShipmentsProvider.Provider>
    </div>
  );
}

export default App;
