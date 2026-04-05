import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import DemoAccessGate from './Components/DemoAccessGate'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='*' element={<DemoAccessGate />}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
