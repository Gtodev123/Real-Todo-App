import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <NavBar>
      <NavContainer>
      <h1><Link to='/'>All News</Link></h1>
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
      <li>
        <Link to='/technology'><a href='/technology'>Технологий</a></Link>
      </li> 
      </NavMenu>
    </NavContainer>
    </NavBar>
  )
}


const NavBar = styled.div`
   grid-column-start:1 ;
   grid-column-end:4;
   border-radius: 41px;
background: #e0e0e0;
box-shadow:  -8px 8px 16px #b5b5b5,
             8px -8px 16px #ffffff;
`
const NavContainer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;  
`
const NavMenu = styled.div`
  display:flex;
  li {
    padding:1rem;
    list-style-type:none;
  }
  a {
    text-decoration:none;
  }
`

export default Nav;