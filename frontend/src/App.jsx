import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Allcollection from './pages/Allcollection'
import Admin from './pages/Admin'
function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/all' element={<Allcollection/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
