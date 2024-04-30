import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Premium from './Components/Cars/Premium';
import Retro from './Components/Cars/Retro';
import Header from './Components/Head/Header';
import Head from './Components/Head/Head';
import Card from './Components/Head/Card';
import Home from './Components/Head/Home';


function App(){
  return (
    <BrowserRouter>
      <Head />
      <Routes> 
        <Route path='/Header' element={<Header />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Card' element={<Card />}/>
        <Route path='/Premium' element={<Premium />}/>
        <Route path='/Retro' element={<Retro />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
