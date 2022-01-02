import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, img, bio, category, address, area, _id } = user;
  console.log(user);
  return (
    <div className="col-12 col-lg-4">
      <div class="card m-2 border-0 shadow">
        <img
          src={img}
          class="rounded-circle h-50 w-50 mx-auto border mt-3"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{bio}</p>
          <p>{category}</p>
          <p>{address}</p>
          <p>{area}</p>
          <Link to={`user/${_id}`} class="btn btn-primary">
            Profile
          </Link>
        </div>
      </div>
      {/* <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={img} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">{bio}</p>
              <p class="card-text">
                <small class="text-muted">{category}</small>
              </p>
              <p class="card-text">
                <small class="text-muted">{address}</small>
              </p>
              <p class="card-text">
                <small class="text-muted">{area}</small>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default User;
