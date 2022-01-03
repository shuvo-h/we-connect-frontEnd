import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { service_banner, service_catogory, service_details, service_used } =
    service;
  
  return (
    <div className="col-4 mb-4 mt-3">
      <div class="card">
        <img src={service_banner} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{service_catogory}</h5>
          <p class="card-text">{service_details}</p>
          <p>{service_used}</p>
          <Link to={`/services/chatagory?search=${service_catogory}`} class="btn btn-primary">See Providers</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
