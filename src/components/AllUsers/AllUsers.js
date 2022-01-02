import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "../../redux/slices/usersSlice";
import User from "./User";

const AllUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersData());
  }, []);
  const users = useSelector((state) => state?.users?.allUsers[0]);

  console.log(users);

  return (
    <div>
      <h2 className="text-center my-5">our all users</h2>
      <div className="row container mx-auto">
        {users?.map((user) => (
          <User user={user} key={user._id}></User>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
