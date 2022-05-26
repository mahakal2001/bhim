import React from "react";
import "./App.css";
import Homepage from "./pages/home/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/dine-out" element={<h1>Dining out page</h1>} />
          <Route path="/cart" element={<h1>Cart page</h1>} />
          <Route path="/fooditem" element={<h1>Food item page</h1>} />
          <Route path="/checkout" element={<h1>Checkout page</h1>} />
          <Route path="/orders" element={<h1>Orders page</h1>} />
          <Route path="/register" element={<h1>Register page</h1>} />
          <Route path="/login" element={<h1>Login page</h1>} />
          <Route path="/about" element={<h1>About us page</h1>} />
          <Route path="/contact-us" element={<h1>Contact us page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
