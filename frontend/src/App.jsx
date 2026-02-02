import React, { useState } from 'react'
import { ToastContainer } from "react-toastify";
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import { StoreContext } from './context/StoreContext';
import { useContext } from 'react';
const App = () => {
  const {showLogin, setShowLogin} = useContext(StoreContext)
  return (
    <>
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='App'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />

        </Routes>
      </div>
      <AppDownload />
      <Footer />
    </>

  )
}

export default App