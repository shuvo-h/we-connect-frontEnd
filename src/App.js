import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./components/Services/Services/Services";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Router>
  );
}

export default App;

