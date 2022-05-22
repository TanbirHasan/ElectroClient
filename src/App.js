import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Shared/Footer';
import Carousel from './Shared/Carousel';
import BuisnessSummery from './Shared/BuisnessSummery';
import Tools from './Shared/Tools';
import Reviews from './Shared/Reviews/Reiviews';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel/>
      <Tools/>
      <Routes></Routes>
      <BuisnessSummery/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
