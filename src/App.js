import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./components/Services/Services/Services";
import Dashboard from "./components/DashboardComponents/Dashboard/Dashboard";
import UserDashboard from "./components/DashboardComponents/UserDashboard/UserDashboard";
import AdminDashboard from "./components/DashboardComponents/AdminDashboard/AdminDashboard";
import AllUsers from "./components/AllUsers/AllUsers";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

import ContactUs from "./components/ContactUs/ContactUs";
import UserProfile from "./components/UserProfile/UserProfile";
import MyServices from "./components/DashboardComponents/UserDashboard/MyServices";
import AuthProvider from "./context/AuthProvider";
import AllServiceDashBoard from "./components/DashboardComponents/AllServiceDashBoard/AllServiceDashBoard";
import AllUsersDashBoard from "./components/DashboardComponents/AllUsersDashBoard/AllUsersDashBoard";
import ProviverServiceCtg from "./components/ProviverServiceCtg/ProviverServiceCtg";
import DashboardHome from "./components/DashboardComponents/DashboardHome/DashboardHome";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route path="my" element={<DashboardHome></DashboardHome>}></Route>
            <Route path="user" element={<UserDashboard></UserDashboard>}></Route>
            <Route path="myservice" element={<MyServices></MyServices>}></Route>
            <Route path="admin" element={<AdminDashboard></AdminDashboard>}></Route>
            <Route path="services/edit" element={<AllServiceDashBoard></AllServiceDashBoard>}></Route>
            <Route path="users/edit" element={<AllUsersDashBoard></AllUsersDashBoard>}></Route>
          </Route>

          <Route path="/services/:categoryName" element={<ProviverServiceCtg></ProviverServiceCtg>}></Route>
          <Route path="/users" element={<AllUsers></AllUsers>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
          <Route path="users/user/:userId" element={<UserProfile></UserProfile>} ></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
