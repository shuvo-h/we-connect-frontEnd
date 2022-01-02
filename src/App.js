import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./components/Services/Services/Services";
// import Admin from './components/Dashboard/Admin/Admin/Admin';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        
          {/* <Route path="/adminDashboard" element={<Admin />}></Route> */}
        </Routes>
      </Router>
  );
}

export default App;

