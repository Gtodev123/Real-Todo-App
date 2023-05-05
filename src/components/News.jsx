import styled from "styled-components";

const  News = () => {
  return (
<StyledNewsContainer>
  <h1>Водещите новини</h1>
  
   
    </StyledNewsContainer>
  )
}

const StyledNewsContainer = styled.div`
  grid-row-start:2;
  grid-row-end:span 2;
  grid-column-start:2;
  grid-column-end:4;
  box-sizing:content-box;
  @media screen and (max-width: 600px) {
    grid-row-start:2;
  grid-row-end:span 2;
  grid-column-start:1;
  grid-column-end:4;
  box-sizing:content-box;
  }
`
;
export default News