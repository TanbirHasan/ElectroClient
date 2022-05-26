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
import Purchase from './Pages/Purchase';
import { createContext, useState } from 'react';
import ProductDetails from './Pages/ProductDetails';
import Dashboard from './Pages/Dashboard';
import RequireAuth from './RequireAuth';
import MyProfile from './Pages/MyProfile';
import MyReview from './Pages/MyReview';
import MyOrders from './Pages/MyOrders';
import MakeAdmin from './Pages/MakeAdmin';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageAllOrders from './Pages/ManageAllOrders';
import AddaProduct from './Pages/AddaProduct';
import ManageProduct from './Pages/ManageProduct';
import Payment from './Pages/Payment';
import Blogs from './Pages/Blogs';
import MyPortfolio from './Pages/MyPortfolio';






function App() {



  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/myportfolio" element={<MyPortfolio />}></Route>

        <Route path="/productdetails" element={<ProductDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="orders" element={<MyOrders />}></Route>
          <Route path="makeadmin" element={<MakeAdmin />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path="manageorders" element={<ManageAllOrders />}></Route>
          <Route path="addaproduct" element={<AddaProduct />}></Route>
          <Route path="manageproduct" element={<ManageProduct />}></Route>
        </Route>
        <Route path="/purchase/:id" element={<Purchase />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer></ToastContainer>

      <Footer />
    </div>
  );
}

export default App;
