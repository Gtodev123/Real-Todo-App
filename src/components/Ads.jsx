import styled from 'styled-components';
import React from 'react'
import img from '../img/img.jpg'
function Ads() {
  return (
    <AdsContainer>
      <img src={img} alt="" />
    </AdsContainer>
  )
}

const AdsContainer = styled.div`
    width:100%;
    height:30%;
    background-color:pink;
    margin-bottom:2rem;
    border:2px solid black;

    img {
        width:400px;
        height:300px;
        object-fit:cover;
    }
`


export default Ads