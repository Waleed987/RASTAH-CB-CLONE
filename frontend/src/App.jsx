
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
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
import { CartProvider } from './context/CartContext'

function App() { 
  
  return (
    <>
      <GoogleOAuthProvider clientId="659328278975-tvtk5plab7t388ma3gqetd2q0te5lchb.apps.googleusercontent.com">
        <CartProvider>
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
        </CartProvider>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
