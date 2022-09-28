import styled from "styled-components"
import Ads from "./Ads"
import ChatBox from "./ChatBox"
function GoogleAds() {
  return (
    <AsideContainer>
      <Ads />
      <ChatBox />
    </AsideContainer>
  )
}

const AsideContainer = styled.div`
height: 1000px;
`

export default GoogleAds