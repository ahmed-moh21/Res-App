import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/NavBar/nav";
import Home from "./Component/Home/home";
import About from "./Component/About/about";
import Contact from "./Component/Contact/contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
/* /contact */