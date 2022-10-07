
import Nav from './components/Nav';
import Sport from './pages/Sport';
import Health from './pages/Health';
import {Routes , Route} from 'react-router-dom'
import './App.css'
import styled from 'styled-components';
import Home from './pages/Home';
import Ads from './components/Ads'
import ChatBox from './components/ChatBox'
import Footer from './components/Footer';
import Science from './pages/Science';
import Technologies from './pages/Technologies';
import Business from './pages/Business';
 function App() {
  
  return (
    
    <StyledContainer className="App">
      <Nav />
      <Ads />
      <ChatBox />
      <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/sport' exact element={<Sport />} />
      <Route path='/health' exact element={<Health />} />
      <Route path='/business' exact element={<Business />} />
      <Route path='/science' exact element={<Science />} />
      <Route path='/technology' exact element={<Technologies />} />
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
  grid-template-rows: 6rem 400px 1fr 15rem;

  gap: 20px;
  box-sizing:border-box;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3 , 1fr);
  grid-template-rows: 4rem 400px 1fr 15rem;
}
  
`

export default App;