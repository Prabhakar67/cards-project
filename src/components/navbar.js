import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <ul className="nav">
        <li><Link to="/">Ati Shreshth</Link></li>
        <li><Link to="/MediumShreshth">Medium Shreshth</Link></li>
        <li><Link to="/Atituchh">Ati Tuchh</Link></li>
      </ul>
    )
}

export default Navbar