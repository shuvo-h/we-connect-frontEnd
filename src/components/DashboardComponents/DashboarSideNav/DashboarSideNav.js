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
          <NavLink to="myservice">my service</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="myservice">my order</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="myservice">add service</NavLink>
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
