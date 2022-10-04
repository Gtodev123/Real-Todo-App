
import Nav from './components/Nav';
import Sport from './pages/Sport';
import {Routes , Route} from 'react-router-dom'
import './App.css'
import styled from 'styled-components';
import Home from './pages/Home';
import Ads from './components/Ads'
import ChatBox from './components/ChatBox'
import Footer from './components/Footer';
 function App() {
  
  return (
    
    <StyledContainer className="App">
      <Nav />
      <Ads />
      <ChatBox />
      <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/sport' exact element={<Sport />} />
      </Routes>
      <Footer />
     

    </StyledContainer>
      

  );
}

const StyledContainer = styled.div`
 
background: #e0e0e0;
box-shadow:  -8px -8px 16px #b5b5b5,
             8px 8px 16px #ffffff;
  padding:10px;
  width:100%;
  height:100%;
  display:grid;


  grid-template-columns: repeat(3 , 1fr);
  grid-template-rows: 5rem 400px 1fr 10rem;

  gap: 20px;
  box-sizing:border-box;

`

export default App;