import { useState } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import Feed from './pages/Feed/Feed';
import MainNavbar from './components/MainNavbar';

function App() {

  const [login, setLogin] = useState(false);

  return (
    <>
      
      <BrowserRouter>
      {
        login && <MainNavbar />
      }
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/feed" element={<Feed />} />
          {/*<Route path="signup" element={<SignupPage />} /> */}
        </Routes>
        
      
      </BrowserRouter>
      
    </>
  );
}

export default App;
