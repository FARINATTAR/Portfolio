import React from "react"
import Navbar from "./components/navbar"
import HeroSection from "./pages/Home"
import EarthCanvas from "./components/canvas/Earth"
function App() {

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      {/* <EarthCanvas/> */}
    </div>
  )
}

export default App
