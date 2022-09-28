import styled from "styled-components"
import News from "../components/News"
import GoogleAds from "../components/GoogleAds"

function Home() {
  return (
    <GridContainer>
        <GoogleAds />
        <News />
    </GridContainer>
  )
}


const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 1fr;
`


export default Home