import styled from 'styled-components'
import React from 'react'

function Footer() {
  return (
    <StyledFooter>
        <h1>Created by Todev</h1>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.div`
    width:100%;
    grid-column: 1 / span 3;
    background-color:#6c7960
`