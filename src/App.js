import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./components/Services/Services/Services";

// import Admin from './components/Dashboard/Admin/Admin/Admin';

import AllUsers from "./components/AllUsers/AllUsers";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/users" element={<AllUsers></AllUsers>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        
          {/* <Route path="/adminDashboard" element={<Admin />}></Route> */}
        </Routes>
      </Router>
  );
}

export default App;

