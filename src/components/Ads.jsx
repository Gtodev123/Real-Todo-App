import styled from 'styled-components';
import React from 'react'
function Ads() {


  
  return (
    <AdsContainer>
     <img src="https://i.pinimg.com/originals/06/9d/61/069d617dca720be2d65014963515d28e.gif" alt="" />
    </AdsContainer>
  )
}

const AdsContainer = styled.div`
    display:flex;
    border-radius:2rem; 
    border:1px solid black;
    box-sizing:border-box;
    justify-content:center;
    
    img {
      border-radius:2rem;
    }

`


export default Ads