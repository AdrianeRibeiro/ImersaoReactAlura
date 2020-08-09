import React from 'react'
import { FooterBase } from './styles'

export default function Footer() {
  return(
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p> Projeto criado durante a 
        <a href="https://www.alura.com.br/"> Imersão React da Alura</a>
      </p>
    </FooterBase>
  )
}