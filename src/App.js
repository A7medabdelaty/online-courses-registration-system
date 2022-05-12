import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Home.jsx";
import {
  Footer,
  Home,
  About,
  Courses,
  Teacher,
  ContactUs,
} from "./components";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {Header()}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
