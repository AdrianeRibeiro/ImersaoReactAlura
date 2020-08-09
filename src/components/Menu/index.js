import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/image/Logo.png'
import './Menu.css'
import Button from '../Button/index'

export default function Menu() {
  return(
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="ReactFlix Logo"></img>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  )
}