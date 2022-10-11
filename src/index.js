
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom' 


import Home from './pages/home';
import Acai from './pages/Acai';
import Signo from './pages/signo';
import Gramas from './pages/gramas';
import Salario from './pages/salario';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

    
      <Route path='/home' element={<Home/>}/>
      <Route path='/acai' element={<Acai />} />
      <Route path='/signo' element={<Signo/>}/> 
      <Route path='/gramas' element={<Gramas/>}/>
      <Route path='/salario' element={<Salario/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
