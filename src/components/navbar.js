import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <ul className="nav">
        <li><Link to="/">Ati Shreshth</Link></li>
        <li><Link to="/About">Medium Shreshth</Link></li>
        <li><Link to="/Contact">Ati Tuchh</Link></li>
      </ul>
    )
}

export default Navbar