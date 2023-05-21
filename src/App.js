import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Donors from './components/Donors';
import Donate from './components/Donate';
import Signin from './components/Signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import UserDashboard from './components/UserDashboard';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/editDashboard" element={<EditProfile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
