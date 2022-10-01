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
        <Link to='/sport'><a>Спорт</a></Link>
      </li>
      <li>
        <Link to='/health'><a>Здраве</a></Link>
      </li>
      <li>
        <Link to='/health'><a>Здраве</a></Link>
      </li>
      </NavMenu>
    </NavContainer>
    </NavBar>
  )
}


const NavBar = styled.div`
  border: 1px solid black;
   grid-column-start:1 ;
   grid-column-end:4;
   background-color:#e2e2e228;
   border-radius:1rem;
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