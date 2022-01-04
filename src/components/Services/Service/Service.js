import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { service_banner, service_catogory, service_details, service_used } =
    service;

  const newServiceDetails = service_details.slice(0, 150);

  return (
    <div className="col-4 mb-4 mt-3">
      <div class="card">
        <img
          style={{
            height: "220px",
          }}
          src={service_banner}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{service_catogory}</h5>
          <p class="card-text">{newServiceDetails}</p>
          <p>{service_used}</p>
          <Link to={`/services/${service_catogory}`} class="btn btn-primary">
            All {service_catogory}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
