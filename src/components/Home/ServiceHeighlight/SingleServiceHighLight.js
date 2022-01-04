import React from "react";
import { Link } from "react-router-dom";

const SingleServiceHighLight = ({ singleService }) => {
  const { service_banner, service_details, service_used, service_catogory,_id } =
    singleService;
    
  return (
    <div className="col mb-2">
      <div class="card">
        <img src={service_banner} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{service_catogory}</h5>
          <p class="card-text">{service_details}</p>
          <p>{service_used}</p>
          <Link to={`/services/${service_catogory}`} class="btn btn-primary">
            All {service_catogory}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceHighLight;
