import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Donor from './components/Donor';
import Donate from './components/Donate';
import Search from './components/Search';
import Signin from './components/Signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donors" element={<Donor />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
