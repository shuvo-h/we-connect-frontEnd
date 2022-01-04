import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, img, bio, category, address, joined, area, _id, email } = user;
  const bioUpdated = bio.slice(0, 60);

  return (
    <div className="col-12 col-lg-4">
      <div class="card m-2 border-0 shadow">
        <div className="mx-auto">
          <img
            src={img}
            class="  border mt-3 rounded-circle"
            height="150px"
            width="150px"
            alt="..."
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p className="my-1">Address: {address}</p>
          <p className="my-1 fw-bold">Email: {email}</p>
          <p className="mb-2">Working since: {joined}</p>
          <p class="card-text">{bioUpdated}</p>
          <div className="w-50 text-center  mx-auto">
            <p
              style={{
                backgroundColor: "rgba(121, 121, 121, 0.5)",
                color: "blue",
              }}
              className="fw-bold p-2 rounded-pill"
            >
              {category}
            </p>
          </div>
          <p className="">Service area: {area}</p>

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
