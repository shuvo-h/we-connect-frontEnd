import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const DashboarSideNav = () => {
  const { logOut } = useAuth();

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
          <button onClick={logOut}>logout</button>
        </li>
      </ul>
    </div>
  );
};

export default DashboarSideNav;
