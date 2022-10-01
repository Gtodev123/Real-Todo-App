
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
  background-image:url('https://img.freepik.com/free-vector/low-poly-white-background-design_1017-33204.jpg?w=2000');
  padding:10px;
  width:100%;
  height:100%;
  display:grid;


  grid-template-columns: repeat(3 , 1fr);
  grid-template-rows: 5rem 1fr 1fr 10rem;

  gap: 20px;
  box-sizing:border-box;

`

export default App;