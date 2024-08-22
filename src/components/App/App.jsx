import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VendingMachine from '../VendingMachine/VendingMachine';
import Coffee from '../Coffee/Coffee';
import MilkTea from '../MilkTea/MilkTea';
import Wafer from '../Wafer/Wafer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<VendingMachine />} />
      <Route path="/coffee" element={<Coffee />} />
      <Route path="/milktea" element={<MilkTea />} />
      <Route path="/wafer" element={<Wafer />} />
    </Routes>
  );
}

export default App;
