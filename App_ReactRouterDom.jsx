import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Home from './pages/Home'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
