// src/App.js
import React from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Transaction from "./components/Transaction";
import Data from "./components/Data";
import Navbar from "./components/Navbar";

// import Header from './components/common/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/data" element={<Data />} />
          <Route exact path="/transaction" element={<Transaction />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
