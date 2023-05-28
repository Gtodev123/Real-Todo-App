
import { Routes , Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Mainpage from './components/Mainpage';
 function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>

      </div>
  );
}



export default App;