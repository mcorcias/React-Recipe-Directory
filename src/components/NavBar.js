import {Link} from 'react-router-dom'

import './NavBar.css'
import React from 'react'

export default function NavBar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to='/' className='brand'><h1>Cooking Ninja</h1></Link>
            <Link to='/create'><h1>Create Recipe</h1></Link>
        </nav>
    </div>
  )
}


