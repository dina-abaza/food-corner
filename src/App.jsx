import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './features/home/pages/home'
import LayOut from './features/layout/layout'
import Register from './features/auth/register'
import Login from './features/auth/login'
import About from './features/about/about'
import Contact from './features/contact/contact'
import { ToastContainer } from "react-toastify";
import Menu from './features/menu/menu'
import "react-toastify/dist/ReactToastify.css";
import ReservationForm from './features/reserve.jsx/reserve'




function App() {

  return (
    <>
     <Routes>
      
      <Route path='/' element={<LayOut/>}>
      <Route index element={<Home/>} />
      <Route path='home' element={<Home/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='menu' element={<Menu/>}/>
      <Route path='reservation' element={<ReservationForm/>}/>

      </Route>

    </Routes>

      <ToastContainer 
       position="bottom-right"  
        autoClose={5000}         
        hideProgressBar={false} 
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
 


  )
}

export default App
