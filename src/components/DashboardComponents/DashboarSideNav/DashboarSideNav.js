import React from "react";
import { NavLink } from "react-router-dom";

const DashboarSideNav = () => {
  return (
    <div className="mt-5">
      <ul>
        <li>
          {" "}
          <NavLink to="/home">home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="services/edit">All services</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="users/edit">All Users</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="myOrder">my order</NavLink>
        </li>

        <li>
          {" "}
          <NavLink to="myservice">logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboarSideNav;
