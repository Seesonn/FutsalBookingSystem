
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./project/Navigation";
import Home from "./project/Home";
import About from "./project/About";
import Contact from "./project/Contact";
import Footer from "./project/Footer";
import VerificationCode from "./project/VerificationCode";
import Login from "./project/Login";
import Register from "./project/Register";
import FutsalCardPage from "./project/FutsalcardPage";
import BookingSlot from "./project/BookingSlots";

function App() {
  return (
    <Router>
      <div className="bg-[#04153F] min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/futsal-venues" element={<FutsalCardPage/>} />
            <Route path="/booking" element={<BookingSlot />} />
            <Route path="/verify" element={<VerificationCode />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

