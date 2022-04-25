import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} /> */}
        </Routes>
        
      
      </BrowserRouter>
      
    </>
  );
}

export default App;
