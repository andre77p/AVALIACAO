
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom' 


import Home from './pages/home';
import Acai from './pages/Acai';
import Signo from './pages/signo';
import Gramas from './pages/gramas';
import Salario from './pages/salario';
import Combustivel from './pages/combustivel';
import Febre from './pages/febre';
import Cinema from './pages/cinema'
import Orcamento from './pages/orcamento';
import Sequencia from './pages/sequencia';
import Linha from './pages/linha';
import Retangulo from './pages/retangulo';
import Juros from './pages/juros';
import Media from './pages/media';




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
      <Route path='/combustivel' element={<Combustivel/>}/>
      <Route path='/febre' element={<Febre/>}/>
      <Route path='/cinema' element={<Cinema/>}/>
      <Route path='/orcamento' element={<Orcamento/>}/>
      <Route path='/sequencia' element={<Sequencia/>}/>
      <Route path='/linha' element={<Linha/>}/>
      <Route path='/retangulo' element={<Retangulo/>}/>
      <Route path='/juros' element={<Juros/>}/>
      <Route path='/media' element={<Media/>}/>
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
