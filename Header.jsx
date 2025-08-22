import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='parent'>
        <h2 className='firstChild'>Sheriyans <input></input></h2>
        <div className='secondChild'>
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/contact' >Contacts</Link>
            <Link to='/products' >Products</Link>
        </div>
    </div>
  )
}

export default Header
