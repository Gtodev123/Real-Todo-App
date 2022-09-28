import styled from 'styled-components'
import React from 'react'

function ChatBox() {
  return (
    <ChatContainer>ChatBox</ChatContainer>
  )
}


const ChatContainer = styled.div`
    box-sizing: content-box;
    height:100%;
    width: 100%;
    background-color:blue;
    border:2px solid black;
`
export default ChatBox