import React from "react"
import Home from "./project/Home"
import About from "./project/About"
import Contact from "./project/Contact"
import Footer from "./project/Footer"
import FutsalVenues from "./project/Futsal"
import BookingSlot from "./project/BookingSlots"
function App() {
 

  return (
    <div className="bg-[#04153F]">
    <Home/>
    <About/>
    <FutsalVenues/>
    <BookingSlot/>
    <Contact/>
    <Footer/>
   
    </div>
  )
}

export default App
