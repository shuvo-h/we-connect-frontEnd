import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./DashboardSideNav.css";

const DashboarSideNav = () => {
  const { logOut } = useAuth();

  return (
    <div className="mt-5 d-flex justify-content-center">
      <ul className="dashboardList">
        <li className="pt-3">
          {" "}
          <NavLink to="/home">
            <i class="fas fa-home"></i> home
          </NavLink>
        </li>
        <li className="pt-3">
          {" "}
          <NavLink to="services/edit">
            {" "}
            <i class="fas fa-user-cog"></i> All services
          </NavLink>
        </li>
        <li className="pt-3">
          {" "}
          <NavLink to="users/edit">
            <i class="fas fa-users"></i> All Users
          </NavLink>
        </li>
        {/* <li className="pt-3">
          {" "}
          <NavLink to="myOrder"> <i class="fas fa-shopping-cart"></i> my order</NavLink>
        </li> */}

        <li className="pt-3">
          {" "}
          <button className="btn btn-danger" onClick={logOut}>
            logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DashboarSideNav;
