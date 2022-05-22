import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Shared/Footer';
import Carousel from './Shared/Carousel';
import BuisnessSummery from './Shared/BuisnessSummery';
import Tools from './Shared/Tools';
import Reviews from './Shared/Reviews/Reiviews';
import Contact from './Pages/Contact';
import About from "./Pages/About";
import Home from './Pages/Home';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from './Shared/NotFound';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
