import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { fetchSingleUser } from "../../redux/slices/usersSlice";
import "./UserProfile.css";

const UserProfile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleUser(userId));
  }, [userId]);

  const userProfile = useSelector((state) => state.users.singleUser);

  const { img, name, address, area, bio } = userProfile;
  const { user } = useAuth();

  return (
    <div
      style={{
        marginTop: "-10px",
      }}
    >
      <div
        style={{
          height: "200px",
        }}
        className="w-100 bg-secondary"
      ></div>
      <div className="profile-pic ms-5 text-center">
        <img className="img-fluid h-100" src={img} alt="" />
        <b>{name}</b>
        <b>{user.email}</b>
      </div>
      <div className="row container mt-5">
        <div className="col-md-6 col-12">
          <p>{bio}</p>
        </div>
        <div className="col-md-6 col-12">
          <p>{address}</p>
          <p>{area}</p>
        </div>
        <div className="col-md-6 col-12 my-3">
          <b>Add a review</b>
          <br />
          <textarea
            className="py-2 px-3 rounded-3 border-1 w-100 mt-2"
            type="text"
            placeholder="add review"
          />
          <br />
          <button className="btn btn-primary">Review Now</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
