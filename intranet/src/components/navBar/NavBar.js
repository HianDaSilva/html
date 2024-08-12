import React from 'react'
import './NavBar.css'
import dsmLogo from '../../images/dsmLogo.png'


function NavBar() {
  return (
    <div>
        <nav class="navBar">
            <div class="leftNav">
                <img src={dsmLogo} alt="dsmLogo"/>
                <ul class="header-title" style={{ listStyleType: 'none' }}>
                    <li class="header"><a href="#">Diretoria de Serviço Militar</a></li>
                    <li class="header-subtitle">CONFEDERAÇÃO DO TIRO BRASILEIRO / 1906</li>
                </ul>
            </div>
            <div class="rightNav">
                <ul class="navBar-options" style={{listStyleType: 'none'}}>
                    <li class="op-divisor"><a href="#">Ministério da Defesa</a></li>
                    <li><a href="#">Órgãos do Governo</a></li>
                    <li><a href="#">Acesso a informação</a></li>
                    <li><a href="#">Legislação</a></li>
                    <li><a href="#">Acessibilidade</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar