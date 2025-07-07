import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './features/home/pages/home'
import LayOut from './features/layout/layout'


function App() {


  return (
   <Routes>

    <Route path='/' element={<LayOut/>}>
   <Route index element={<Home/>} />
   <Route path='home' element={<Home/>}/>
    
    </Route>

   </Routes>

  )
}

export default App
