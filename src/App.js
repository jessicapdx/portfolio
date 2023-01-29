// dependencies
import "./styling/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NavBar from "./NavBar";
import NoMatch from "./NoMatch";
import Portfolio from "./Portfolio";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-me" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact-me" element={<Contact />} />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
