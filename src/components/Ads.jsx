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
    box-sizing:border-box;
    justify-content:center;
    border-radius: 41px;
background: #e0e0e0;
box-shadow:  11px 11px 22px #b5b5b5,
             -11px -11px 22px #ffffff;
    
    img {
      border-radius:2rem;
    }

`


export default Ads