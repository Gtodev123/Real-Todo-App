import styled from 'styled-components'
import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <StyledFooter>
        <section class="footer">
      <div class="social">
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-snapchat"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-facebook-f"></i></a>
      </div>

      <ul class="list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <p class="copyright">Georgi Todev @ 2022</p>
    </section>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.div`
    width:100%;
    grid-column: 1 / span 3;
    border-radius: 41px;
background: #e0e0e0;
box-shadow:  -8px -8px 16px #b5b5b5,
             8px 8px 16px #ffffff;
`