import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "../../redux/slices/usersSlice";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import User from "./User";

const AllUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersData());
  }, []);
  const users = useSelector((state) => state?.users?.allUsers[0]);

  return (
    <div>
      <Navigation />
      <h2 className="text-center my-5">our all users</h2>
      {
        users?.length ? <div className="row container mx-auto">
            {users?.map((user) => (
              <User user={user} key={user._id}></User>
            ))}
          </div>
        : <div className="d-flex justify-content-center my-5">
          <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
      }
      
      <Footer />
    </div>
  );
};

export default AllUsers;
