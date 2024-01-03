import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../assets/css/App.css'
import Home from './Home'
import ContenidoQuienSoy from './ContenidoQuienSoy';
import ContenidoNosotros from './Nosotros/ContenidoNosotros';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
         <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
