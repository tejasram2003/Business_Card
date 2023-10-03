import React from "react";
import Picture from "./Picture";
import About from "./About";
import Footer from "./Footer"


function App() {
  return (
    <div className="center-container">
    <div className="layout">
      <Picture />
      <About />
      <Footer />
  </div>
  </div>
  )
}

export default App;