import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navbar.css'
import { useState } from 'react'
import {MenuOutlined,HomeOutlined} from '@ant-design/icons'

  

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const closeNavBar = ()=>{
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <MenuOutlined />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={closeNavBar}><HomeOutlined className='icon-home'  />Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/projets" onClick={closeNavBar}>Projets</NavLink>
            </li>
            
            <li>
              <NavLink to="/monProfil" onClick={closeNavBar}>Mon Profil</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeNavBar}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar