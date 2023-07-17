import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home/index';
import House from "./pages/House/index"
import About from "./pages/About/index"
import Error404 from "./pages/Error404/index"
import Header from "./components/Headers/index"
import Footer from "./components/Footer/index"
import "./"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kasa/" element={<Home />} />
        <Route path="/House/:id" element={<House />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);