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
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
        <AuthProvider>
        <Routes>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
            <Route path="my" element={<PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>}></Route>
            <Route path="user" element={<PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>}></Route>
            <Route path="myservice" element={<PrivateRoute><MyServices></MyServices></PrivateRoute>}></Route>
            <Route path="admin" element={<PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>}></Route>
            <Route path="services/edit" element={<PrivateRoute><AllServiceDashBoard></AllServiceDashBoard></PrivateRoute>}></Route>
            <Route path="users/edit" element={<PrivateRoute><AllUsersDashBoard></AllUsersDashBoard></PrivateRoute>}></Route>
          </Route>

          <Route path="/services/:categoryName" element={<ProviverServiceCtg></ProviverServiceCtg>}></Route>
          <Route path="/users" element={<AllUsers></AllUsers>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
          <Route path="users/user/:userId" element={<UserProfile></UserProfile>} ></Route>

          <Route path="/*" element={<NotFound></NotFound>}></Route>
          <Route path="/about" element={<About></About>}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
    </AuthProvider>
      </Router>
  );
}

export default App;
