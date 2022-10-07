
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Acai from './pages/Acai';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/acai' element={<Acai />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
