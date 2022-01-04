import React from "react";
import { Link } from "react-router-dom";

const CategoryServices = ({ ctgUser }) => {
  const { img, name, _id } = ctgUser;

  return (
    <div className="col-md-4 col-12 mb-4 rounded-3">
      <div class="card ">
        <img
          style={{
            height: "220px",
          }}
          src={img}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <Link to={`/users/user/${_id}`} class="btn btn-primary">
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryServices;
