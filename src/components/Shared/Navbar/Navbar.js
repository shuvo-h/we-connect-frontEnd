import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <NavLink class="navbar-brand text-decoration-none text-dark" to="/">
          Navbar
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav text-center">
            <li class="nav-item">
              <NavLink
                class="text-decoration-none text-dark px-2"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="text-decoration-none text-dark px-2"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="text-decoration-none text-dark px-2" to="/about">
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="text-decoration-none text-dark px-2"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="text-decoration-none text-dark px-2"
                to="/dashboard"
              >
                DashBoard
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
