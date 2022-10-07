import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logo from '../imgs/logo.png'
import { useState } from 'react'

function Nav() {

  const [isActive, setIsActive] = useState(false);

  const HamburgerStatus = () => {
    setIsActive(!isActive)
  }

  return (
    <NavBar>
      <NavContainer>
      <Link to='/'><img  src={logo} alt="logoq" /></Link>
      <HamburgerButton onClick={HamburgerStatus} isActive={isActive}>
        <span href='#'></span>
        <span href='#'></span>
        <span href='#'></span>
      </HamburgerButton>
    <NavMenu>
      <li>
        <Link to='/sport'><a href='/sport'>Спорт</a></Link>
      </li>
      <li>
        <Link to='/health'><a href='/health'>Здраве</a></Link>
      </li>
      <li>
        <Link to='/business'><a href='/business'>Бизнес</a></Link>
      </li>
      <li>
        <Link to='/science'><a href='/science'>Наука</a></Link>
      </li>
      </NavMenu>
    </NavContainer>
    </NavBar>
  )
}

const HamburgerButton = styled.a`

  display:none;
  position:absolute;
  top: 2.5rem;
  right:2rem;
  flex-direction:column;
  justify-content:space-between;
  width:30px;
  height:21px;
  @media screen and (max-width: 600px) {
              display:flex;
              top:2rem;
}
  span {
    height:3px;
    width:100%;
    background:white;
    border-radius:10px;
  }
`

const NavBar = styled.div`
  height:100%;
   grid-column-start:1 ;
   grid-column-end:4;
   border-radius: 30px;
  background: #e0e0e0;
   box-shadow:  -8px 8px 16px #b5b5b5,
             8px -8px 16px #ffffff;
             @media screen and (max-width: 600px) {

              max-width:600px;
}
`
const NavContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 20px; 
    @media screen and (max-width: 600px) {
              width:100%;
              justify-content:left;
              padding-top:5px;
              padding-left:0;

}           
   
    img {
      margin-left:3.5rem;
      width:3rem;
      border-radius: 10px;
  background: #e0e0e0;
   box-shadow:  -8px 8px 16px #b5b5b5,
             8px -8px 16px #ffffff;
             @media screen and (max-width: 600px) {
             margin-left:1.5rem;
             margin-top:0.2rem;
             margin-right:0.2rem;

}           

       }
    
`
const NavMenu = styled.div`

  display:flex;
  li {
    padding:1rem;
    list-style-type:none;
    transition:transform .2s;
    @media screen and (max-width: 600px) {
      display:flex;
      padding:0;
      margin:0;
}
  
&:hover {
  transform: scale(1.1);
}
  }
  a {
    color: #050505b9;
    font-family: 'Courier New', Courier, monospace;
    font-weight:bold;
    position: relative;
    overflow: hidden;
     z-index: 1;
    text-decoration:none;
    padding:0.3rem;
    border-radius: 6px;
    background: #e0e0e0;
    box-shadow:  -8px -8px 18px #c3c3c3,
             8px 8px 18px #fdfdfd;
             @media screen and (max-width: 600px) {
              font-weight:normal;
              font-size:0.8rem;
}
  }
`

export default Nav;