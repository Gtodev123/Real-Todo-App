import styled from "styled-components";
import Home from "./Home";

import React from 'react'

function Content() {
  return (
    <HomeContainer>
        <Home />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
width:100%;
`

export default Content