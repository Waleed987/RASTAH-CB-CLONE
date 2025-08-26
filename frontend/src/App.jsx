
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Allcollection from './pages/Allcollection'
import Admin from './pages/Admin'
import Mens from './pages/Mens'
import Women from './pages/Women'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
function App() { 
  
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/womens' element={<Women/>}/>
        <Route path='/all' element={<Allcollection/>} />
        <Route path='/product/:productId' element={<ProductDetail/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
