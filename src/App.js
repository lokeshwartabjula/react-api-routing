import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';
import ProfileListingPage from './ProfileListingPage';
import ProfileDetailPage from './ProfileDetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route exact path="/profile" element={<ProfileListingPage/>} />
        <Route path="/profile/:id" element={<ProfileDetailPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
