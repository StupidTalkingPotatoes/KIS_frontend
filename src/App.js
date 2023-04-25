import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Arrival from './Pages/Arrival/Arrival.js';
import ArrivalModal from './Pages/Arrival/Modal.js';
import Location from './Pages/Location/Location.js';
import LocationModal from './Pages/Location/Modal.js';
import Path from './Pages/Path/Path.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/arrival" element={<Arrival />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/path" element={<Path />}></Route>
        <Route path="/arrivalmodal" element={<ArrivalModal />}></Route>
        <Route path="/locationmodal" element={<LocationModal />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;