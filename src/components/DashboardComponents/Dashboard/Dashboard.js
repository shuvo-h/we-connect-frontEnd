import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboarSideNav from "../DashboarSideNav/DashboarSideNav";
import "./dashboard.css";

const Dashboard = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div>
      <div
        className={
          navOpen
            ? " dashboard-leftnav-container d-block"
            : " dashboard-leftnav-container d-none d-md-block bg-dark"
        }
      >
        <div>
          <DashboarSideNav></DashboarSideNav>
        </div>
      </div>
      <div
        className={
          navOpen
            ? " bg-black text-white toggle-icon rounded-end d-md-none"
            : " bg-black text-white rounded-end d-md-none"
        }
        style={{ width: "25px" }}
        onClick={() => setNavOpen(!navOpen)}
      >
        {navOpen ? "X" : ">>"}
      </div>
      <div className="outlet-container">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
