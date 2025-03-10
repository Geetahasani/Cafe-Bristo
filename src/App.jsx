import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Nopage from "./pages/nopage/Nopage";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import State from "./context/data/State";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <State>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="*" element={<Nopage />} /> 
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
    </State>
      
    
    
  );
}

export default App;
