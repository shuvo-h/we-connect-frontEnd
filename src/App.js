import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./components/Services/Services/Services";
import Dashboard from "./components/DashboardComponents/Dashboard/Dashboard";
import UserDashboard from "./components/DashboardComponents/UserDashboard/UserDashboard";
import AdminDashboard from "./components/DashboardComponents/AdminDashboard/AdminDashboard";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                <Route path="user" element={<UserDashboard></UserDashboard>}></Route>
                <Route path="admin" element={<AdminDashboard></AdminDashboard>}></Route>
            </Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Router>
  );
}

export default App;

