import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Head from './Components/Head/Head';
import Header from './Components/Header';
import Premium from './Components/Cars/Premium';
import Retro from './Components/Cars/Retro';
import Card from './Components/Card';
import Home from './Components/Home';


function App(){
  return (
    <BrowserRouter>
      <Head />
      <Routes> 
        <Route path='/Home' element={<Header />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Card' element={<Card />}/>
        <Route path='/Premium' element={<Premium />}/>
        <Route path='/Retro' element={<Retro />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
