import styled from 'styled-components'
import React from 'react'

function ChatBox() {
  return (
    <ChatContainer>ChatBox</ChatContainer>
  )
}


const ChatContainer = styled.div`
border-radius: 41px;
background: #e0e0e0;
box-shadow:  -8px -8px 16px #b5b5b5,
             8px 8px 16px #ffffff;
 @media screen and (max-width: 600px) {
    display: none;
  }

`
export default ChatBox