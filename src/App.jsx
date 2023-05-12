
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import Products from './pages/Products'
import Header from './components/layout/Header'
import NoFound from './pages/NoFound'
import ProtectedAuth from './components/auth/ProtectedAuth'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <section className='grid grid-rows-[auto_1fr] min-h-screen font-[Yantramanav]'>

<Header/>

      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>

<Route element={<ProtectedAuth/>}>

      <Route path="/purchases" element={<Purchases/>}/>

</Route>


      <Route path="/products/:id" element={<Products/>}/>
      <Route path="/*" element={<NoFound/>}/>




      </Routes>

      <Cart/>
   
    </section>
  )
}

export default App
